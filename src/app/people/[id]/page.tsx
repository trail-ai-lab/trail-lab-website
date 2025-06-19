import { Layout } from '@/components/layout'
import { Projects } from '@/components/sections/projects'
import { Publications } from '@/components/sections/publications'
import { ResearchList } from '@/components/sections/research-list'
import { people } from '@/data/people'
import { publications } from '@/data/publications'
import { researchAreas } from '@/data/research'
import { getProjectsList } from '@/lib/projects'
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
    const allProjects = await getProjectsList()
    const associatedProjects = allProjects.filter((proj) => person.projects?.includes(proj.slug))

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
                    <p className="text-muted-foreground">{person.designation}</p>
                </div>

                {/* Research Areas */}
                {associatedResearch.length > 0 && (
                    <div>
                        <ResearchList filterByIds={person.research} />
                    </div>
                )}

                {/* Publications */}
                {hasPublications && (
                    <div>
                        <Publications filterByAuthorId={person.id} />
                    </div>
                )}

                {/* Projects */}
                {associatedProjects.length > 0 && (
                    <div>
                        <Projects projects={associatedProjects} />
                    </div>
                )}
            </section>
        </Layout>
    )
}

export default PersonPage
