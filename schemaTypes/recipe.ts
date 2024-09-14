import { defineField, Rule } from "sanity";
import { createBlockTextValidator, createTextValidator } from "./_validators";

/**
 * The name key is the property that is used to reference a schema in the query language.
 * The value must be a unique value to avoid conflating schemas.
 *
 * The title defines what the schema type is called in the Studio UI.
 *
 * The type defines what schema type you're working with.
 * The document value will tell the studio that it should make it possible to make new documents.
 *
 *
 * The fields array is where the individual input fields will be defined.
 * Here are the fields for the profile schema:
 */

const ingredient = {
  name: "ingredient",
  title: "Ingredients and Service size",
  description: "Add the ingredients and the amount required for the recipe",
  type: "object",
  fields: [
    { name: "amount", type: "number", title: "Amount of ingredient" },
    { name: "measurement", type: "string", title: "Measuring utensil size" },
    { name: "name", type: "string", title: "Name of ingredient" },
  ],
};

const recipe = {
  name: "recipe",
  title: "Recipe Page Template",
  type: "document",
  fields: [
    {
      name: "isFanFavorite",
      title: "Fan Favorite",
      type: "boolean",
      description: "Mark true if this is a fan favorite recipe",
    },
    {
      name: "publishedAtCustom",
      title: "Published At",
      type: "datetime",
      description: "Manual override for the published date",
    },
    defineField({
      name: "textTitleForRecipeName",
      title: "Recipe Name",
      type: "string",
      description:
        "A descriptive name for the recipe i.e. 'The Ultimate Chocolate Peanut Butter Ice Cream Bar'",
      validation: (rule) => createTextValidator(rule, 30, 50),
    }),
    defineField({
      name: "textForRecipeTagline",
      title: "Tagline",
      type: "string",
      description:
        "A quick 3-5 word zippy tag line i.e. 'A delightful treat for the whole family!'",
      validation: (rule) => [
        rule
          .required()
          .min(10)
          .error(
            "A tagline is required for meta of min. 10 characters is required"
          ),
        rule
          .max(50)
          .warning(
            `A tagline shouldn't be more than 40 characters or 3-5 words. Aim for 30-40 characters.`
          ),
      ],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL (or leave it to be auto-generated) ",
      options: { source: "textTitleForRecipeName" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "imageForLandingRecipe",
      title: "Landing Image of Dish",
      type: "image",
      description:
        "Upload a eye-popping finished product of your dish! This above everything else will be the most used asset across the website. A high-quality image is required and is the best way to keep readers engaged. Required ratio is 2184 pixels high, 1456 pixels wide",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "textForIntroduction",
      title: "Introduction",
      type: "array",
      description: `This is your opportunity to capture the reader's attention and 
      encourage them to keep reading (and will be the longest text section). Start with an engaging story or interesting fact 
      related to the recipe. For example, "Growing up, my summers were spent 
      in my grandmother's kitchen, where the air was always filled with the scent 
      of freshly baked bread. It was in this warm, inviting space that I first discovered 
      the magic of combining chocolate and peanut butter." 
      
      Next, explain how this story relates to the recipe. 
      For instance, "This recipe for ice cream bars takes me back to those summer days. 
      The creamy, salty-sweet combination of chocolate and peanut butter 
      is not only nostalgic but also incredibly delicious. 
      With just 7 pantry staple ingredients, 
      these bars are a simple yet decadent treat that you can easily make at home." 
      
      By connecting your personal experience to the recipe, you provide context and add depth, making it more compelling for the reader.`,
      validation: (rule: Rule) => createBlockTextValidator(rule, 200, 500),
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
        },
      ],
    },
    {
      name: "imageForIngredients",
      title: "Image of Ingredients together",
      type: "image",
      description:
        "Upload a photo of some of the ingredients involved. A high-quality image is recommended. Ideal is 2184 pixels high, 1456 pixels wide",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "textForIngredients",
      title:
        "General text about the ingredients required for your recipe or general taste",
      type: "array",
      options: {
        spellCheck: true,
      },
      description: `
        Now that we're onto the recipe, content gets shorter. Write two sentences simply around the 
        ingredients needed for the recipe or how the recipe might taste.
        This shorter text approach provides a smooth transition throughout the page.
      `,
      validation: (rule: Rule) => createBlockTextValidator(rule, 150, 400),
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        },
      ],
    },
    {
      name: "imageOfProcess",
      title: "Image of Process",
      type: "image",
      description:
        "Upload a photo of the cooking process. A high-quality image is recommended. Ideal is 2184 pixels high, 1456 pixels wide",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "textForProcess",
      title: "General text about the process required for your recipe",
      type: "array",
      options: {
        spellCheck: true,
      },
      description: `
        Write two sentences giving clear and concise instructions on the next steps. 
        For example, "Reheat your oven to 350°F (175°C). Then, mix the dry ingredients in a large bowl 
        while melting the chocolate and peanut butter together over low heat." 
      `,
      validation: (rule: Rule) => createBlockTextValidator(rule, 150, 400),
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        },
      ],
    },
    {
      name: "imageForFinishedProduct",
      title: "Image of Finished Product",
      type: "image",
      description:
        "Upload a different image of the final product. A high-quality image is recommended. Ideal is 2184 pixels high, 1456 pixels wide",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "textFinishedProduct",
      title: "Parting words of text",
      type: "array",
      options: {
        spellCheck: true,
      },
      description: `
        Write a sentence or two regarding the final product! You can also make a social appeal i.e.
        "Share your final product with us on Instagram by tagging us #puentedr"
      `,
      validation: (rule: Rule) => createBlockTextValidator(rule, 150, 400),
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        },
      ],
    },
    {
      name: "imageFinishedProductTwo",
      title: "Second Image of Finished Product",
      type: "image",
      description:
        "Upload a different image of the final product. A high-quality image is recommended. Ideal is 2184 pixels high, 1456 pixels wide",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "ingredients",
      title: "Ingredients and Service size",
      type: "array",
      description: "Add the ingredients and the amount required for the recipe",
      of: [{ type: "ingredient" }],
    },
    {
      name: "instructions",
      title: "Instructions",
      type: "array",
      description: `Add the instructions for the recipe.`,
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
        },
      ],
    },
  ],
};

const recipeOftheMonth = {
  name: "recipeOftheMonth",
  title: "Recipe of the Month",
  type: "document",
  fields: [
    defineField({
      name: "recipeOfMonthTitle",
      title: "Recipe of the Month Title",
      type: "string",
      validation: (rule) => createTextValidator(rule, 30, 50),
    }),
    {
      title: "Recipes",
      name: "recipe",
      validation: (rule: { required: () => any }) => [rule.required()],
      type: "reference",
      to: [{ type: "recipe" }],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      options: {
        spellCheck: true,
      },
      description: `A descriptive blurb for the recipe of the month i.e. 

        Easy overnight oats infused with the flavors of apple pie! 
        Naturally sweetened, cinnamon-infused, and just 9 wholesome ingredients required. 
        Perfect for fall and beyond!`,
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
        },
      ],
    },
  ],
};

export { recipe, ingredient, recipeOftheMonth };
