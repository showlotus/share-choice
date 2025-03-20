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
        element: React.lazy(() => import('@/views/movie/oscars/index')),
        children: [
          {
            path: 'view/:base64?',
            element: React.lazy(() => import('@/views/movie/oscars/View'))
          },
          {
            path: 'share/:base64?',
            element: React.lazy(() => import('@/views/movie/oscars/Share'))
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: React.lazy(() => import('@/views/NotFound'))
  }
]
