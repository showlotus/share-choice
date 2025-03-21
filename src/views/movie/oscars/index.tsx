import { Suspense } from 'react'
import { Outlet } from 'react-router'

import { useMediaQuery } from 'usehooks-ts'

import { Skeleton } from '@/components/ui/skeleton'

function FallbackSkeleton() {
  const isNotPhone = useMediaQuery('(min-width: 500px)')
  const cardNums = isNotPhone ? 5 : 3

  return (
    <div className="h-full flex flex-col">
      <Skeleton className="m-4 h-[56px]" />

      <div className="flex-1 flex flex-col justify-evenly gap-4 md:gap-6 ">
        {new Array(cardNums).fill(0).map((_, i) => {
          return (
            <div className="mx-4" key={i}>
              <Skeleton className="h-6 mb-4" />
              <div className="flex gap-4 md:gap-6">
                <Skeleton className="min-w-[80px] h-[140px] sm:min-w-[120px] sm:h-[180px] md:min-w-[180px] md:min-h-[300px]" />
                <div className="flex-1 flex flex-col gap-4">
                  <Skeleton className="w-3/4 h-6" />
                  <Skeleton className="w-1/12 h-3" />
                  <Skeleton className="w-1/3 h-3" />
                  <Skeleton className="w-1/5 h-3" />
                  <Skeleton className="h-3" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <Skeleton className="m-4 h-[60px] justify-self-end" />
    </div>
  )
}

export default function Oscars() {
  const isWeb = useMediaQuery('(min-width: 640px)')
  const Component = isWeb ? (
    <Outlet />
  ) : (
    <Suspense fallback={<FallbackSkeleton />}>
      <Outlet />
    </Suspense>
  )

  return <div className="h-full">{Component}</div>
}
