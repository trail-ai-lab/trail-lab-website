import { Layout } from '@/components/layout'
import { ShareButton } from '@/components/share-button'
import { Typography } from '@/components/typography'
import { badgeVariants } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { BASE_URL } from '@/config'
import { getProjectsData, getProjectsList } from '@/lib/projects'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'
import { notFound } from 'next/navigation'

interface ProjectPostPageProps {
    params: {
        slug: string
    }
}

export const generateMetadata = async ({ params }: ProjectPostPageProps): Promise<Metadata> => {
    const project = await getProjectsData(params.slug)

    if (!project) {
        return notFound()
    }

    const { title: metaTitle, description, image: preview } = project.metadata

    const isExternal = !preview.startsWith('/images/projects/')

    const image = isExternal ? preview : `${BASE_URL}${preview}`

    const title = `Lab Project - ${metaTitle}`

    return {
        title: {
            absolute: title,
        },
        description,
        openGraph: {
            title: {
                absolute: title,
            },
            description,
            images: [
                {
                    url: image,
                    width: 800,
                    height: 600,
                },
            ],
        },
        twitter: {
            title: {
                absolute: title,
            },
            description,
            images: [image],
        },
    }
}

const ProjectPostPage = async ({ params }: ProjectPostPageProps) => {
    const { slug } = params
    const project = await getProjectsData(slug)

    if (!project) {
        return notFound()
    }

    const { metadata, content } = project
    const { title, description, tags, image, date } = metadata

    return (
        <Layout>
            <div className="flex flex-col md:flex-row gap-8 justify-between pt-8">
                <div className="flex flex-wrap gap-1 items-center">
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
                <ShareButton title={title} text={`${title}\n\n${description}`} url={`${BASE_URL}/projects/${slug}`} />
            </div>
            <Separator />
            <article className="prose prose-a:text-primary max-w-none pb-20">
                <p className="text-sm text-muted-foreground">{dayjs(date).format('MMMM D, YYYY')}</p>
                <Typography variant="h1">{title}</Typography>
                <p>{description}</p>
                <Image src={image} width={500} height={500} className="h-full w-full rounded" alt={title} />
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
        </Layout>
    )
}

export default ProjectPostPage

export const generateStaticParams = async () => {
    const projects = await getProjectsList()

    const paths = projects.map((project) => ({
        slug: project.slug,
    }))

    return paths
}
