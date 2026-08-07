export default {
  '*.{ts,js}': ['eslint --fix', 'prettier --write'],
  '*.{html,scss,css,json,md,yml,yaml}': ['prettier --write'],
};
