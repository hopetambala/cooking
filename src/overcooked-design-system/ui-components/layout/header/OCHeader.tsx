// import Image from "next/image";
// import Logo from "@/overcooked-design-system/_icons/logo.png";

import { Logo } from "../../logo/Logo";
import styles from "./OCHeader.module.css";
import { OCNav } from "./nav/OCNav";
import type { SubNavItem } from "./nav/OCNav";
// import OCButton from "../button/OCButton";

interface HeaderProps {
  navPrimary: SubNavItem[];
  navSecondary: SubNavItem[];
}
export default function Header({navPrimary, navSecondary}: HeaderProps) {
  return (
    <header className={styles["oc-header__container"]}>
      <div className={"class-sem-spacing-max-width-desktop"}>
        <div className={styles["oc-header"]}>
          {/**Only shows up Mobile */}
          {/* <OCButton /> */}
          <OCNav items={navPrimary} />
          <div className={styles["oc-header__title__container"]}>
            <h1 className={styles["oc-header__title"]}>
              <a href="/">
                <Logo />
              </a>
            </h1>
          </div>
          {/**Only shows up Mobile */}
          {/* <OCButton /> */}
          <OCNav items={navSecondary} />
        </div>
      </div>
    </header>
  );
}
