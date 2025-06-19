import { Layout } from '@/components/layout'
import { Projects } from '@/components/sections/projects'
import { OPEN_GRAPH_IMAGE } from '@/config'
import { getProjectsList } from '@/lib/projects'
import type { Metadata } from 'next'

const title = 'Projects'
const description = 'Explore a collection of articles and projects posts by lab.'

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
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
        title,
        description,
        images: [OPEN_GRAPH_IMAGE],
    },
}

const ProjectsPage = async () => {
    const projects = await getProjectsList()

    return (
        <Layout>
            <div className="pt-12 pb-24">
                <Projects projects={projects} />
            </div>
        </Layout>
    )
}

export default ProjectsPage
