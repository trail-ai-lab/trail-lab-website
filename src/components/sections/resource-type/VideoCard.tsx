'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { VideoResource } from '@/data/resources'
import { Video } from 'lucide-react'

export function VideoCard({ title, description, youtubeUrl }: VideoResource) {
    // Convert full URL to embed URL if needed
    const embedUrl = youtubeUrl.replace('watch?v=', 'embed/')

    return (
        <Card className="flex flex-col h-full">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Video className="text-muted-foreground size-6" />
                    <div>
                        <CardTitle className="text-lg">{title}</CardTitle>
                        {description && (
                            <CardDescription className="text-sm text-muted-foreground mt-1">
                                {description}
                            </CardDescription>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden border mt-4">
                    <iframe
                        src={embedUrl}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
            </CardContent>
        </Card>
    )
}
