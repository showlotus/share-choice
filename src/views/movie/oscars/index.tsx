import { Outlet } from 'react-router'

export interface Movie {
  checked?: boolean
  title: string
  name: string
  poster: string
  abstract: string
  intro: string
}

export default function Oscars() {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  )
}
