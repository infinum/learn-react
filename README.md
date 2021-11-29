# Learn React

For greater good.
_The greater good._

Your assignment is to create your own implementation of the React library. This will help you to delve deeper into the inner workings of it.

The tasks that you will tackle will build upon one another. It's necessary to start at the beginning and build your brand new library shelf by shelf. To ensure that your work will be standing on firm footing all tests for a given task should be passing.

If possible, you should have one or more mentors, but that is not mandatory.

### Requirements

- Basic knowledge of JavaScript
- Text editor (we recommend [Visual Studio Code](https://code.visualstudio.com/))
- Knowledge of [git](https://git-scm.com/)

### Recommended

- A mentor to guide you when you're lost
- knowledge of Jest

### Rules

- Test every subtask with Jest
- Complete every subtask in order. Don't skip ahead, as tasks build upon one another

## 0. Example

. We prepared [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number) example. It will help you to adapt to the code and have a template with which you can build upon. Take a few minutes and check it out.
You'll notice that we import another custom function there! You can find _step_ function, used in this example in `src/utils` directory.

- Solution: `src/solutions/example/fibonacci.ts`
- Specification and tests: `src/tests/00.example/fibonacci.test.ts`

Run tests from the command line:

```bash
npm run tests fibonacci
```

or

```bash
npm run tests 00
```

#### References:

- [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number)
- [Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

## 1. DOM

React is a front-end library. So where better to start than creating elements and rendering them! For this first task, you have to create two functions - **createElement** and **render**, that will be used in the tests.

Take some time and go through the tests and figure out what we require from these two functions.

### createElement

- Solution: `src/solutions/LearnReact/createElement.ts`
- Specification and tests: `src/tests/01.DOM/createElement.test.tsx`

### render

- Solution: `src/solutions/LearnReact/render.ts`
- Specification and tests: `src/tests/01.DOM/render.test.tsx`

#### References:

- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- [Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [Document.createTextNode()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)

## 2. Events

Events are actions that represent a core aspect of communication between the user and the program. Based on the user's action, we receive signals that we can respond to.

One of the basic actions the user can make, is to click on an element. In this task we want you to enable us to listen for this event on our rendered elements.

Continue developing your **render** function to complete this task. In the tests, we want to test two different events - click and blur, but your solution needs to handle any event.

### events

- Specification and tests: `src/tests/02.events/events.test.tsx`

#### References:

- [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## 3. Component and State

Elements are important, but in React and on the web today, components are the true building blocks. They contain the UI elements needed to construct more complex features. They can also handle the internal state, which is an integral part of React.

In this task, expand the class component in the **Component.ts** file and expand your solution for the **render** function. **Component.ts** needs to store props and the state and should handle proper changing of this state.

### Component

- Solution: `src/solutions/LearnReact/Component.ts`
- Specification and tests: `src/tests/03.state/component.test.tsx`

### setState

- Specification and tests: `src/tests/03.state/setState.test.tsx`

References:

- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [React.Component](https://reactjs.org/docs/react-component.html)
- [setState](https://reactjs.org/docs/react-component.html#setstate)

## 4. Diff algorithm

Next big thing, important for React is it's virtual DOM. It's representation of the real DOM, before any changes are made on the page. It happens between the render and actually displaying of the component on the page. React uses it's virtual DOM for comparing the initial state of the components to any changes that were made on the page. This way, we have more optimised and selective rerendering of the DOM, because we change only the components that have to, instead of the entire page.

Implementation tips:

1. **diff** function should called initialy from the **render** function. Old virtual element should be set to `null`.
2. **diff** function should be each time component state is changed. For this to work component should have a virtual element saved. New virtual element is just a clone of the saved virutal element.
3. Virtual element of the component should save the component instance. This way the component state can be reused.
4. First step of the diff algorithm is to compare types. If they differ old element should be removed from the DOM.
5. Second step is to compare the props. This is done only for the non-component virutal elements. Old listensers and styles should be removed if not present in the new props.
6. Last step is to compare rendered children. Virtual element should save rendered children so they can be compared on change. They are compared by calling the **diff** function.

For the purposes of this exercise adding, removing, or reordering of the children is not mandatory.

### diff

- Solution: `src/solutions/LearnReact/diff.test.tsx`
- Specification and tests: `src/tests/04.virtualDOM/diff.test.tsx`

#### References:

- [Virtual DOM](https://reactjs.org/docs/faq-internals.html)
- [Reconciliation](https://reactjs.org/docs/reconciliation.html)

## 5. Hooks

For this task we want you to delve deeper into hooks. For the scope of the task, we will focus on useState and useEffect hooks. You'll also need to implement Functional component.

### Functional component

- Solution: `src/solutions/LearnReact/hooks.tsx`
- Specification and tests: `src/tests/05.hooks/functionalComponent.test.tsx`

### useState & useEffect

- Solution: `src/solutions/LearnReact/hooks.ts`
- Specification and tests: `src/tests/05.hooks/hooks.test.tsx`

#### References:

- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

## FAQ

### How to run tests?

```
npm run test
```

This will run all the tests on the project. Very useful, when you're done with all the tasks, to see all the checkmarks. But during development, you'll want to run only the tests tied to your current work. To do that type

```
npm run test 01
```

This command will run only the tests in the folder `01.DOM`. This way you are not distracted by failed tests from the tasks you haven't started yet!

### JSX, Babel and what happens there

You may have noticed that we often use HTML-like code, mixed together with JavaScript. This is JSX (JavaScript XML), which allows us to construct elements and place them in the DOM. [Babel](https://babeljs.io/docs/en/) turns JSX code into plain JavaScript.

```
const element = <div>React is cool!</div>
```

This is then transformed into standard JavaScript object

```
const element = React.createElement('div', null, 'React is cool!');
```

For your first task you'll be creating exactly this createElement function. You don't need to worry about configuring Babel, we are handling that, you can focus on the code.

[React without JSX](https://reactjs.org/docs/react-without-jsx.html)

## License

Released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Credits

Maintained and sponsored by
[Infinum](http://www.infinum.com).

<img src="https://infinum.co/infinum.png" width="264">
