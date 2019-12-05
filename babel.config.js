module.exports = function(api) {
  api.cache(true);
  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
        modules: false,
      },
    ],
  ];
  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ];
  const sourceType = 'unambiguous';
  return {
    presets,
    plugins,
    sourceType,
  };
};
