import { Typography } from '@/components/typography'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { badgeVariants } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { ProjectData } from '@/lib/projects'
import dayjs from 'dayjs'
import Image from 'next/image'
import NextLink from 'next/link'
import { Suspense } from 'react'

export interface ProjectsSectionProps {
    projects: ProjectData[]
    tag?: string
}

export const Projects = ({ projects, tag }: ProjectsSectionProps) => {
    const heading = tag ? `Projects: ${tag}` : 'Projects'
    const projectsCount = `${projects.length} project${projects.length > 1 ? 's' : ''}`

    return (
        <section className="flex flex-col space-y-8">
            <div className="flex items-center justify-between border-b pb-4">
                <Typography variant="h1">{heading}</Typography>
                <p className="text-sm">{projectsCount}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {projects.map((project) => {
                    const { slug, metadata } = project
                    const { title, description, tags, image, date } = metadata

                    return (
                        <Card key={slug} className="flex flex-col">
                            <CardHeader>
                                <AspectRatio
                                    ratio={16 / 9}
                                    className="rounded-t-lg overflow-hidden w-full relative pb-4"
                                >
                                    <Suspense fallback={<Skeleton className="w-full h-full" />}>
                                        <NextLink href={`/projects/${slug}`}>
                                            <Image
                                                src={image}
                                                alt={title}
                                                className="object-cover w-full h-full"
                                                width={500}
                                                height={500}
                                                priority
                                            />
                                        </NextLink>
                                    </Suspense>
                                </AspectRatio>
                                <CardTitle className="line-clamp-2 text-xl font-s leading-none tracking-tight">
                                    {title}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground">{dayjs(date).format('MMMM D, YYYY')}</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <CardDescription className="line-clamp-3">{description}</CardDescription>
                                <div className="flex flex-wrap gap-1">
                                    {tags.map((tag) => (
                                        <NextLink
                                            key={tag}
                                            href={`/projects/tag/${tag}`}
                                            className={badgeVariants({ variant: 'secondary' })}
                                        >
                                            {tag}
                                        </NextLink>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}
