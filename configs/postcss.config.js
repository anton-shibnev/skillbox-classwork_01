module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-sort-media-queries')({
      sort: 'mobile-first',
    }),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
          mergeIdents: true,
        },
      ],
    }),
  ],
};
