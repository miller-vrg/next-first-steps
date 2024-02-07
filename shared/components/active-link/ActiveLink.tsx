'use client';
import Link from "next/link";
import style from './css/ActiveLink.module.css';
import { usePathname } from "next/navigation";

interface Props {
    path:string,
    text:string
}

const ActiveLink = ({path,text}:Props) => {
    const pathName = usePathname();
    let styleName = `${style.link} `;
    styleName += (pathName === path) ? style["active-link"] : "";
  return (
    <Link className={styleName} href={path}>
      {text}
    </Link>
  )
}

export default ActiveLink
