'use strict'

module.exports = {
  "syntax": "css",
  "plugins": [
    "stylelint-order"
  ],
  "extends": [
    "stylelint-config-outside-in-order"
  ],
  "rules": {
    // http://stylelint.io/user-guide/rules/
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-unspaced-operator": true,
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "at-rule-no-unknown": [true, {
      ignoreAtRules: [
        "/^at-/",
        "/^mixin/",
        "/^function/",
        "/^include/",
        "/^return/",
        "/^if/",
        "/^else/",
        "/^each/",
        "/^for/",
        "/^while/",
      ]
    }],
    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-extra-semicolons": true,
    "color-named": "never",
    "color-no-hex": true,
    "number-max-precision": 3,
    "time-min-milliseconds": 100,
    "shorthand-property-no-redundant-values": true,
    "value-no-vendor-prefix": true,
    "declaration-no-important": true,
    "declaration-block-single-line-max-declarations": 1,
    "selector-max-attribute": 2,
    "selector-max-class": 2,
    "selector-max-combinators": 2,
    "selector-max-compound-selectors": 3,
    "selector-max-type": 2,
    "selector-max-universal": 2,
    "font-family-name-quotes": "always-where-required",
    "font-weight-notation": "numeric",
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "length-zero-no-unit": true,
  }
}
