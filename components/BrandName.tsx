interface BrandNameProps {
  withConsulting?: boolean
}

export function BrandName({ withConsulting = true }: BrandNameProps) {
  return (
    <>
      Oper<span className="brand-ai">AI</span>te
      {withConsulting ? ' Consulting' : ''}
    </>
  )
}
