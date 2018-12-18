# react-bulma
Making React component to leverage the Bulma.io framework. Done as an exercise to learn both, not production ready!

## Requirements
This library expect your project to understand `.mjs` module the way they are parsed by the `esm` package.

## Usage
It is possible to import directly part of the library:
```JavaScript
import Box from "@cley_faye/react-bulma/dist/element/box";

ReactDOM.render(<Box>
  Hello
</Box>,
appElem);
```

## Compatibility
The built files target the following browserstring: "last 2 version, > 1%, not dead" and might reference the `@babel/polyfill` dependencies.
The files doesn't require extra conversion, and might target ES5 (as long as such browser meet the above browserstring requirements).
No JSX is present in the built files.

## Bugs and inconsistencies
Probably a lot. This is a work in progress.
