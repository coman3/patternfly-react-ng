# PatternFly React Ng
A hybrid approach to implementing PatternFly in Angular using the React DOM renderer.

> I wanted to use PatternFly as a UI framework but it had very little angular support... Angular is cool, react is okay, what happens if we force them to cooperate with each other? This repository demonstrates that.

## Yea so, WHY?
Well, i looked at the [official PatternFly ng](https://github.com/patternfly/patternfly-ng) implementation and realized its lacking a lot of the new features, and being a developer thought, how could this sync up with the [official PatternFly React](https://github.com/patternfly/patternfly-react) repository that is constantly updated instead of forcing the dev team to work on two separate repositories?

## But performance
Yea yea yea, performance, we all want it.  I'll be honest this implementation does add at least 150kb to the angular bundle size simply because its using the react dom to render the components in the background. Its up to you if this is worth it, personally it is for me.

When it comes down to render performance, there isn't really much of a difference, except that we are re-rendering each component every time a property changes using `ReactDOM.render()`... So, its potentially a problem, i haven't tested it yet.


# What needs doing
 - [ ] Test performance of the react rendering
 - [ ] Write wrappers for *every*, **single**, *f\*\*king*, *component*.
 - [ ] Stateful components? Will it work?
 - [ ] Confess my sins to the developer gods

