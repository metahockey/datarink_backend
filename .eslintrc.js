module.exports = {
  'extends': 'airbnb-base',
  'plugins': [
    'import'
  ],
  'rules': {
    'no-param-reassign': [2, { 'props': false }],
    'no-console': 0 // In Node.js, console is used to output information to the user and so is not strictly used for debugging
  }
};
