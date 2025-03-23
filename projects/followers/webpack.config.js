const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'followers',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './src/app/pages/followers/followers-list/followers-list.component.ts', // Exponiendo el módulo
  },
  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  }),
});
