# B14-A05-Dev-Stack-2026

A responsive React + TypeScript website for exploring technologies and building a personal development stack.

## Tech Used

- React
- TypeScript
- Tailwind CSS, DaisyUI
- React-Toastify
- Vite
- JSON

## Features

1. Technology cards are loaded from a local JSON file with `useEffect`.
2. Users can add, remove, and clear technologies from a personal stack.
3. React-Toastify gives feedback for add, duplicate, remove, and remove-all actions.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like UI inside JavaScript/TypeScript.

### 2. What is the difference between props and state?

Props are data passed from a parent to a child. State is data owned by a component that can change and cause the UI to update.

### 3. What does `useState` hook do, and where did you use it in this project?

`useState` stores changing component data. In this project it stores the loaded technologies, selected stack items, loading state, and mobile menu state.

### 4. What does `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering. We use it to fetch `public/data/technologies.json` when the technologies section loads.

### 5. Why does every item in a .map() list need a unique key prop?

Every item in a .map() list needs a unique key prop because React uses the key to identify each item and efficiently update the list when items are added, removed, or changed. Without a unique key, React may show a warning and cannot properly track list items.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI depending on a condition. Here, the stack shows `Your stack is empty.` when `selected.length === 0`, otherwise it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props. A child component can send data back to the parent by calling a callback function passed through props.
