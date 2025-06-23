import { Typography } from '@/components/typography'
import { news } from '@/data'
import { parseTextWithLinks } from '@/utils/parseText'
import React from 'react'

export const News = () => {
    return (
        <section className="flex flex-col space-y-8 py-4 pb-24">
            <Typography variant="h1" underline>
                News
            </Typography>
            <div>
                {news.map((item, index) => (
                    <div key={index} className="mb-4 grid grid-cols-[8rem_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        {/* Date section */}
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            <p className="text-sm font-medium leading-7">{item.date}</p>
                        </div>

                        {/* News Content */}
                        <div>
                            <p className="text-sm font-medium leading-7">{parseTextWithLinks(item.news)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
