import { Layout } from '@/components/layout'
import { Publications } from '@/components/sections/publications'
import { OPEN_GRAPH_IMAGE } from '@/config'
import type { Metadata } from 'next'

const title = 'Publications'
const description = 'TRAIL publications.'

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

const PublicationsPage = () => {
    return (
        <Layout>
            <div className="pt-12 pb-24">
                <Publications />
            </div>
        </Layout>
    )
}

export default PublicationsPage
