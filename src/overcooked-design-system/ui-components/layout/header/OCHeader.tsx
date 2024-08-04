// import Image from "next/image";
// import Logo from "@/overcooked-design-system/_icons/logo.png";

import styles from "./OCHeader.module.css";
import { OCNav } from "./nav/OCNav";
import type { SubNavItem } from "./nav/OCNav";
// import OCButton from "../button/OCButton";

const recipeMenuItems: SubNavItem[] = [
  {
    text: "All Recipes",
    url: "/recipes",
  },
  // {
  //   text: "Healthy Recipes",
  //   url: "/healthy-recipes",
  // },
];

const infoMenuItems: SubNavItem[] = [
  {
    text: "About",
    url: "/about",
  },
];

export default function Header() {
  return (
    <header className={styles["oc-header__container"]}>
      <div className={"class-sem-spacing-max-width-desktop"}>
        <div className={styles["oc-header"]}>
          {/**Only shows up Mobile */}
          {/* <OCButton /> */}
          <OCNav items={recipeMenuItems} />
          <div className={styles["oc-header"]}>
            <h1 className="site-title">
              <a href="https://cooking.puente-dr.org/">Cooking with Puente</a>
            </h1>
          </div>
          {/**Only shows up Mobile */}
          {/* <OCButton /> */}
          <OCNav items={infoMenuItems} />
        </div>
      </div>
    </header>
  );
}
