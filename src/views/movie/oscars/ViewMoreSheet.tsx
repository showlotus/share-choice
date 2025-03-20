import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import type { Movie } from '.'

interface ViewMoreSheetProps {
  children: React.ReactNode
  movie: Movie
}

export function ViewMoreSheet(props: ViewMoreSheetProps) {
  const { children, movie } = props
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent side="bottom" className="h-5/6 flex flex-col gap-0">
        <SheetHeader>
          <SheetTitle>{movie.name}</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-2">
            <img src={movie.poster} alt="" className="self-center border" />
            <div className="text-xs">
              {movie.abstract.split('\n').map((v, i) => {
                return (
                  <span key={i}>
                    {v} <br />
                  </span>
                )
              })}
            </div>
            <div className="text-xs">剧情简介: {movie.intro}</div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
