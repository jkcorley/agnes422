import { createCrystallizeClient } from "@crystallize/rest-graphql-client";

export const crystallize = createCrystallizeClient({
  tenantIdentifier: process.env.CRYSTALLIZE_TENANT!,
  apiUrl: process.env.CRYSTALLIZE_API_URL!,
});
