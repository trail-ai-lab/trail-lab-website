import { news } from '@/data'
import { parseTextWithLinks } from '@/utils/parseText'
import { ArrowRight } from 'lucide-react'
import React from 'react'

interface NewsProps {
    showAll?: boolean
}

export const News = ({ showAll = false }: NewsProps) => {
    const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    const displayedNews = showAll ? sortedNews : sortedNews.slice(0, 5)

    return (
        <section className="flex flex-col">
            <p className="mb-4 text-xs text-muted-foreground">NEWS</p>
            <h2 className="text-3xl font-medium lg:text-4xl">Latest Updates From Our Lab</h2>

            <div className="mt-24 flex flex-col">
                <div className="flex flex-col">
                    {displayedNews.map((item, index) => (
                        <div
                            key={index}
                            className="mb-4 flex flex-col gap-2 pb-4 last:mb-0 last:pb-0 lg:grid lg:grid-cols-[12rem_1fr] lg:items-start"
                        >
                            {/* Date section */}
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-primary" />
                                <p className="text-sm text-foreground lg:text-lg">{item.date}</p>
                            </div>

                            {/* News content */}
                            <div>
                                <p
                                    className="text-sm text-muted-foreground lg:text-lg"
                                    dangerouslySetInnerHTML={{ __html: parseTextWithLinks(item.news) }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {!showAll && (
                <div className="mt-12 mb-24">
                    <a
                        href="/news"
                        className="group flex items-center text-primary text-xs font-medium md:text-base lg:text-lg"
                    >
                        View All News
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            )}
        </section>
    )
}
