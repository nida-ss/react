# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# state 
state is a way to store and manage data that can change over time and effect and how the components are render. We define state using the useState Hook, which allows you to set initial value and provides a way to update that state. 

# Hooks 
hooks are new addition in react 16.8
they let you use state and other react features without writing a class.

# USESTATE()
usestat() hook allow us to track state in a functional component. State generally refers to data or properties that need to tracking in an application.

# Props
In React, Props is short for "Properties". It refers to the data that is passed from a parent component to a child component, allowing the child component to receive and use the data.

# useEffect
useEffect hook allow you to perform ~side effects~
in your components. Some examaples of side effects are: fatching data, directly updating the DOM etc.

# Context Api
Context API is a feature that allow you to manage and share state across your component tree without having to pass props down manully at every level. it's usefull for scenarios where you need to share data or functions across many components, especially when these components are deeply nested.

# useReducer
useReducer is a hook that is similar to useState but it is designed for more complex state objects or state transitions that involves multi-sub values. it allows you to manage state in a functional, immutable way. N!DA64