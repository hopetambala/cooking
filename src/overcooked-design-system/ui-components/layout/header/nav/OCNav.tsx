import styles from "./OCNav.module.css";
export type SubNavItem = {
  text: string;
  url: string;
};

interface SubNavItemProps {
  items: SubNavItem[];
}
export const OCNav = ({ items }: SubNavItemProps) => {
  return (
    <nav className={styles["oc-nav__container"]} role="navigation">
      <div className={styles["oc-nav"]}>
        <ul id="secondary-menu" className={styles["oc-nav__menu"]}>
          {items.map((item) => (
            <li className={styles["oc-nav__menu__item"]}>
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
