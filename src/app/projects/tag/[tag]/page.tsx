import { Layout } from '@/components/layout'
import { Projects } from '@/components/sections/projects'
import { OPEN_GRAPH_IMAGE } from '@/config'
import { getProjectsList, getProjectTags } from '@/lib/projects'
import { capitalize } from '@/utils/capitalize'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface ProjectTagPageProps {
    params: {
        tag: string
    }
}

export const generateMetadata = async ({ params }: ProjectTagPageProps): Promise<Metadata> => {
    const { tag } = params

    if (!tag) {
        return notFound()
    }

    const capita = capitalize(tag)

    const title = `Lab Projects - ${capita}`
    const description = `Explore a collection of articles and projects with tag ${capita} by Lab. Discover more ${capita} related projects.`

    return {
        title: {
            absolute: title,
        },
        description,
        openGraph: {
            title: {
                absolute: title,
            },
            description,
            images: [
                {
                    url: OPEN_GRAPH_IMAGE,
                    width: 800,
                    height: 600,
                },
            ],
        },
        twitter: {
            title: {
                absolute: title,
            },
            description,
            images: [OPEN_GRAPH_IMAGE],
        },
    }
}

const ProjectTagPage = async ({ params }: ProjectTagPageProps) => {
    const { tag } = params

    if (!tag) {
        return notFound
    }

    const projects = await getProjectsList(tag)

    return (
        <Layout>
            <Projects projects={projects} tag={capitalize(tag)} />
        </Layout>
    )
}

export default ProjectTagPage

export const generateStaticParams = async () => {
    const tags = await getProjectTags()

    return tags
}
