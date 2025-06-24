import { Layout } from '@/components/layout'
import { Research } from '@/components/sections/research'
import { OPEN_GRAPH_IMAGE } from '@/config'
import type { Metadata } from 'next'

const title = 'Lab'
const description = 'Lab'

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

const ResearchPage = async () => {
    return (
        <Layout>
            <div className="pt-12 pb-24">
                <Research />
            </div>
        </Layout>
    )
}

export default ResearchPage
