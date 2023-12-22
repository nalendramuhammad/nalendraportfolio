import Image from "next/image";
import { Inter } from "next/font/google";
import style from "../styles/main.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${style.main}`}>
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
      <div className={`${style.container}`}>
        <p>Nalendra</p>
      </div>
      <div className={`${style.foot}`}>
        <p>scroll</p>
      </div>
    </main>
  );
}
