import { useState } from "react";
import { tasks } from "./data/tasks";
import "./App.css";

function App() {
	//LISTA DI TASK DA COMPLETARE
	const filterCurrentTasks = () => {
		return tasks.filter(
			(task) => task.state == "backlog" || task.state == "in_progress"
		);
	};
	const currentTasksList = filterCurrentTasks();
	const uncompletedTasksList = () => {
		return currentTasksList.map((task, index) => (
			<li key={task.id}>{task.title}</li>
		));
	};

	//LISTA DI TASK COMPLETATE
	const filterCompletedTasks = () => {
		return tasks.filter((task) => task.state == "completed");
	};
	const completedTasksList = filterCompletedTasks();
	const tasksCompletedList = () => {
		return completedTasksList.map((task, index) => (
			<li key={task.id}>{task.title}</li>
		));
	};
	return (
		<>
			<h1>Task Manager</h1>
			<h2>Current Tasks</h2>
			<p>{uncompletedTasksList()}</p>
			<h2>Completed Tasks</h2>
			<p>{tasksCompletedList()}</p>
		</>
	);
}

export default App;
