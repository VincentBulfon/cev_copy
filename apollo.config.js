module.exports = {
  client: {
    excludes: ['node_modules/*'],
    includes: ['operations/**/*.ts'],
    addTypename: true,
    service: {
 	process.env.API_URL,
      	skipSSLValidation: true,
      	tagName: 'gql',
    },
  },
};
