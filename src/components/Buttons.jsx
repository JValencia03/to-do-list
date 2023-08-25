import { Link } from 'react-router-dom'

export function BackgroundButton ({ color, text, ...props }) {
  return (
      <Link {...props} className={`text-slate-50 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 ease-in duration-75 ${color}`}
      >{text}</Link>
  )
}
