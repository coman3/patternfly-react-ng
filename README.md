# PatternFly React Ng
###### I want to make this as clear as possible, i do not recommend using this repository, its just a fun little experienment seeing if its possible to mash two of the most powerful UI Frameworks together. Turns out, it is.

A hybrid approach to implementing PatternFly in Angular using the React DOM renderer.

> I wanted to use PatternFly as a UI framework but it had very little angular support... Angular is cool, react is okay, what happens if we force them to cooperate with each other? This repository demonstrates that.

## Yea so, WHY?
Well, i looked at the [official PatternFly ng](https://github.com/patternfly/patternfly-ng) implementation and realized its lacking a lot of the new features, and being a developer thought, how could this sync up with the [official PatternFly React](https://github.com/patternfly/patternfly-react) repository that is constantly updated instead of forcing the dev team to work on two separate repositories?

## But performance
Yea yea yea, performance, we all want it.  I'll be honest this implementation does add at least 150kb to the angular bundle size simply because its using the react dom to render the components in the background. Its up to you if this is worth it, personally it is for me.

When it comes down to render performance, there isn't really much of a difference, except that we are re-rendering each component every time a property changes using `ReactDOM.render()`... So, its potentially a problem, i haven't tested it yet.


# What *might* need doing
I'll also state here, that is is not going to happen, this repo is just a fun little experiment to demonstrate angular rendering react components 😊
 - [x] Test performance of the react rendering (its exactly the same as how react does it, so pretty good here!)
 - [ ] Write wrappers for *every*, **single**, *f\*\*king*, *component*.
 - [x] Stateful components? Will it work? (No, it will not)
 - [ ] Confess my sins to the developer gods

