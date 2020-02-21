What problem does the context API help solve?
    The issue of prop drilling in React applications.

In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 
 - Actions: describe the action you want to take when that specific function is called. It then passes the result to the reducer to handle how state        should transform.
 - Reducers: a combination of switch/case statements that determine how state should be modified based on the actions passed down to it.
 - Store: the redux store is a centralized location that holds all of your state. This allows for greater organization in larger applications.

- The store is known as a 'single source of truth' because whenever you need to access state, you will always pull it from the store regardless of what component you're operating in.

What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application state is when you want to access state that is relevant to the entire application. 
- Component state is state that is only related to the component you're working in.

- You'd only want to use component state if you don't need the rest of the application to have access to it.

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
- Redux-Thunk is middleware that allows you to create asynchronous actions by explicitly calling dispatch when needed.

What is your favorite state management system you've learned and this sprint? Please explain why!
- I actually really enjoy redux. I like having all of my state logic in a central location.