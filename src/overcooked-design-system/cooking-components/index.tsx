import { RecipeType } from "@/types/sanity.custom-types";
import { OCImage } from "../ui-components";
import { imgDim } from "@/utils/general";
import styles from "./favorite-card.module.css";

interface FavoriteCardProps {
  variant?: "small" | "large";
  data: RecipeType;
}

export const FavoriteCard = ({ data, variant }: FavoriteCardProps) => {
  const {
    slug,
    textTitleForRecipeName,
    textForRecipeTagline,
    imageForLandingRecipe,
  } = data;

  const title =
    variant === "small" ? (
      <h4>{textTitleForRecipeName}</h4>
    ) : (
      <h3>{textTitleForRecipeName}</h3>
    );

  const imageSize = variant === "small" ? [0.05, 0.25] : [0.1, 0.5];

  const text = variant === "small" ? null : <p>{textForRecipeTagline}</p>;
  return (
    <div className={styles.favorite__recipes__card}>
      <OCImage
        height={imgDim(imageSize[0])[0]}
        width={imgDim(imageSize[1])[1]}
        src={`/fallback/fallback${Math.floor(Math.random() * 10) + 1}.jpg`}
        alt={imageForLandingRecipe?.alt || textForRecipeTagline || ""}
      />
      <a href={`/recipes/${slug?.current}`}>
        {title}
        {text}
      </a>
    </div>
  );
};
