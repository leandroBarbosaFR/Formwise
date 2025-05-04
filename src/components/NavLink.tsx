import Link from 'next/link'

export function NavLink({
  href,
  target,
  children,
  style,
}: {
  href: string
  target?: string
  style?: any
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target={target}
      style={style}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
