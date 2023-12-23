import style from "@/styles/Layout/Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={`${style.navbar}`}>
      <div className={`${style.navbarLeft}`}>
        <Link href={"/"}>
          <p href="">Home</p>
        </Link>
        <Link href={"/experience"}>
          <p href="">Experience</p>
        </Link>
        <Link href={"/portfolio"}>
          <p href="">Portfolio</p>
        </Link>
      </div>
      <div className={`${style.navbarRight}`}>
        <Link href={"/"}>
          <p href="">Contact</p>
        </Link>
      </div>
    </div>
  );
}
