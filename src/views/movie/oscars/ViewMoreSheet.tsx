import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import type { Movie } from '.'
import { MovieTitle } from './MovieTitle'

interface ViewMoreSheetProps {
  children: React.ReactNode
  data: Movie
}

export function ViewMoreSheet(props: ViewMoreSheetProps) {
  const { children, data } = props
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent side="bottom" className="h-5/6">
        <SheetHeader>
          <SheetTitle>
            <MovieTitle title={data.title} />
          </SheetTitle>
        </SheetHeader>
        <div>
          <div>{data.name}</div>
          <img src={data.poster} alt="" />
          <div>
            {data.abstract.split('\n').map((v, i) => {
              return (
                <span key={i}>
                  {v} <br />
                </span>
              )
            })}
          </div>
          <div>{data.intro}</div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
