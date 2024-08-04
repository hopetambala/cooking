import Image from "next/image";
import { getSingleRecipeDetails } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import type { RecipeType } from "@/types/sanity.custom-types";
import type { Metadata } from "next";
import { generateRandomFallbackImage } from "@/utils/testing-helpers";

type Params = {
  params: {
    recipe: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // const slug = params.recipe;
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

// const ContentBlock: FC<{value:PortableTextBlock}> = ({value}) => { 
//   if(!value) return <AdLoadingSkeleton />
//   return <PortableText value={value} />;
// }

export default async function Recipe({ params }: Params) {
  const slug = params.recipe;
  const recipe: RecipeType = await getSingleRecipeDetails(slug);
  const {
    textTitleForRecipeName,
    // textForRecipeTagline,
    textForIntroduction,
    imageForLandingRecipe,
    imageForIngredients,
    textForIngredients,
    imageOfProcess,
    textForProcess,
    imageForFinishedProduct,
    textFinishedProduct,
  } = recipe;

  return (
    <div>
      <main>
        <h1>{textTitleForRecipeName}</h1>
        <Image
          width={760}
          height={1140}
          src={imageForLandingRecipe?.image || generateRandomFallbackImage()}
          alt={imageForLandingRecipe?.alt || textTitleForRecipeName}
        />

        <PortableText value={textForIntroduction} />
        <div>Ad - Display Static</div>
        <Image
          width={760}
          height={1140}
          src={generateRandomFallbackImage()}
          alt={imageForIngredients?.alt || ""}
        />
        <div>Ad - Display Static</div>
        <PortableText value={textForIngredients} />
        <div>Ad - Display Static</div>
        <Image
          width={760}
          height={1140}
          src={generateRandomFallbackImage()}
          alt={imageOfProcess?.alt || ""}
        />
        <PortableText value={textForProcess} />
        <div>Ad - Display Static</div>
        <Image
          width={760}
          height={1140}
          src={generateRandomFallbackImage()}
          alt={imageForFinishedProduct?.alt || ""}
        />
        <PortableText value={textFinishedProduct} />
        <div id="step-by-step-process">
          <h2>{textTitleForRecipeName}</h2>
          <p>Prep time, cook, time, total time deets</p>
          <div>Cool calculator for serving idea i had</div>
          <div>
            <h3>Ingredients</h3>
            Cool calculator for serving idea I had
          </div>
        </div>
      </main>
      <aside>
        <div>Search box for recipes</div>
        <div id="meet-the-chef">
          <h3>Meet the Chef</h3>
          <Image
            width={252}
            height={252}
            src={generateRandomFallbackImage()}
            alt={imageForFinishedProduct?.alt || ""}
          />
          <p>
            I’m Tieghan, the recipes you’ll find here are inspired by the people
            and places I love most. I try to live simply, eat seasonally, and
            cook with whole foods. My hope is to inspire a love for amazing
            food, as well as the courage to try something new!
          </p>
        </div>
        <div>Ad - Display Static</div>
        <div id="Fan Favorites">
          <h3>Related Recipes and fan favorites</h3>
          <div>Recipe 1</div>
          <div>Recipe 2</div>
          <div>Recipe 3</div>
          <button>View More</button>
        </div>
        <div>Ad - Sticky Rail</div>
      </aside>
    </div>
  );
}