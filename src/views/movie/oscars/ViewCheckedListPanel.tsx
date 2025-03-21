import { useMediaQuery } from 'usehooks-ts'

import { Card } from '@/components/ui/card'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { Movie, getImgUrl } from './data'

function ViewCheckedListSheet(props: { list: Movie[]; children: React.ReactNode }) {
  const { children, list } = props

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-0">
        <SheetHeader>
          <SheetTitle>已选中的电影（{list.length}）</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <ScrollArea className="flex-1 -ml-12 translate-x-6">
          <div className="mb-1 flex flex-col gap-2 px-6">
            <ViewCheckedListArea list={list} />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

function ViewCheckedListDrawer(props: { list: Movie[]; children: React.ReactNode }) {
  const { list, children } = props

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="h-5/6 flex flex-col gap-0">
        <DrawerHeader>
          <DrawerTitle>已选中的电影（{list.length}）</DrawerTitle>
          <DrawerDescription />
        </DrawerHeader>
        <ScrollArea className="flex-1">
          <div className="mb-1 flex flex-col gap-2 px-6 pb-6">
            <ViewCheckedListArea list={list} />
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}

function ViewCheckedListArea(props: { list: Movie[] }) {
  const { list } = props
  return (
    <>
      {list.map((movie) => {
        return (
          <Card key={movie.name} className="p-2 flex gap-2">
            <img
              src={getImgUrl(movie.name)}
              alt=""
              className="border h-32 self-center"
              loading="lazy"
            />
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
    </>
  )
}

export function ViewCheckedListPanel(props: { list: Movie[]; children: React.ReactNode }) {
  const { children, list } = props

  const ViewCheckedComponent = useMediaQuery('(min-width: 640px)')
    ? ViewCheckedListSheet
    : ViewCheckedListDrawer

  return ViewCheckedComponent({ children, list })
}
