import { Typography } from '@/components/typography'

export const LabAbout = () => {
    return (
        <section className="flex flex-col pb-24 pt-12">
            <Typography variant="h1" underline>
                LARG: Learning Augemented Research Group
            </Typography>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his
                throne. One day, his advisors came to him with a problem: the kingdom was running out of money.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
                under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't
                seem to stop Jokester.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny
                that they couldn't help but laugh. And once they started laughing, they couldn't stop.
            </p>
        </section>
    )
}
