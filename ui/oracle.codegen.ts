import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "http://localhost:3008/graphql",
    documents: "gql/oracle/**/*.gql",
    generates: {
        "types/oracle/": {
            preset: "client",
            plugins: []
        }
    }
};

export default config;
