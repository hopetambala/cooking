import { getAllRecipePreviews, getSingleRecipeDetails } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import type { RecipeType } from "@/types/sanity.custom-types";
import type { Metadata } from "next";
import { generateRandomFallbackImage } from "@/utils/testing-helpers";
import { AdBanner, AdSlot } from "@/overcooked-design-system/ad-components";
import styles from "./page.module.css";
import OcImageComponent from "@/overcooked-design-system/ui-components/image/OcImageComponent";
import { OCButton } from "@/overcooked-design-system/ui-components";
import { imgDim } from "@/utils/general";
import { FavoriteCard } from "@/overcooked-design-system/cooking-components";

type Params = {
  params: {
    recipe: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const recipe: RecipeType = await getSingleRecipeDetails(params.recipe);
  const {
    textTitleForRecipeName: title,
    textForRecipeTagline: description,
    imageForLandingRecipe: image,
  } = recipe;

  return {
    title: `${title} | Recipe`,
    description,
    openGraph: {
      images: image?.image || generateRandomFallbackImage(),
      title,
      description,
    },
  };
}

export default async function Recipe({ params }: Params) {
  const slug = params.recipe;
  const recipes: RecipeType[] = await getAllRecipePreviews();
  const recipe: RecipeType = await getSingleRecipeDetails(slug);
  const {
    textTitleForRecipeName,
    textForRecipeTagline,
    textForIntroduction,
    imageForLandingRecipe,
    imageForIngredients,
    textForIngredients,
    imageOfProcess,
    textForProcess,
    imageForFinishedProduct,
    textFinishedProduct,
    ingredients,
    instructions,
  } = recipe;

  const clxName = [
    styles["recipe-page__content"],
    "class-comp-section-content-spacing-desktop",
  ].join(" ");

  return (
    <div className={clxName}>
      <main className={styles["recipe-page__content__main"]}>
        <h1>{textTitleForRecipeName}</h1>
        <div>
          <OCButton>
            <a href="#step-by-step-process">Jump to recipe</a>
          </OCButton>
        </div>
        <OcImageComponent
          height={imgDim(1)[0]}
          width={imgDim(1)[1]}
          src={imageForLandingRecipe?.image || generateRandomFallbackImage()}
          alt={imageForLandingRecipe?.alt || textForRecipeTagline || ""}
        />
        <PortableText value={textForIntroduction} />
        <AdSlot name="Desktop In-Content 1" type="in-content">
          <AdBanner dataAdSlotId="5492208947" type="display" />
        </AdSlot>
        <OcImageComponent
          height={imgDim(1)[0]}
          width={imgDim(1)[1]}
          src={imageForIngredients?.image || generateRandomFallbackImage()}
          alt={imageForIngredients?.alt || textForRecipeTagline || ""}
        />
        <AdSlot name="Desktop In-Content 2" type="in-content">
          <AdBanner dataAdSlotId="5492208947" type="display" />
        </AdSlot>
        <PortableText value={textForIngredients} />
        <AdSlot name="Desktop In-Content 3" type="in-content">
          <AdBanner dataAdSlotId="5492208947" type="display" />
        </AdSlot>
        <OcImageComponent
          height={imgDim(1)[0]}
          width={imgDim(1)[1]}
          src={imageOfProcess?.image || generateRandomFallbackImage()}
          alt={imageOfProcess?.alt || textForRecipeTagline || ""}
        />
        <PortableText value={textForProcess} />
        <AdSlot name="Desktop In-Article 4" type="in-content">
          <AdBanner dataAdSlotId="8196230071" type="in-article" />
        </AdSlot>
        <OcImageComponent
          height={imgDim(1)[0]}
          width={imgDim(1)[1]}
          src={imageForFinishedProduct?.image || generateRandomFallbackImage()}
          alt={imageForFinishedProduct?.alt || textForRecipeTagline || ""}
        />
        <PortableText value={textFinishedProduct} />
        <div
          id="step-by-step-process"
          className={styles["recipe-page__content__main--step-by-step-process"]}
        >
          <h2>{textTitleForRecipeName}</h2>
          {/* <p>Prep time, cook, time, total time deets</p> */}
          <div>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map(({ _key, name, measurement, amount }) => (
                <li key={_key}>{`${amount} ${measurement} of ${name}`}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Instructions</h3>
            <PortableText value={instructions} />
          </div>
        </div>
      </main>
      <aside className={styles["recipe-page__content__aside"]}>
        {/* <div>Search box for recipes</div> */}
        <div
          id="meet-the-chef"
          className={styles["recipe-page__content__aside__chef"]}
        >
          <h3>Meet the Chef</h3>
          <OcImageComponent
            height={252}
            width={252}
            src={generateRandomFallbackImage()}
            alt={"Meet the Chef"}
          />
          <p>
            I’m Tieghan, the recipes you’ll find here are inspired by the people
            and places I love most. I try to live simply, eat seasonally, and
            cook with whole foods. My hope is to inspire a love for amazing
            food, as well as the courage to try something new!
          </p>
        </div>
        <AdSlot name="Desktop Sidebar 6" type="sidebar">
          <AdBanner dataAdSlotId="5492208947" type="display" />
        </AdSlot>
        <div id="Fan Favorites">
          <h3>Related recipes and fan favorites</h3>
          {recipes.map((data) => {
            if (!data.isFanFavorite) return null;
            return <FavoriteCard variant="small" key={data._id} data={data} />;
          })}
          <OCButton>
            <a href={`/#exploreallrecipes`}>Explore more recipes</a>
          </OCButton>{" "}
        </div>
        <AdSlot name="Desktop Sidebar 7" type="sidebar--sticky">
          <AdBanner dataAdSlotId="5492208947" type="display" />
        </AdSlot>
      </aside>
    </div>
  );
}
