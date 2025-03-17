import React from 'react'

export interface RouteConfig {
  path: string
  element: React.ElementType
  children?: RouteConfig[]
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: React.lazy(() => import('@/views/Home'))
  },
  {
    path: '/movie',
    element: React.lazy(() => import('@/views/movie/index')),
    children: [
      {
        path: 'oscars',
        element: React.lazy(() => import('@/views/movie/oscars/index'))
      }
    ]
  },
  {
    path: '*',
    element: React.lazy(() => import('@/views/NotFound'))
  }
]
