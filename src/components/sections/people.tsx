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
        <section className="flex flex-col">
            {Object.entries(grouped).map(([category, members]) => (
                <div key={category}>
                    {category !== 'People' && (
                        <h2 className="mt-24 mb-12 text-3xl font-medium lg:text-4xl text-center">{category}</h2>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16 justify-items-center">
                        {members.map((person) => (
                            <div key={person.id} className="flex flex-col items-center">
                                <Link href={`/people/${person.id}`}>
                                    <Image
                                        src={person.image || '/images/people/default-avatar.png'}
                                        alt={person.name}
                                        width={200}
                                        height={200}
                                        className="size-[200px] rounded-full mb-4"
                                        priority
                                    />
                                </Link>

                                <Link href={`/people/${person.id}`} className="font-medium hover:underline">
                                    {person.name}
                                </Link>
                                <p className="text-muted-foreground text-center">
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
                                                    className="underline underline-offset-2 text-sm text-muted-foreground hover:text-primary"
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
