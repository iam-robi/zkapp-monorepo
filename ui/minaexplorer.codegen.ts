import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://berkeley.graphql.minaexplorer.com",
  documents: "gql/minaexplorer/**/*.gql",
  generates: {
    "types/minaexplorer/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
