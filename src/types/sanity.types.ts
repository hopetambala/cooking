import { PortableTextBlock } from "sanity";

export type RecipeType = {
  _id: string;
  slug: string;
  textTitleForRecipeName: string;
  textForRecipeTagline:string;
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
  textFinishedProduct: {
    alt: string;
    image: string;
  };
  imageForFinishedProduct: {
    alt: string;
    image: string;
  };
  //Ad goes in here
};