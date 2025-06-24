'use client'

import { researchAreas } from '@/data/research'
import {
    BadgeAlert,
    BarChart3,
    Brain,
    Lightbulb,
    Presentation,
    Scale,
    School,
    Users,
    type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'

export interface FaqItem {
    question: string
    answer: string
}

type ResearchProps = {
    filterByIds?: string[]
    heading?: string
    description?: string
    faqs?: FaqItem[]
}

const defaultFaqs: FaqItem[] = [
    {
        question: 'What does TRAIL Lab aim to solve through its research?',
        answer: 'TRAIL Lab’s research addresses persistent educational inequities that arise when AI is introduced into classrooms. These inequities often affect historically marginalized students and are rooted in how AI systems are designed, evaluated, and used in real-world educational settings.',
    },
    {
        question: 'How does TRAIL Lab tackle these challenges?',
        answer: 'By working at the intersection of learning sciences, learning analytics, AI, and human-centered design, TRAIL Lab develops new methods to identify and mitigate AI biases. We center the lived experiences of historically marginalized students in our design processes to ensure AI systems reflect their realities.',
    },
    {
        question: 'What role do teachers play in TRAIL Lab’s research?',
        answer: 'A key part of our work is enabling K–12 teachers to use AI in ways that recognize and amplify students’ linguistic and cultural assets. Our tools and methods are designed to support educators in creating more inclusive, responsive, and equitable learning environments.',
    },
]

const contributions = [
    {
        title: 'Educational AI',
        description:
            'We design multilingual and multicultural large language models (LLMs) and develop stakeholder-driven, context-aware methods for evaluating AI in education.',
        icon: Brain,
    },
    {
        title: 'AI Fairness',
        description:
            'We create novel approaches to measuring AI bias that go beyond traditional demographic categories, accounting for context, lived experience, and power dynamics.',
        icon: Scale,
    },
    {
        title: 'Learning Analytics',
        description:
            'We develop analytics to capture the non-dominant ways students express meaning, communicate, and learn — for example, by surfacing cultural assets in scientific argumentation.',
        icon: BarChart3,
    },
    {
        title: 'Teacher Tools',
        description:
            'We build tools that support equitable classroom practices, such as real-time assistance for culturally sustaining pedagogy and multimodal analytics for teacher reflection.',
        icon: School,
    },
]

const researchIcons: Record<string, LucideIcon> = {
    'research-1': BadgeAlert,
    'research-2': Lightbulb,
    'research-3': Users,
    'research-4': Presentation,
}

const IconBadge = ({ icon: Icon }: { icon: LucideIcon }) => (
    <span className="mb-8 flex size-11 items-center justify-center rounded-full bg-background text-primary">
        <Icon className="size-6" />
    </span>
)

export const Research = ({
    filterByIds,
    description = 'Artificial intelligence (AI) exacerbates educational inequities by threatening heterogeneity and promoting cultural and linguistic hierarchies. When used in learners’ contexts that differ from the majority, AI tend to perform significantly worse, leading to biased assessments, perpetuation of cultural stereotypes, increased hallucinations, and failure to capture linguistic and cultural nuances.',
    faqs = defaultFaqs,
}: ResearchProps) => {
    const filteredAreas = filterByIds ? researchAreas.filter((r) => filterByIds.includes(r.id)) : researchAreas

    return (
        <>
            {/* Section 1: Mission + FAQs */}
            <section className="flex flex-col">
                <p className="mb-4 text-xs text-muted-foreground">RESEARCH</p>
                <h2 className="text-3xl font-medium lg:text-4xl">Our Research</h2>

                <div className="mt-24 grid gap-9 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-medium lg:text-4xl">What Drives TRAIL Lab’s Research</h2>
                        <p className="mt-6 font-medium text-muted-foreground">{description}</p>
                    </div>

                    <div className="mx-auto max-w-xl">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-8 flex gap-4">
                                <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                                    {index + 1}
                                </span>
                                <div>
                                    <h3 className="mb-2 font-medium">{faq.question}</h3>
                                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Contributions */}
            <section className="mt-24">
                <h2 className="text-center text-4xl font-semibold">
                    Our research makes methodological, empirical, and design contributions to
                </h2>
                <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 items-start mt-14">
                    {contributions.map(({ title, description, icon: Icon }) => (
                        <div key={title} className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Icon className="size-5 text-primary" />
                                <h3 className="text-xl font-medium">{title}</h3>
                            </div>
                            <p className="text-muted-foreground">{description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3: Research Areas */}
            <section className="mt-24">
                <h2 className="text-center text-4xl font-semibold">Research Areas</h2>
                <div className="mx-auto mt-20 grid max-w-5xl gap-6 sm:grid-cols-1 md:grid-cols-2">
                    {filteredAreas.map((area) => {
                        const Icon = researchIcons[area.id]
                        return (
                            <div
                                className="flex flex-col justify-between rounded-xl bg-accent p-6 md:min-h-[300px] md:p-8 border shadow-sm hover:shadow-md transition"
                                key={area.id}
                            >
                                <IconBadge icon={Icon} />
                                <div>
                                    <h3 className="text-lg font-medium md:text-2xl">{area.title}</h3>
                                </div>
                                <Link
                                    href={`/research/${area.id}`}
                                    className="inline-block text-primary hover:underline font-medium mt-6"
                                >
                                    Explore Research →
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
