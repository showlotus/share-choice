interface MovieTitleProps {
  title: string
}

export function MovieTitle(props: MovieTitleProps) {
  const { title } = props
  return (
    <>
      {title
        .split(' ')
        .slice(-1)
        .map((v, i) => {
          return <span key={i}>{v.replace(/(\d+)/g, ' $1 ')}</span>
        })}
    </>
  )
}
