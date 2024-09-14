import { RecipeType } from "@/types/sanity.custom-types";
import styles from "./page.module.css";
import { getAllRecipePreviews } from "@/sanity/sanity.query";
import { OcSection, OCCard, OcFlexGrid, OcLoadingSkeleton, OCImage as OcImageComponent } from "@/overcooked-design-system/ui-components";
import { imgDim } from "@/utils/general";

interface PreviewCardProps {
  data: RecipeType;
}

const PreviewCard = ({ data }: PreviewCardProps) => {
  const {
    slug,
    textTitleForRecipeName,
    textForRecipeTagline,
    imageForLandingRecipe,
  } = data;
  return (
    <OCCard
      headerText={textTitleForRecipeName || ""}
      headerInverted
      href={`/recipes/${slug?.current}`}
    >
      <div className={styles.home__preview__card__image__container}>
        <OcImageComponent
          height={750}
          width={500}
          src={`/fallback/fallback${Math.floor(Math.random() * 10) + 1}.jpg`}
          alt={imageForLandingRecipe?.alt || textForRecipeTagline || ""}
        />
      </div>
    </OCCard>
  );
};

const FavoriteCard = ({ data }: PreviewCardProps) => {
  const {
    slug,
    textTitleForRecipeName,
    textForRecipeTagline,
    imageForLandingRecipe,
  } = data;
  return (
    <div className={styles.home__favorite__recipes__card}>
      <OcImageComponent
        height={imgDim(0.1)[0]}
        width={imgDim(0.5)[1]}
        src={`/fallback/fallback${Math.floor(Math.random() * 10) + 1}.jpg`}
        alt={imageForLandingRecipe?.alt || textForRecipeTagline || ""}
      />
      <a href={`/recipes/${slug?.current}`}>
        <h3>{textTitleForRecipeName}</h3>
        <p>{textForRecipeTagline}</p>
      </a>
    </div>
  );
};

export default async function Home() {
  const recipes: RecipeType[] = await getAllRecipePreviews();

  if (!recipes) {
    return <OcLoadingSkeleton />;
  }

  return (
    <main className={styles.main}>
      <OcSection title="New Recipes">
        <OcFlexGrid className={styles.home__new__recipes__card__container}>
          {recipes.slice(0, 3).map((data) => (
            <PreviewCard key={data._id} data={data} />
          ))}
        </OcFlexGrid>
      </OcSection>
      <OcSection isNoTitle title="Recipe of the Month">
        <div className={styles.home__recipe_of_month__container}>
          <div className={styles.home__recipe_of_month__text__container}>
            <h4>Recipe of the Month</h4>
            <h3>Recipe title</h3>
            <p>
              Easy overnight oats infused with the flavors of apple pie!
              Naturally sweetened, cinnamon-infused, and just 9 wholesome
              ingredients required. Perfect for fall and beyond!
            </p>
            <button>View Recipe</button>
          </div>
          <div className={styles.home__recipe_of_month__image__container}>
            <OcImageComponent
              height={1000}
              width={1000}
              src={`/fallback/fallback${Math.floor(Math.random() * 10) + 1}.jpg`}
              alt={"Recipe of the Month"}
            />
          </div>
        </div>
      </OcSection>
      <OcSection isAltBG title="Fan Favorites">
        <div className={styles.home__favorite__recipes__card__container}>
          {recipes.map((data) => {
            if (!data.isFanFavorite) return null;
            return <FavoriteCard key={data._id} data={data} />;
          })}
          {/* <div>Cute Blurb</div> */}
        </div>
        {/* <div>Ad - Sticky</div> */}
      </OcSection>
      <OcSection title="Explore All Recipes" isAltBG>
        <OcFlexGrid className={styles.home__explore__recipes__card__container}>
          {recipes.map((data) => (
            <PreviewCard key={data._id} data={data} />
          ))}
        </OcFlexGrid>
      </OcSection>
    </main>
  );
}
