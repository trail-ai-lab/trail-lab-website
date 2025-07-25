'use client'

import { Database, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { DatasetResource } from '@/data/resources'

export function DatasetCard({ title, description, downloadUrl }: DatasetResource) {
  return (
    <Card className="flex flex-col justify-between h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Database className="text-muted-foreground size-6" />
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
        <Button asChild className="w-full mt-4" variant="secondary">
          <Link href={downloadUrl} target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 size-4" />
            Download Dataset
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
