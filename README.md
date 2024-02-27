# tailwind-clj

## What?
Scans Clojure source files for matches to Tailwind CSS class names. It will include matches for both strings and keywords.

It does so quickly and correctly.

## Why?

We started using Tailwind back in 2019, when it was hovering around 1.0. Initially it worked well, but occasionally, 
it wouldn't pick up certain styles from the source files. This also changed between versions of Tailwind over the years.

In order to get more predictable and correct results, we started extracting classes from the JS output rather than 
the Clojure source files. This worked fairly well up to the point where our app grew such that each Tailwind 
recompile took 20-30 seconds because of the size of the ClojureScript compiler JS output during dev time. 

This is a simple library that fixes both problems. It,
- Picks up all styles, and
- Completes a full scan in around 200-400ms as opposed to the previous 20-30 seconds.

If you happen to be using a subset of Tailwind that doesn't break in Clojure, you probably don't need this library. 
If you have trouble with Tailwind picking up styles, or compiles taking a long time, it might help.

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