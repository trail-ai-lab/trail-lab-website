import { Layout } from '@/components/layout'
import { Publications } from '@/components/sections/publications'
import { people } from '@/data/people'
import { publications } from '@/data/publications'
import { researchAreas } from '@/data/research'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    return people.map((person) => ({ id: person.id }))
}

const PersonPage = async ({ params }: { params: { id: string } }) => {
    const person = people.find((p) => p.id === params.id)
    if (!person) return notFound()

    const hasPublications = publications.some((pub) => pub.authors.includes(person.id))

    const associatedResearch = researchAreas.filter((r) => person.research?.includes(r.id))

    return (
        <Layout>
            <section className="flex flex-col space-y-24 pb-24 pt-12">
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <Image
                        src={person.image || '/images/people/default-avatar.png'}
                        alt={person.name}
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                    <h1 className="text-3xl font-bold">{person.name}</h1>
                    <p className="text-muted-foreground text-center">{person.designation}</p>

                    {person.advisor && (
                        <p className="text-sm text-muted-foreground text-center">
                            Advisor:{' '}
                            {person.advisorUrl ? (
                                <Link
                                    href={person.advisorUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-2 hover:text-primary"
                                >
                                    {person.advisor}
                                </Link>
                            ) : (
                                person.advisor
                            )}
                        </p>
                    )}

                    {person.website && (
                        <p className="text-sm text-muted-foreground text-center">
                            Website:{' '}
                            <Link
                                href={person.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-2 hover:text-primary"
                            >
                                {new URL(person.website).hostname.replace(/^www\./, '')}
                            </Link>
                        </p>
                    )}
                </div>

                {/* Publications */}
                {hasPublications && (
                    <div>
                        <Publications filterByAuthorId={person.id} />
                    </div>
                )}
            </section>
        </Layout>
    )
}

export default PersonPage
