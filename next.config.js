module.exports = {
  reactStrictMode: true,
};

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public', // swの出力ディレクトリ
    // runtimeCaching: []
  },
});
