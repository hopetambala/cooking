import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "2yqjw7wz",
  dataset: "production",
  apiVersion: "2024-08-03",
  useCdn: true,
};

const client = createClient(config);

export default client;
