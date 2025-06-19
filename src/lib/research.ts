import { access, readdir, readFile } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { CompileResults, unified } from 'unified'

const researchPath = path.join(process.cwd(), 'src', 'research-pages')

export type ResearchFrontmatter = {
    title: string
    description?: string
    image?: string
}

export type ResearchData = {
    slug: string
    metadata: ResearchFrontmatter
    content: CompileResults | string
}

export const getResearchData = async (slug: string): Promise<ResearchData | null> => {
    const filePath = path.join(researchPath, `${slug}.mdx`)

    try {
        await access(filePath)
    } catch (err) {
        return null
    }

    const fileContent = await readFile(filePath, 'utf8')
    const { content, data } = matter(fileContent)
    const frontmatter = data as ResearchFrontmatter

    const file = await unified()
        .use(remarkParse)
        .use(remarkGfm)
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

export const getResearchList = async (): Promise<ResearchData[]> => {
    const files = await readdir(researchPath)

    const allResearch = await Promise.all(
        files
            .filter((file) => file.endsWith('.mdx'))
            .map(async (file) => {
                const slug = file.replace(/\.mdx$/, '')
                return await getResearchData(slug)
            }),
    )

    return allResearch.filter(Boolean) as ResearchData[]
}
