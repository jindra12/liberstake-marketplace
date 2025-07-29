import type { CodegenConfig } from '@graphql-codegen/cli';
// $ npx graphql-codegen   --schema schema.graphql   --plugin typescript   --output schema-types.ts
const config: CodegenConfig = {
  schema: 'schema.graphql',
  documents: ['./historyTransferQuery.graphql', './identitiesDataQuery.graphql'],
  generates: {
    'schemaTypes.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
    },
  },
};

export default config;
