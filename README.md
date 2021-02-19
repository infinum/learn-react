# LearnReact

For greater good.
_The greater good._

To delve deeper into the inner workings of React, your assignment will be to create your own basic implementation of the main building blocks that make this library work.
The tasks that you will tackle will build upon one another, so it's necessary to start at the beginning and build your brand new library shelf by shelf. To ensure that your work will be standing on firm footing, all tests for a given task should be passing, before moving on.

If possible, you should have one or more mentors, but that is not mandatory. But by having another developer provide his or her feedback will offer you a fresh perspective and help you on the way.

[Under the task instructions](#user-content-on-project-structure-and-tests) we prepared more information that might interest you about running tests, project structure and a few hekpful references.

## 0. Example

For you to adapt to the code and have some template upon which you can build upon, we prepared our Fibonacci function example. Take a few minutes and check it out.

The implementation of the Fibonacci function is in the `src/solutions` directory. You'll notice that we import another custom function there! You can find _step_ function, used in this example in `src/utils` directory. During the development you'll find some hints on smaller function that you could implement. This will help you with some advanced tasks.

Here you can see how passing tests look like. Hopefully. Try running this command in the terminal:

```
npm run test 00
```

## 1. DOM

React is a front-end library. So where better to start than creating elements and rendering them! For this first task, you have to create two functions - _createElement_ and _render_, that will be used in the tests. Don't forget to check out the details you need to keep in mind - there are several important parts to an element. Take some time and go through the tests and figure out what we require from these two functions.

Hint: Start with the first test on _createElement_ and see what you need to do, to actually use the functions you'll make.

## 2. Events

Events are actions that represent a core aspect of communication between the user and the program. Based on the user's action, we receive signals that we can respond to.

One of the basic actions the user can make, is to click on an element. In this task we want you to enable us to listen for this event on our rendered elements.

Continue developing you _render_ function to complete this task.

## 3. State

Elements are important, but in React and on the web today, components are the true building blocks. Not only that they contain the UI elements, needed to construct more complex features, they can also handle internal state, which is an intecral part of React.

In this task, expand the class component in the _Component.ts_ file and expand your solution for the _render_ function.

## 4. Virtual DOM

Next big thing, important for React is it's virtual DOM. It's representation of the real DOM, before any changes are made on the page. It happens between the render and actually displaying of the component on the page. React uses it's virtual DOM for comparing the initial state of the components to any changes that are made on the page. This way, we have more optimised and selective rerendering of the DOM, because we change only the components that have to, instead of the entire page.

For this task, we need to delve a bit deeper into React and reimagine our already build functions _createElement_ and _render_. The most important part will be to create the _diff_ function that will compare old states and the new. We set up some helper functions that you need to expand and use in the main _diff_ function, so you know what to keep in mind. Then expand _renderComponent_ and _createVirtualElement_ and use them to enhance your existing functions.

## 5. Hooks

For this task we want you to delve deeper into hooks. For the scope of the task, we will focus on useState and useEffect hooks. In the _hooks.ts_ file you'll also find the beginning of Functional component that you need to implement.

# On project structure and tests

Helpful resources:

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React documentation](https://reactjs.org/)
- [DevDocs React](https://devdocs.io/react/)
- [javascript.info](https://javascript.info/)

Once you download the project repository, take a look around. In the `src` folder, you'll find a few subfolders. One of them is `tests`. Inside you'll find bundled tests for each of the tasks. They will help you to understand what you need to cover in the task and then check if your implementation is working correctly.

We're using [jest testing framework](https://jestjs.io/en/) on this project. If you are not yet familiar with testing, check out these resources to help you get oriented:

- [Basics of Testing JavaScript with Jest](https://blog.bitsrc.io/testing-javascript-with-jest-a4b82817bb0f)
- [Using matchers in tests](https://jestjs.io/docs/en/using-matchers#common-matchers)

### How to run tests?

```
npm run test
```

This will run all the tests on the project. Very useful, when you'll be done with all the tasks, to see all the checkmarks. But during development you'll want to run only the tests tied to your current work. To do that type

```
npm run test 01
```

This command will run only the tests in the folder `01.DOM`, so you won't be distracted by failed tests from the tasks you haven't started yet!

### JSX, Babel and what happens there

When you'll take a look at the tests, you'll notice that we often use HTML-like code, mixed together with JavaScript. This is JSX (JavaScript XML), which allows us to easily construct elements and place them in the DOM. We then use [Babel](https://babeljs.io/docs/en/), which is a JavaScript compiler, that takes care of turning JSX code into plain JavaScript.

```
const element = <div>React is cool!</div>
```

This is then transformed into standard JavaScript object

```
const element = React.createElement('div', null, 'React is cool!');
```

For your first task you'll be creating exactly this createElement function. You don't need to worry about configuring Babel or wiring your function to be used with the tests. We are handling that, you just focus on the code.

# License

LearnReact is released under the [MIT license](http://www.opensource.org/licenses/MIT).

# Credits

Maintained and sponsored by
[Infinum](http://www.infinum.com).

<img src="https://infinum.co/infinum.png" width="264">
