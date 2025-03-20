import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { useDynamicSheetSide } from '@/hooks/useDynamicSheetSide'
import { cn } from '@/lib/utils'

import { Movie } from './data'

interface ViewCheckedListSheetProps {
  list: Movie[]
  children: React.ReactNode
}

export function ViewCheckedListSheet(props: ViewCheckedListSheetProps) {
  const { children, list } = props

  const { side } = useDynamicSheetSide()

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side={side}
        className={cn('flex flex-col gap-0', { 'h-5/6': side === 'bottom' })}
      >
        <SheetHeader>
          <SheetTitle>已选中的电影（{list.length}）</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <ScrollArea className="flex-1">
          <div className="mb-1 flex flex-col gap-2">
            {list.map((movie) => {
              return (
                <Card key={movie.name} className="p-2 flex gap-2">
                  <img src={movie.poster} alt="" className="border h-32" />
                  <div className="flex flex-col gap-4">
                    <div className="font-bold">{movie.name}</div>
                    <div className="text-xs">
                      {movie.abstract.split('\n').map((v, i) => {
                        return (
                          <span key={i}>
                            {v} <br />
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
