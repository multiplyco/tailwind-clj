# tailwind-clj

## What?
Scans Clojure source files for matches to Tailwind CSS class names. It will include matches for both strings and keywords.

## Why?

We came to a point where each Tailwind recompile took 20-30 seconds. Scanning the CLJ/CLJC/CLJS source files instead takes 200-300ms.

## How?

E.g.,
```
yarn add @multiplyco/tailwind-clj
```

In your `tailwind.config.js`:

```
const {scanClojure} = require('@multiplyco/tailwind-clj');

module.exports = {
  content: {
       files: [
          './src/**/*.{clj,cljs,cljc}'
          ],
      extract: {
        clj: (content) => scanClojure(content),
        cljs: (content) => scanClojure(content),
        cljc: (content) => scanClojure(content)
      }
  },
  
  …
```