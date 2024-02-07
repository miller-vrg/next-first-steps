import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import ActiveLink from "../active-link/ActiveLink"

/* const temporalAsync = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(true);
        },2000)
    })
}
 */

const navItems = [
    {path: "/about",text:"About"},
    {path: "/contact",text:"Conctac"},
    {path: "/princing",text:"Princing"},
]

export const NavBar = async () => {
    //await temporalAsync();
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
      <HomeIcon className="mr-2" size={16} />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {
        navItems.map( p => (
            <ActiveLink key={p.path} {...p}/>
        ))
      }
    </nav>
  )
}
