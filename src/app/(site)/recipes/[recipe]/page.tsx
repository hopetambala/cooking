import Image from "next/image";
import { Metadata } from "next";
import { getSingleRecipeDetails } from "@/sanity/sanity.query";
import type { RecipeType } from "@/types/sanity.types";
import { PortableText } from "@portabletext/react";
// import fallBackImage from "@/public/project.png";

type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const recipe: RecipeType = await getSingleRecipeDetails(slug);
  const {
    textTitleForRecipeName: title,
    textForRecipeTagline: description,
    imageForLandingRecipe: image,
  } = recipe;

  return {
    title: `${title} | Recipe`,
    description,
    openGraph: {
      images: image?.image || "/fallback/fallback1.jpg",
      title,
      description,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const recipe: RecipeType = await getSingleRecipeDetails(slug);
  const {
    textTitleForRecipeName,
    // textForRecipeTagline,
    textForIntroduction,
    imageForLandingRecipe,
    // imageForIngredients,
    // textForIngredients,
    // imageOfProcess,
    // textForProcess,
    // textFinishedProduct,
  } = recipe;

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {textTitleForRecipeName}
          </h1>
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={900}
          height={460}
          src={imageForLandingRecipe?.image || `/fallback${Math.floor(Math.random() * 10) + 1}.jpg`}
          alt={imageForLandingRecipe?.alt || textTitleForRecipeName}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={textForIntroduction} />
        </div>
      </div>
    </main>
  );
}
