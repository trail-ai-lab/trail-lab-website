import { Layout } from '@/components/layout'
import { News } from '@/components/sections/news'

const NewsPage = () => {
    return (
        <Layout>
            <div className="pt-12 pb-24">
                <News showAll={true} />
            </div>
        </Layout>
    )
}

export default NewsPage
