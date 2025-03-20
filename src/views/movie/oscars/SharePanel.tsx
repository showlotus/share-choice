import { QRCodeCanvas } from 'qrcode.react'
import { useCopyToClipboard, useMediaQuery } from 'usehooks-ts'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/hooks/use-toast'

function ShareDrawer(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="h-5/6 flex flex-col gap-0">
        <DrawerHeader>
          <DrawerTitle>分享</DrawerTitle>
          <DrawerDescription />
        </DrawerHeader>
        <ScrollArea className="flex-1 px-6">
          <SharePanelArea />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}

function ShareSheet(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-0">
        <SheetHeader>
          <SheetTitle>分享</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <ScrollArea className="flex-1">
          <SharePanelArea />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

function SharePanelArea() {
  const { toast } = useToast()
  const [copiedText, copy] = useCopyToClipboard()

  const shareUrl = location.origin + '/movie/oscars/share' + location.hash

  const handleCopy = () => {
    copy(shareUrl)
      .then(() => {
        if (!copiedText) {
          return toast({
            variant: 'destructive',
            description: '复制失败',
            duration: 1000
          })
        }

        toast({
          description: '复制成功',
          duration: 1000
        })
        console.log(`复制的链接: ${copiedText}`)
      })
      .catch((err) => {
        toast({
          variant: 'destructive',
          description: '复制失败',
          duration: 1000
        })
        console.error('复制失败', err)
      })
  }

  return (
    <Tabs defaultValue="link" className="text-center">
      <TabsList>
        <TabsTrigger value="link">链接</TabsTrigger>
        <TabsTrigger value="qr-code">二维码</TabsTrigger>
      </TabsList>
      <TabsContent value="link" className="flex gap-2">
        <Input type="text" readOnly disabled value={shareUrl} />
        <Button type="submit" size="sm" onClick={handleCopy}>
          复制链接
        </Button>
      </TabsContent>
      <TabsContent value="qr-code" className="flex justify-center">
        <div className="w-[200px] h-[200px] inline-block border">
          <QRCodeCanvas value={shareUrl} includeMargin marginSize={2} size={200} />
        </div>
      </TabsContent>
    </Tabs>
  )
}

export function SharePanel(props: { children: React.ReactNode }) {
  const { children } = props

  const ShareComponent = useMediaQuery('(min-width: 640px)') ? ShareSheet : ShareDrawer

  return ShareComponent({ children })
}
