import { CheckedState } from '@radix-ui/react-checkbox'

import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

import { MovieTitle } from './MovieTitle'
import { ViewMoreDrawer } from './ViewMoreDrawer'
import { Movie } from './data'

interface MovieCardProps {
  movie: Movie
  onCheckedChange?: (checked: CheckedState) => void
}

export function MovieCard(props: MovieCardProps) {
  const { movie, onCheckedChange } = props
  return (
    <Card
      key={movie.name}
      className={cn('p-4 relative sm:hover:bg-accent sm:hover:text-accent-foreground', {
        'border-primary': movie.checked
      })}
    >
      <div className="mb-4 flex justify-between items-center sm:text-xl">
        <div className="font-bold text-yellow-400">
          <MovieTitle title={movie.title} />
        </div>
        <Checkbox
          className={cn({ hidden: !onCheckedChange })}
          checked={movie.checked}
          onCheckedChange={onCheckedChange}
        />
      </div>

      <div className="flex gap-4 md:gap-6">
        <div className="min-w-[80px] h-[140px] sm:min-w-[120px] sm:h-[180px] md:min-w-[180px] md:min-h-[300px]">
          <img src={movie.poster} alt="" className="h-full border object-contain" />
        </div>
        <div className="flex-1">
          <div className="font-bold text-base lg:text-xl">{movie.name}</div>
          <Separator className="my-2 opacity-0" />
          <div className="text-xs sm:text-sm lg:text-base">
            {movie.abstract.split('\n').map((v, i, arr) => {
              return (
                <div key={i} className={cn('flex', { 'justify-between': i === arr.length - 1 })}>
                  {v}

                  {i === arr.length - 1 ? (
                    <ViewMoreDrawer movie={movie}>
                      <span className="text-blue-500 hover:text-blue-600 cursor-pointer sm:hidden">
                        查看更多
                      </span>
                    </ViewMoreDrawer>
                  ) : (
                    <br />
                  )}
                </div>
              )
            })}
          </div>
          <div className="mt-4 hidden sm:block text-xs sm:text-sm lg:text-base">
            剧情简介: {movie.intro}
          </div>
        </div>
      </div>
    </Card>
  )
}
