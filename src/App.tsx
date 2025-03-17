import { BrowserRouter, Route, Routes } from 'react-router'

import { RouteConfig, routes } from '@/router/routes'

import { ThemeProvider } from './components/theme-provider'

// 递归渲染路由
const renderRoutes = (routes: RouteConfig[]): React.ReactElement[] => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route path={route.path} element={<route.element />} key={route.path}>
          {renderRoutes(route.children)} {/* 递归渲染子路由 */}
        </Route>
      )
    }
    return <Route path={route.path} element={<route.element />} key={route.path} />
  })
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>{renderRoutes(routes)}</Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
