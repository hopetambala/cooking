import styles from "./OcSection.module.css";

interface SectionProps {
  children: React.ReactNode;
  title: string;
  isNoTitle?: boolean;
  isAltBG?: boolean;
  className?: string;
}

/**
 * Retrieves the token classes based on the given isMobile flag.
 *
 * @param isMobile - A boolean flag indicating if the device is mobile.
 * @returns An object containing the section and content token classes.
 */
const retrieveTokenClasses = (isMobile: boolean) => {
  if (isMobile) {
    return {
      section: "class-comp-section-spacing-desktop",
      content: "class-comp-section-content-spacing-mobile",
    };
  }
  return {
    section: "class-comp-section-spacing-desktop",
    content: "class-comp-section-content-spacing-desktop",
  };
};

export const Section = ({
  children,
  title,
  isNoTitle,
  isAltBG,
  className,
}: SectionProps) => {
  const id = title.replaceAll(" ", "").toLowerCase();

  const { section, content } = retrieveTokenClasses(false);
  const altBg = isAltBG ? `altBg ${styles.altBG}` : "";
  const classNames = [`section ${section} ${altBg}`];
  if (className) classNames.push(className);

  return (
    <section id={id} className={classNames.join(" ")}>
      <div className={`content ${content}`}>
        {!isNoTitle && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
