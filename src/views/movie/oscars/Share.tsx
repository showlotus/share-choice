import { ScrollArea } from '@/components/ui/scroll-area'
import { atou } from '@/lib/utils'

import { MovieCard } from './MovieCard'
import MovieList from './data.json'

export default function Share() {
  const binaryArray = atou(window.location.hash.slice(1))
  const movieList = MovieList.filter((_, i) => binaryArray[i] === 1)

  return (
    <div className="h-full flex flex-col">
      <header className="h-14 flex justify-center items-center border-t-0 border-l-0 border-r-0 border">
        来自分享的美国奥斯卡金像奖最佳影片（{movieList.length}）
      </header>
      <ScrollArea className="flex-1">
        <div className="m-8 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-6">
          {movieList.map((movie) => {
            return <MovieCard key={movie.name} movie={movie} />
          })}
        </div>
      </ScrollArea>
    </div>
  )
}
