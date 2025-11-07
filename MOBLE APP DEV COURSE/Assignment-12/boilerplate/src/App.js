import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import FormExample from "./components/FormExample";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
import RouterExample from "./components/RouterExample";

export default function App() {
  return (
    <div className="container">
      <h1 className="main-title">React Syllabus Boilerplate</h1>
      <Greeting name="Abdul Haseeb Qazi" />
      <Counter />
      <UserCard />
      <FormExample />
      <TodoList />
      <ThemeToggle />
      <RouterExample />
    </div>
  );
}
