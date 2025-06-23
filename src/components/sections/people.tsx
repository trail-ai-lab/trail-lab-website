import { Typography } from '@/components/typography'
import { people } from '@/data/people'
import Image from 'next/image'
import Link from 'next/link'

export const People = () => {
    // Group people by category
    const grouped = people.reduce(
        (acc, person) => {
            acc[person.category] ||= []
            acc[person.category].push(person)
            return acc
        },
        {} as Record<string, typeof people>,
    )

    return (
        <section className="flex flex-col space-y-12">
            {Object.entries(grouped).map(([category, members]) => (
                <div key={category} className="space-y-12">
                    <Typography variant="h1" underline>
                        {category}
                    </Typography>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                        {members.map((person) => (
                            <div key={person.id} className="flex flex-col items-center space-y-4">
                                <Link href={`/people/${person.id}`}>
                                    <Image
                                        src={person.image || '/images/people/default-avatar.png'}
                                        alt={person.name}
                                        width={200}
                                        height={200}
                                        className="size-[200px] rounded-full"
                                        priority
                                    />
                                </Link>

                                <Link href={`/people/${person.id}`} className="text-xl font-semibold hover:underline">
                                    {person.name}
                                </Link>

                                <p className="text-muted-foreground text-center max-w-[16rem] text-sm">
                                    {person.designation}
                                    {person.advisor && (
                                        <>
                                            <br />
                                            Advisor:{' '}
                                            {person.advisorUrl ? (
                                                <Link
                                                    href={person.advisorUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline underline-offset-2 text-muted-foreground hover:text-primary"
                                                >
                                                    {person.advisor}
                                                </Link>
                                            ) : (
                                                person.advisor
                                            )}
                                        </>
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}
