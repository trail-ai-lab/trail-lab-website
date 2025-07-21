import { Layout } from '@/components/layout'
import { News } from '@/components/sections/news'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = async () => {
    return (
        <Layout>
            <section className="relative bg-background py-20 lg:py-32 overflow-hidden">
                <div className="container flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col gap-7 max-w-2xl">
                        <h1 className="text-5xl font-semibold text-foreground md:text-5xl lg:text-7xl leading-tight">
                            TRAIL Lab:
                            <span className="text-muted-foreground font-normal">
                                {' '}
                                The Responsible AI for Learning Lab
                            </span>
                        </h1>

                        <span className="font-normal text-lg">
                            We study where AI fits in diverse classrooms, or if it should.
                        </span>

                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Housed at the University of Wisconsin–Madison, TRAIL Lab conducts interdisciplinary research
                            in learning sciences, learning analytics, AI, and human-centered design to develop
                            scientific understanding on responsible use of AI for teaching and learning in real-world
                            contexts.
                        </p>

                        <div className="flex flex-wrap items-start gap-5 lg:gap-7 pt-4">
                            <Link href="/research">
                                <Button size="lg">Explore Our Research</Button>
                            </Link>
                            <Link href="/publications">
                                <Button size="lg" variant="outline">
                                    View Publications
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative hidden lg:block h-[300px] w-[300px]">
                        <Image
                            src="/images/logo/trail-logo.svg"
                            alt="TRAIL Lab Hero"
                            fill
                            className="invert-0 dark:invert object-fill"
                            priority
                        />
                    </div>
                </div>
            </section>

            <News />
        </Layout>
    )
}

export default HomePage
