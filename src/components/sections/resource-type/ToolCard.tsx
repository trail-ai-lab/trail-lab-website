import { ToolResource } from '@/data/resources'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ToolCard({ title, description, image, link }: ToolResource) {
  return (
    <div className="border rounded-xl overflow-hidden flex flex-col">
      <img src={image} alt={title} className="aspect-video object-cover" />
      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm mt-2 mb-4">{description}</p>
        <Link href={link} className="inline-flex items-center text-sm font-medium group">
          View Tool <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
