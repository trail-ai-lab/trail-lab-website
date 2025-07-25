'use client'

import { FileText, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { PDFResource } from '@/data/resources'

export function PDFCard({ title, fileUrl }: PDFResource) {
  return (
    <Card className="flex flex-col justify-between h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <FileText className="text-muted-foreground size-6" />
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full mt-4" variant="outline">
          <Link href={fileUrl} target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 size-4" />
            Download PDF
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
