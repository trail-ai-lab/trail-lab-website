import { Layout } from '@/components/layout'
import { People } from '@/components/sections/people'
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

const PeoplePage = async () => {
    return (
        <Layout>
            <div className="pt-12 pb-24">
                <People />
            </div>
        </Layout>
    )
}

export default PeoplePage
