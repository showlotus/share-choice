import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Movie, getImgUrl } from './data'

interface ViewMoreDrawerProps {
  children: React.ReactNode
  movie: Movie
}

export function ViewMoreDrawer(props: ViewMoreDrawerProps) {
  const { children, movie } = props
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="h-5/6 flex flex-col gap-0">
        <DrawerHeader>
          <DrawerTitle>{movie.name}</DrawerTitle>
          <DrawerDescription />
        </DrawerHeader>
        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-2 px-6 pb-6">
            <img src={getImgUrl(movie.name)} alt="" className="self-center border" />
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
      </DrawerContent>
    </Drawer>
  )
}
