import { access, readdir, readFile } from 'fs/promises'
import path from 'path'
import dayjs from 'dayjs'
import matter from 'gray-matter'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { CompileResults, unified } from 'unified'

const projectsPath = path.join(process.cwd(), 'src', 'projects')

export type ProjectsFrontmatter = {
    title: string
    description: string
    tags: string[]
    image: string
    date: string
}

export type ProjectData = {
    slug: string
    metadata: ProjectsFrontmatter
    content: CompileResults
}

export const getProjectsData = async (slug: string): Promise<ProjectData | null> => {
    const filePath = path.resolve(path.join(projectsPath, `${slug}.mdx`))

    try {
        await access(filePath)
    } catch (err) {
        return null
    }

    const { content, data } = matter(await readFile(filePath, 'utf8'))
    const frontmatter = data as ProjectsFrontmatter

    if (!frontmatter.date) {
        return null
    }

    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeCodeTitles)
        .use(rehypePrismPlus)
        .use(rehypeStringify)
        .process(content)

    return {
        slug,
        metadata: frontmatter,
        content: file.toString(),
    }
}

export const getProjectsList = async (tag?: string): Promise<ProjectData[]> => {
    const files = await readdir(projectsPath)

    const posts = await Promise.all(
        files.map(async (file) => {
            const slug = file.replace(/\.mdx$/, '')
            const projectData = await getProjectsData(slug)
            if (!tag || (projectData && projectData.metadata.tags.includes(tag))) {
                return projectData
            }
            return null
        }),
    )

    // Remove null entries
    const filteredPosts = posts.filter(Boolean) as ProjectData[]

    // Sort by date (ascending)
    const sorted = filteredPosts.sort((a, b) => {
        const dateA = dayjs(a?.metadata?.date || '')
        const dateB = dayjs(b?.metadata?.date || '')
        return dateA.isValid() && dateB.isValid() ? dateB.diff(dateA) : 0
    })

    return sorted
}

export const getProjectTags = async () => {
    const posts = await getProjectsList()
    const tagsSet = new Set<string>()

    posts.forEach((post) => {
        post.metadata.tags.forEach((tag) => tagsSet.add(tag))
    })

    const tags = Array.from(tagsSet).map((tag) => ({ tag }))

    return tags
}
