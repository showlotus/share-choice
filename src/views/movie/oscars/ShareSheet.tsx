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

interface ShareSheetProps {
  children: React.ReactNode
}

export function ShareSheet(props: ShareSheetProps) {
  const { children } = props

  const { side } = useDynamicSheetSide()

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side={side}
        className={cn('flex flex-col gap-0', { 'h-5/6': side === 'bottom' })}
      >
        <SheetHeader>
          <SheetTitle>分享</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-2">{/* Tabs 组件 */}</div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
