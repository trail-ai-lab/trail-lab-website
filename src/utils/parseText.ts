import React from 'react'
import { people } from '@/data/people'

/**
 * Parses text containing Markdown-style links [text](url) and person references {person-id} into JSX elements.
 * @param text The input text string with potential markdown links and person references.
 * @returns A React node array with links properly formatted.
 */
export const parseTextWithLinks = (text: string): React.ReactNode[] => {
    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g // Matches [text](url) format
    const personRefRegex = /\{([^}]+)\}/g // Matches {person-id} format
    const parts: React.ReactNode[] = []
    let lastIndex = 0
    let keyCounter = 0

    // Find all matches (both markdown links and person references)
    const allMatches: Array<{
        match: RegExpMatchArray
        type: 'markdown' | 'person'
    }> = []

    // Find markdown links
    const markdownMatches = Array.from(text.matchAll(markdownLinkRegex))
    markdownMatches.forEach(match => {
        allMatches.push({ match, type: 'markdown' })
    })

    // Find person references
    const personMatches = Array.from(text.matchAll(personRefRegex))
    personMatches.forEach(match => {
        allMatches.push({ match, type: 'person' })
    })

    // Sort matches by their position in the text
    allMatches.sort((a, b) => (a.match.index ?? 0) - (b.match.index ?? 0))

    allMatches.forEach((item) => {
        const { match, type } = item
        const matchIndex = match.index ?? 0

        // Push plain text before the current match
        if (lastIndex < matchIndex) {
            parts.push(text.slice(lastIndex, matchIndex))
        }

        if (type === 'markdown') {
            // Handle markdown links [text](url)
            const [fullMatch, linkText, url] = match
            parts.push(
                React.createElement(
                    'a',
                    {
                        key: `link-${keyCounter++}`,
                        href: url,
                        className: 'text-primary underline',
                        target: url.startsWith('http') ? '_blank' : undefined,
                        rel: url.startsWith('http') ? 'noopener noreferrer' : undefined
                    },
                    linkText
                )
            )
            lastIndex = matchIndex + fullMatch.length
        } else if (type === 'person') {
            // Handle person references {person-id}
            const [fullMatch, personId] = match
            const person = people.find(p => p.id === personId)
            
            if (person) {
                parts.push(
                    React.createElement(
                        'a',
                        {
                            key: `person-${keyCounter++}`,
                            href: `/people/${person.id}`,
                            className: 'text-primary underline'
                        },
                        person.name
                    )
                )
            } else {
                // If person not found, keep the original text
                parts.push(fullMatch)
            }
            lastIndex = matchIndex + fullMatch.length
        }
    })

    // Add any remaining text after the last match
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex))
    }

    return parts
}
