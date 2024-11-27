import { useState } from "react";
import { tasks } from "./data/tasks";
import "./App.css";

function App() {
	const tasksList = () => {
		return tasks.map((task, index) => <li key={task.id}>{task.title}</li>);
	};
	return (
		<>
			<h1>Task Manager</h1>
			<p>{tasksList()}</p>
		</>
	);
}

export default App;
