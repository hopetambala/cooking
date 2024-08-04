import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

/**
 * name: Used to differentiate workspaces. Not compulsory for single workspace setup.
 * title: Title of your project. This will show up on the Studio.
 * projectId: This is a unique ID that points to the Sanity project you're working with.
 * dataset: The name of the dataset to use for your studio. Common names are production and development.
 * basePath: This is the URL path where your studio will be mounted.
 * schema: The object where your schema files will be defined.
 */
export default defineConfig({
  name: "default",
  title: "sanity-studio",

  projectId: "2yqjw7wz",
  dataset: "production",

  basePath: "/studio",
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
