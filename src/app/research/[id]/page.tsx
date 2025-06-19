import { Layout } from '@/components/layout'
import { Projects } from '@/components/sections/projects'
import { Publications } from '@/components/sections/publications'
import { Typography } from '@/components/typography'
import { Separator } from '@/components/ui/separator'
import { people } from '@/data/people'
import { researchAreas } from '@/data/research'
import { getProjectsList } from '@/lib/projects'
import { getResearchData } from '@/lib/research'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    return researchAreas.map((r) => ({ id: r.id }))
}

export default async function ResearchDetailPage({ params }: { params: { id: string } }) {
    const rawArea = researchAreas.find((r) => r.id === params.id)
    if (!rawArea || !rawArea.markdown) return notFound()

    const area = rawArea
    const researchFile = await getResearchData(area.markdown)
    if (!researchFile) return notFound()

    const associatedPeople = people.filter((p) => area.people?.includes(p.id))
    const allProjects = await getProjectsList()
    const associatedProjects = allProjects.filter((project) => area.projects?.includes(project.slug))

    const publications = area.publications ?? []

    return (
        <Layout>
            <section className="py-12 max-w-6xl mx-auto space-y-12">
                <div className="space-y-6">
                    <Typography variant="h1">{area.title}</Typography>
                    <Separator />
                    <article
                        className="prose prose-a:text-primary max-w-none"
                        dangerouslySetInnerHTML={{ __html: researchFile.content }}
                    />
                </div>

                {publications.length > 0 && <Publications filterByIds={publications} />}

                {associatedProjects.length > 0 && <Projects projects={associatedProjects} />}

                {associatedPeople.length > 0 && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-4">
                            <Typography variant="h1">People</Typography>
                        </div>
                        <ul className="list-disc list-inside">
                            {associatedPeople.map((person) => (
                                <li key={person.id}>
                                    <Link href={`/people/${person.id}`} className="text-primary hover:underline">
                                        {person.name}
                                    </Link>
                                    <span className="text-sm text-muted-foreground"> – {person.designation}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
        </Layout>
    )
}
