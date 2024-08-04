import { RecipeType } from "@/types/sanity.types";
import styles from "./page.module.css";
import { AdLoadingSkeleton } from "@/overcooked-design-system/ad-components";
import { getAllRecipePreviews } from "@/sanity/sanity.query";
import { OCCard, OcGrid } from "@/overcooked-design-system/ui-components";
import OcImageComponent from "@/overcooked-design-system/ui-components/image/OcImageComponent";
import { OcSection } from "@/overcooked-design-system/ui-components";

interface PreviewCardProps {
  data: RecipeType;
}
const PreviewCard = ({ data }: PreviewCardProps) => {
  const {
    textTitleForRecipeName,
    imageForLandingRecipe,
  } = data;
  return (
    <OCCard headerText={textTitleForRecipeName} headerInverted>
      <div className={styles.home__preview__card__image__container}>
        <OcImageComponent
          height={750}
          width={500}
          src={imageForLandingRecipe.image}
          alt={imageForLandingRecipe.alt}
        />
      </div>
    </OCCard>
  );
};

export default async function Home() {
  const recipes: RecipeType[] = await getAllRecipePreviews();

  if (!recipes) {
    return <AdLoadingSkeleton />;
  }
  // const {
  // textTitleForRecipeName,
  //   textForRecipeTagline,
  //   textForIntroduction,
  // imageForLandingRecipe,
  //   imageForIngredients,
  //   textForIngredients,
  //   imageOfProcess,
  //   textForProcess,
  //   textFinishedProduct,
  // } = recipe;

  return (
    <main className={styles.main}>
      <OcSection title="Recipes">
        <OcGrid>
          {recipes.map((data) => (
            <PreviewCard key={data._id} data={data} />
          ))}
          {recipes.map((data) => (
            <PreviewCard key={data._id} data={data} />
          ))}
        </OcGrid>
      </OcSection>
      <OcSection title="Recipe of the Month">
        <AdLoadingSkeleton />
      </OcSection>
      <OcSection title="Fan Favorites">
        <AdLoadingSkeleton />
      </OcSection>
      <OcSection title="Recipe Round-Ups" isAltBG>
        <OcGrid>
          {recipes.map((data) => (
            <PreviewCard key={data._id} data={data} />
          ))}
          {recipes.map((data) => (
            <PreviewCard key={data._id} data={data} />
          ))}
        </OcGrid>
      </OcSection>
    </main>
  );
}
