import { useEffect, useMemo } from 'react'

import { useImmer } from 'use-immer'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { atou, utoa } from '@/lib/utils'

import { MovieCard } from './MovieCard'
import MovieList from './data.json'

export interface Movie {
  id: number
  checked: boolean
  title: string
  name: string
  poster: string
  abstract: string
  intro: string
}

export default function Oscars() {
  const binaryArray = atou(window.location.hash.slice(1))
  const [movieList, updateMovieList] = useImmer(
    MovieList.map((v, i) => ({ ...v, id: i, checked: binaryArray[i] === 1 }))
  )
  const checkedMovieList = useMemo(() => {
    return movieList.filter((v) => v.checked)
  }, [movieList])

  useEffect(() => {
    const binaryArray = movieList.map((v) => (v.checked ? 1 : 0))
    const base64 = utoa(binaryArray)
    window.location.hash = base64
  }, [movieList])

  return (
    <div className="h-full flex flex-col">
      <header className="h-14 flex justify-center items-center border-t-0 border-l-0 border-r-0 border">
        美国奥斯卡金像奖最佳影片
      </header>

      <ScrollArea className="flex-1">
        <div className="m-8 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-6">
          {movieList.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                onCheckedChange={(checked) => {
                  updateMovieList((draft) => {
                    const target = draft.find((d) => d.id === movie.id)
                    if (target) {
                      target.checked = !!checked
                    }
                  })
                }}
              />
            )
          })}
        </div>
      </ScrollArea>

      <footer className="px-4 py-3 border-b-0 border-l-0 border-r-0 border flex justify-between items-center text-sm">
        <span>已选择 {checkedMovieList.length} 项</span>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              updateMovieList((draft) => {
                draft.forEach((v) => (v.checked = checkedMovieList.length !== movieList.length))
              })
            }}
          >
            {checkedMovieList.length === movieList.length ? '取消全选' : '全选'}
          </Button>
          <Button variant="outline" size="sm">
            查看已选
          </Button>
          <Button variant="outline" size="sm">
            分享
          </Button>
        </div>
      </footer>
    </div>
  )
}
