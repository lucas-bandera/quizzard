const REACT_QUESTIONS = [
    {
        id: 1,
        question: 'What is React?',
        answer: `React is an open-source JavaScript library developed by Facebook,
        and it has grown to become one of the most popular JavaScript libraries in the world.
        It offers speed, scalability, and simplicity in developing interactive User Interfaces.
        Reacts introduces JSX, the Virtual DOM, Components, States, Props among other key features that allows developers to create and manage large scale web applications.
        `,
        extras: [
            'Mention how react handles stuff',
            'mention about react SPA'
        ]
    },
    {
        id: 2,
        question: 'What are the major features of React?',
        answer: `So the major features of React are:

        -   The JSX file extension, which stands for JavaScript XML,
            it allows us to write HTML structures inside our JavaScript file 
            This helps in making the code more readable and maintainable.
        
        -   Components, which are self-contained modules that render some part of the application
            and helps by making code more manageable and reusable.
        
        -   State, which is a way for components to maintain and manage their own data.
        
        -   Props, which are a way of passing the data from parent components to child components.
        
        -   and that it utilizes the Virtual DOM, in which React creates a virtual representation of the Real DOM in memory and uses this virtual representation in order to compare the changes to our state to what we have in memory in order to properly re-render only the parts of our DOM that have been updated, this helps because operations to the Real DOM are expensive in comparison, so it boosts performance.`,
    },
    {
        id: 3,
        question: 'What is JSX?',
        answer: `JSX is a JavaScript syntax extension, that stands for JavaScript XML, 
        and it basically allows us to write HTML structures inside of our JavaScript code, making the code more readable and maintainable.`,
    },
    {
        id: 4,
        question: 'What is a SPA?',
        answer: `A SPA, or Single Page Application, 
is a type of web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server.
In a SPA, all necessary HTML, JavaScript, and CSS code is either retrieved by the browser with a single page load, 
or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.
The page does not reload at any point in the process.
`,
    },
    {
        id: 5,
        question: 'What is the difference between Element and Component?',
        answer: `A React element is a simple object that describes a DOM node and its attributes or properties, they are immutable and cannot be changed once created.

A React component, on the other hand, is a function or a class that takes in inputs called props and returns a React element that describes how a section of the UI should appear. Components can be reused and combined to build complex User Interfaces.
`,
    },
    {
        id: 6,
        question: 'What is the difference between Functional Components and Class Components?',
        answer: `So, in React, there are two main types of components, Class Components and Functional Components. 
Both are used to split the UI into reusable pieces but they differ in syntax and their features.
`,
    },
    {
        id: 7,
        question: 'What are states and props in React?',
        answer: `The state is an object that holds the data inside of a component.
They are mutable, so they can be changed or updated by the use of setState or useState and, when the state changes, React re-renders the component to reflect the new state in the UI.
State is local to the component it's declared in. This means that it's not accessible to other components unless passed as props from parent components to child components.

Props are objects that allow data to be passed from a parent component to a child component.
They are Immutable and cannot be changed directly by the child component, instead relying on its parent to change the props if needed.
`,
    },
    {
        id: 8,
        question: 'What are Events in React?',
        answer: `Events are react's built in way of dealing with users interaction, they are representative of the events in the DOM.
they are written in camelCase instead of lowercase and we can pass some methods or functions to them in order to take users interactions and re-render the page accordingly
`,
    },
    {
        id: 9,
        question: 'What are Pure Components?',
        answer: `A React component is considered pure if it renders the same output for the same state and props.
This means that the component only re-renders when there is a change in its state or props, and not on every parent component's re-render.
This way we can ensure a more performant application.
`,
    },
    {
        id: 10,
        question: 'What are Higher-Order components?',
        answer: `Higher-Order Components, or HOCs, in React are a pattern used to reuse component logic.
An HOC is a function that takes a component and returns a new component, augmenting the original component by adding new properties or functionality. 

They allow for modularity and can be used to share common behavior between components, such as data fetching, state management, or UI enhancements, without repeating code.
`,
    },
    {
        id: 11,
        question: 'What are refs in React?',
        answer: `balacubacu`,
    },
    {
        id: 12,
        question: 'What is the difference between controlled components and uncontrolled components?',
        answer: `balacubacu`,
    },
    {
        id: 13,
        question: 'What is component lifecycle?',
        answer: `balacubacu`,
    },
    {
        id: 14,
        question: 'What are the advantages and limitations of React?',
        answer: `balacubacu`,
    },
    {
        id: 15,
        question: 'Why should we not update the state directly?',
        answer: `balacubacu`,
    },
    {
        id: 16,
        question: 'What are some ways that you ensure that your react applications are performant?',
        answer: `balacubacu`,
    },
    {
        id: 17,
        question: 'What is the difference between useCallback and useMemo?',
        answer: `balacubacu`,
    },
    {
        id: 18,
        question: 'What is the "key" prop and what is the benefit of using it in arrays of elements?',
        answer: `balacubacu`,
    },
    {
        id: 19,
        question: 'What are the lifecycle methods of React?',
        answer: `balacubacu`,
    },
    {
        id: 20,
        question: 'What are the advantages and disadvantages of Context API and Redux?',
        answer: `balacubacu`,
    },
    {
        id: 21,
        question: 'what is memoizing, and when do we want to use it?',
        answer: `balacubacu`,
    }
]

export default REACT_QUESTIONS