import { useEffect, useMemo, useState } from 'react'

import { useImmer } from 'use-immer'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

import MovieList from './data.json'

export default function Oscars() {
  const [movieList, updateMovieList] = useImmer(
    MovieList.map((v, i) => ({ ...v, id: i, checked: false }))
  )
  const checkedMovieList = useMemo(() => {
    return movieList.filter((v) => v.checked)
  }, [movieList])

  useEffect(() => {
    const checkedIdList = checkedMovieList.map((v) => v.id)
    console.log(checkedIdList)
  }, [checkedMovieList])

  return (
    <div className="h-full flex flex-col">
      <header className="h-14 flex justify-center items-center border-t-0 border-l-0 border-r-0 border">
        美国奥斯卡金像奖最佳影片
      </header>

      <ScrollArea className="flex-1">
        <div className="m-8 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6">
          {movieList.map((v) => {
            return (
              <Card
                key={v.id}
                className={cn(
                  'p-4 flex gap-4 md:gap-6 hover:bg-accent hover:text-accent-foreground',
                  { 'border-primary': v.checked }
                )}
                onClick={() => {
                  updateMovieList((draft) => {
                    const target = draft.find((d) => d.id === v.id)
                    if (target) {
                      target.checked = !target.checked
                    }
                  })
                }}
              >
                <div className="min-w-[270px] min-h-[400px] border">
                  {/* <img src={v.poster} alt="" /> */}
                </div>
                <div>
                  <div className="flex justify-between">
                    <div className="font-bold text-yellow-400">
                      {v.title
                        .split(' ')
                        .slice(-1)
                        .map((v, i) => {
                          return <span key={i}>{v.replace(/(\d+)/g, ' $1 ')}</span>
                        })}
                    </div>
                    <Checkbox
                      checked={v.checked}
                      onCheckedChange={(checked) => {
                        updateMovieList((draft) => {
                          const target = draft.find((d) => d.id === v.id)
                          if (target) {
                            target.checked = !!checked
                          }
                        })
                      }}
                    />
                  </div>
                  <Separator className="my-2 opacity-0" />
                  <div className="">{v.name}</div>
                  <div className="">
                    {v.abstract.split('\n').map((v, i) => {
                      return (
                        <span key={i}>
                          {v}
                          <br />
                        </span>
                      )
                    })}
                  </div>
                  <Separator className="my-2 opacity-0" />
                  <div>剧情简介: {v.intro}</div>
                </div>
              </Card>
            )
          })}
        </div>
      </ScrollArea>

      <footer className="px-4 py-3 border-b-0 border-l-0 border-r-0 border flex justify-between items-center">
        <span>已选择 {checkedMovieList.length} 项</span>
        <div className="flex gap-3">
          <Button variant="outline">全选</Button>
          <Button variant="outline">查看已选</Button>
          <Button variant="outline">分享</Button>
        </div>
      </footer>
    </div>
  )
}
