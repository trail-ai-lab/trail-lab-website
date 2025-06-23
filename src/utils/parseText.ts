import React from 'react'

/**
 * Parses text containing Markdown-style links [text](url) into JSX elements.
 * @param text The input text string with potential markdown links.
 * @returns An array of React nodes with links properly formatted.
 */
export const parseTextWithLinks = (text: string): React.ReactNode => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g // Matches [text](url) format
    const parts: React.ReactNode[] = []
    let lastIndex = 0

    // Use Array.from to convert iterator to array for better compatibility
    const matches = Array.from(text.matchAll(regex))

    matches.forEach((match, matchIndex) => {
        const [fullMatch, linkText, url] = match
        const index = match.index ?? 0

        // Push plain text before the match
        if (lastIndex < index) {
            parts.push(text.slice(lastIndex, index))
        }

        // Push the hyperlink JSX element
        parts.push(
            React.createElement(
                'a',
                {
                    key: `link-${matchIndex}`,
                    href: url,
                    className: 'text-primary underline',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                },
                linkText,
            ),
        )

        lastIndex = index + fullMatch.length
    })

    // Add remaining text after the last link
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex))
    }

    return parts
}
