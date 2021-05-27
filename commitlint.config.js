module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-emun': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'deps'
      ]
    ]
  }
};
