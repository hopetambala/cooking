import type { PortableTextBlock, Slug, ArrayOfType } from "sanity";
// import { Recipe } from "../../sanity.types";

export type IngredientType = {
  _key: string;
  amount: number;
  name: string;
  measurement: string;
};

export type RecipeType = {
  _id: string;
  slug?: Slug;
  isFanFavorite: boolean;
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
  ingredients: Array<IngredientType>;
  instructions: PortableTextBlock;
};

export type RecipeOftheMonth = {
  _id: string;
  _type: "recipeOftheMonth";
  _createdAt: string;
  _updatedAt: string;

  recipeOfMonthTitle?: string;
  recipe?: any;
  description?: PortableTextBlock;
};