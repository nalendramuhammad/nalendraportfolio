import style from "@/styles/Layout/Header.module.scss";

export default function Header() {
  return (
    <div className={`${style.navbar}`}>
      <div className={`${style.navbarLeft}`}>
        <a href="#">Home</a>
        <a href="#">Experience</a>
        <a href="#">Portfolio</a>
      </div>
      <div className={`${style.navbarRight}`}>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}
