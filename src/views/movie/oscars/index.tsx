import { useEffect, useMemo } from 'react'

import { useImmer } from 'use-immer'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { atou, cn, utoa } from '@/lib/utils'

import { MovieTitle } from './MovieTitle'
import { ViewMoreSheet } from './ViewMoreSheet'
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
              <Card
                key={movie.id}
                className={cn('p-4 relative sm:hover:bg-accent sm:hover:text-accent-foreground', {
                  'border-primary': movie.checked
                })}
              >
                <div className="mb-4 flex justify-between items-center sm:text-xl">
                  <div className="font-bold text-yellow-400">
                    <MovieTitle title={movie.title} />
                  </div>
                  <Checkbox
                    checked={movie.checked}
                    onCheckedChange={(checked) => {
                      updateMovieList((draft) => {
                        const target = draft.find((d) => d.id === movie.id)
                        if (target) {
                          target.checked = !!checked
                        }
                      })
                    }}
                  />
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="min-w-[80px] h-[140px]">
                    <img src={movie.poster} alt="" className="h-full border object-contain" />
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="font-bold text-base">{movie.name}</div>
                    <Separator className="my-2 opacity-0" />
                    <div className="text-xs">
                      {movie.abstract.split('\n').map((v, i, arr) => {
                        return (
                          <div
                            key={i}
                            className={cn('flex', { 'justify-between': i === arr.length - 1 })}
                          >
                            {v}

                            {i === arr.length - 1 ? (
                              <ViewMoreSheet data={movie}>
                                <span className="text-blue-500 hover:text-blue-600 border border-b border-t-0 border-l-0 border-r-0 cursor-pointer sm:hidden">
                                  查看更多
                                </span>
                              </ViewMoreSheet>
                            ) : (
                              <br />
                            )}
                          </div>
                        )
                      })}
                    </div>
                    <div className="hidden sm:block">
                      <Separator className="my-2 opacity-0" />
                      <div>剧情简介: {movie.intro}</div>
                    </div>
                  </div>
                </div>
              </Card>
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
