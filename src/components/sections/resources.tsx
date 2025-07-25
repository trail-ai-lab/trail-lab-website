import { DatasetCard } from '@/components/sections/resource-type/DatasetCard'
import { PDFCard } from '@/components/sections/resource-type/PDFCard'
import { ToolCard } from '@/components/sections/resource-type/ToolCard'
import { VideoCard } from '@/components/sections/resource-type/VideoCard'
import { resources } from '@/data/resources'

export function Resources() {
    const grouped = resources.reduce(
        (acc, item) => {
            acc[item.category] ||= []
            acc[item.category].push(item)
            return acc
        },
        {} as Record<string, typeof resources>,
    )

    return (
        <section className="flex flex-col">
            <h2 className="text-3xl font-medium lg:text-4xl">Resources</h2>

            {Object.entries(grouped).map(([category, items]) => (
                <div className="mt-24" key={category}>
                    <h3 className="text-2xl font-semibold mb-6">{category}</h3>
                    <div className="grid gap-8 md:grid-cols-2">
                        {items.map((item) => {
                            switch (item.type) {
                                case 'tool':
                                    return <ToolCard key={item.id} {...item} />
                                case 'video':
                                    return <VideoCard key={item.id} {...item} />
                                case 'pdf':
                                    return <PDFCard key={item.id} {...item} />
                                case 'dataset':
                                    return <DatasetCard key={item.id} {...item} />
                                default:
                                    return null
                            }
                        })}
                    </div>
                </div>
            ))}
        </section>
    )
}
