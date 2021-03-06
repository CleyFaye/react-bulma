@cley_faye/react-bulma
======================
Making React component to leverage the Bulma.io framework. Done as an exercise to learn both, not production ready!

Requirements
------------
This library expect your project to understand ESM files.
There's a dependency on `core-js@3` for Babel transpiling.

Usage
-----
You can import directly part of the library:

```JavaScript
import Box from "@cley_faye/react-bulma/dist/element/box";

ReactDOM.render(<Box>
  Hello
</Box>,
appElem);
```

Compatibility
-------------
The built files target the following browserstring: "last 2 version, > 1%, not dead" using Babel.
The files doesn't require extra conversion; no JSX is present in the built files.

Bugs and inconsistencies
------------------------
Probably a lot. This is a work in progress.

Form input fields
-----------------
Input (checkbox, input, textarea and select) are designed to "cooperate" with a controller
component that holds all their value in its own state.
This can be achieved in two ways:

- provide a `controller` prop to each input, along with a `name` property that matches the state
  property they refer to
- enclose all inputs with `<Controller controller={this}>` in the component that holds all the
  states.

Alternatively, it is possible to simply use `onChange` on inputs to do things by hand.
