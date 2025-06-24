import { Layout } from '@/components/layout'
import { Resources } from '@/components/sections/resources'
import { OPEN_GRAPH_IMAGE } from '@/config'
import type { Metadata } from 'next'

const title = 'Resources'
const description = 'TRAIL resources.'

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

const ResourcesPage = () => {
    return (
        <Layout>
            <div className="pt-12 pb-24">
                <Resources />
            </div>
        </Layout>
    )
}

export default ResourcesPage
