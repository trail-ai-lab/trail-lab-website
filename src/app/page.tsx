import { Layout } from '@/components/layout'
import { News } from '@/components/sections/news'
import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = async () => {
    return (
        <Layout>
            <section className="relative flex flex-col items-center justify-center py-24 text-center px-6">
                <div className="max-w-4xl space-y-6">
                    {/* Logo */}
                    <Image
                        src="/images/logo/trail-logo.svg"
                        alt="TRAIL Lab Logo"
                        width={128}
                        height={128}
                        className="mx-auto mb-4 invert-0 dark:invert"
                        priority
                    />

                    {/* Headline */}
                    <Typography variant="h1" className="text-balance">
                        TRAIL: <span className="font-normal">The Responsible AI for Learning</span>
                    </Typography>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        TRAIL is an interdisciplinary research lab at the University of Wisconsin–Madison advancing
                        equity-centered, human-guided AI systems in education. We design tools and frameworks for
                        auditing AI bias, supporting multilingual learners, enabling human–AI partnerships, and
                        empowering teachers to shape how AI is used in their classrooms.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Link href="/research">
                            <Button variant="default" size="lg">
                                Explore Our Research
                            </Button>
                        </Link>
                        <Link href="/publications">
                            <Button variant="outline" size="lg">
                                View Publications
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
            <News />
        </Layout>
    )
}

export default HomePage
