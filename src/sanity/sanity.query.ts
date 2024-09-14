import { groq } from "next-sanity";
import client from "./sanity.client";

/**
 * Retrieves all recipe previews from the Sanity database.
 * @returns {Promise<Array<RecipePreview>>} A promise that resolves to an array of recipe previews.
 */
export async function getAllRecipePreviews() {
  return client.fetch(
    groq`*[_type == "recipe"]{
      _id,
      slug,
      textTitleForRecipeName,
      textForRecipeTagline,
      imageForLandingRecipe {alt, "image": asset->url},
    }`
  );
}

/**
 * Retrieves the details of a single recipe based on the provided slug.
 *
 * @param slug - The slug of the recipe.
 * @returns A promise that resolves to the details of the recipe.
 */
export async function getSingleRecipeDetails(slug: string) {
  return client.fetch(
    groq`*[_type == "recipe" && slug.current == $slug][0]{
      _id,
      slug,
      textTitleForRecipeName,
      textForRecipeTagline,
      imageForLandingRecipe {alt, "image": asset->url},
      textForIntroduction,
      imageForIngredients {alt, "image": asset->url},
      textForIngredients,
      imageOfProcess {alt, "image": asset->url},
      textForProcess,
      textFinishedProduct,
      imageForFinishedProduct {alt, "image": asset->url},
      ingredients,
      instructions
    }`,
    { slug }
  );
}
/**
Two types of data fetches
1. Previews
2. Details

https://github.com/sanity-io/next-sanity/tree/main?tab=readme-ov-file#fetching-in-app-router-components
 */
