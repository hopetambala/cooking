import type { PortableTextBlock, Slug, ArraySchemaType } from "sanity";
// import { Recipe } from "../../sanity.types";

export type RecipeType = {
  _id: string;
  slug?: Slug;
  textTitleForRecipeName: string;
  textForRecipeTagline: string;
  imageForLandingRecipe: {
    alt: string;
    image: string;
  };
  textForIntroduction: PortableTextBlock;
  //Ad goes in here
  imageForIngredients: {
    alt: string;
    image: string;
  };
  textForIngredients: PortableTextBlock;
  //Ad goes in here
  imageOfProcess: {
    alt: string;
    image: string;
  };
  textForProcess: PortableTextBlock;
  //Ad goes in here
  textFinishedProduct: PortableTextBlock;
  imageForFinishedProduct: {
    alt: string;
    image: string;
  };
  //Ad goes in here
  ingredients: ArraySchemaType;
  instructions: PortableTextBlock;
};