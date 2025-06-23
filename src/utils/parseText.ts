import { people } from '@/data/people'

/**
 * Parses text containing Markdown-style links [text](url) and person references {person-id} into HTML string.
 * @param text The input text string with potential markdown links and person references.
 * @returns HTML string with links properly formatted.
 */
export const parseTextWithLinks = (text: string): string => {
    let result = text

    // First, handle person references {person-id}
    const personRefRegex = /\{([^}]+)\}/g
    result = result.replace(personRefRegex, (match, personId) => {
        const person = people.find((p) => p.id === personId)
        if (person) {
            return `<a href="/people/${person.id}" class="text-primary underline">${person.name}</a>`
        }
        return match // Keep original if person not found
    })

    // Then, handle markdown links [text](url)
    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    result = result.replace(markdownLinkRegex, (match, linkText, url) => {
        const isExternal = url.startsWith('http')
        const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
        return `<a href="${url}" class="text-primary underline"${targetAttr}>${linkText}</a>`
    })

    return result
}
