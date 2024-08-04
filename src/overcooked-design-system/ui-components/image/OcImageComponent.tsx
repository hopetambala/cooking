import Image from "next/image";
import styles from "./OcImageComponent.module.css";

interface OcImageProps {
  /**
   * The source of the image
   */
  src: string;
  /**
   * The alternative text for the image
   */
  alt: string;
  /**
   * The loading strategy of the image
   */
  loading?: "lazy" | "eager";
  className?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  /**
   * Whether the image should fill its container
   */
  fill?: boolean;
  /**
   * Whether the image should be loaded immediately
   */
  priority?: boolean;
}

const OcImageComponent = ({
  loading = "lazy",
  alt = "",
  ...props
}: OcImageProps) => {
  return (
    // <img
    //     loading="lazy"
    //     decoding="async"
    //     width="1456"
    //     height="2184"
    //     data-pin-description="Creamy, decadent, chocolate-coated peanut butter ice cream bars. Undetectably vegan and made with just 7 pantry staple ingredients!"
    //     src="https://minimalistbaker.com/wp-content/uploads/2023/05/Vegan-Chocolate-Peanut-Butter-Ice-Cream-Bars-9.jpg"
    //     alt="Stack of creamy vegan peanut butter ice cream bars coated in chocolate"
    //     sizes="(max-width: 1456px) 100vw, 1456px" />
    <Image
      loading={loading}
      alt={alt}
      className={styles["oc-block-image"]}
      {...props}
    />
    // <img alt={alt} {...props} className={styles["oc-block-image"]}></img>
  );
};

export default OcImageComponent;
