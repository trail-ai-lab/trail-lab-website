export type ResourceType = 'tool' | 'video' | 'pdf' | 'dataset'

export interface BaseResource {
    id: string
    type: ResourceType
    title: string
    description?: string
    category: string // e.g., 'Tools', 'Videos', etc.
}

export interface ToolResource extends BaseResource {
    type: 'tool'
    image: string
    link: string
}

export interface VideoResource extends BaseResource {
    type: 'video'
    youtubeUrl: string
}

export interface PDFResource extends BaseResource {
    type: 'pdf'
    fileUrl: string
}

export interface DatasetResource extends BaseResource {
    type: 'dataset'
    downloadUrl: string
}

export type Resource = ToolResource | VideoResource | PDFResource | DatasetResource

export const resources: Resource[] = [
    {
        id: 'tool-1',
        type: 'tool',
        category: 'Tools',
        title: 'AIBAT',
        description: 'Adaptive Intelligent Behavioral Assessment Tool',
        image: '/images/tools/aibat.png',
        link: 'https://aibat-frontend-1008901154916.us-central1.run.app',
    },
    // {
    //     id: 'slai',
    //     type: 'tool',
    //     category: 'Tools',
    //     title: 'SLAI',
    //     description: 'A multilingual transcript analysis platform.',
    //     image: '/images/resources/slai.png',
    //     link: '/slai',
    // },
    // {
    //     id: 'learning-ai-video',
    //     type: 'video',
    //     category: 'Videos',
    //     title: 'Video Demo',
    //     description: 'Live walkthrough of QuantumGPT in scientific applications.',
    //     youtubeUrl: 'https://www.youtube.com/watch?v=xyz123',
    // },
    // {
    //     id: 'whitepaper',
    //     type: 'pdf',
    //     category: 'PDFs',
    //     title: 'AIBAT Whitepaper',
    //     fileUrl: '/pdfs/aibat-whitepaper.pdf',
    // },
    // {
    //     id: 'multilingual-dataset',
    //     type: 'dataset',
    //     category: 'Datasets',
    //     title: 'Multilingual Transcript Dataset',
    //     description: 'Bilingual classroom conversation dataset.',
    //     downloadUrl: 'https://example.com/multilingual-dataset.zip',
    // },
]
