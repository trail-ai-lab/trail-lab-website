'use client'

import { people } from '@/data/people'
import { publications as allPublications } from '@/data/publications'
import Link from 'next/link'
import * as React from 'react'

type PublicationsProps = {
    filterByAuthorId?: string
    filterByIds?: string[]
}

export const Publications = ({ filterByAuthorId, filterByIds }: PublicationsProps) => {
    let publications = allPublications

    if (filterByAuthorId) {
        publications = publications.filter((pub) => pub.authors.includes(filterByAuthorId))
    } else if (filterByIds) {
        publications = publications.filter((pub) => filterByIds.includes(pub.id))
    }

    const publicationsCount = `${publications.length} PAPER${publications.length !== 1 ? 'S' : ''}`
    const displayedYears = new Set<string>()

    const renderAuthors = (authorIdsOrNames: string[]) =>
        authorIdsOrNames
            .map((author) => {
                const person = people.find((p) => p.id === author)
                if (person) {
                    return (
                        <Link key={person.id} href={`/people/${person.id}`} className="text-primary hover:underline">
                            {person.name}
                        </Link>
                    )
                } else {
                    return <span key={author}>{author}</span>
                }
            })
            .reduce<React.ReactNode[]>((acc, curr, index) => {
                if (!curr) return acc
                return index === 0 ? [curr] : [...acc, ', ', curr]
            }, [])

    return (
        <section className="flex flex-col">
            <p className="mb-4 text-xs text-muted-foreground">{publicationsCount}</p>
            <h2 className="text-3xl font-medium lg:text-4xl">Our Publications</h2>

            <div className="mt-24 flex flex-col space-y-6">
                <div className="flex flex-col gap-12">
                    {publications
                        .slice()
                        .sort((a, b) => Number(b.year) - Number(a.year))
                        .map((item) => {
                            const shouldShowYear = !displayedYears.has(item.year)
                            displayedYears.add(item.year)

                            return (
                                <div key={item.id} className="flex flex-col space-y-2">
                                    <div className="grid gap-4">
                                        <div className="grid grid-cols-[5rem_1fr] items-start gap-4">
                                            <div className={`text-left ${shouldShowYear ? '' : 'invisible'}`}>
                                                <h2 className="scroll-m-20 text-muted-foreground text-3xl font-semibold tracking-tight first:mt-0">
                                                    {item.year}
                                                </h2>
                                            </div>
                                            <div className="text-left space-y-2">
                                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                                    {item.title}
                                                </h4>
                                                <p className="leading-7">{renderAuthors(item.authors)}</p>
                                                <p className="text-sm text-muted-foreground">{item.publisher}</p>

                                                {item.link && (
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 text-primary hover:underline"
                                                    >
                                                        <i className="icon-[simple-icons--adobeacrobatreader] size-4"></i>
                                                        <span>View Paper</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}
