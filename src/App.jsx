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
		return currentTasksList.map((task) => (
			<li key={task.id} className="mb-3">
				<h3>{task.title}</h3>
				<ul>
					<li>Priority: {task.priority}</li>
					<li>Est. time {task.estimatedTime}</li>
				</ul>
			</li>
		));
	};

	//LISTA DI TASK COMPLETATE
	const filterCompletedTasks = () => {
		return tasks.filter((task) => task.state == "completed");
	};
	const completedTasksList = filterCompletedTasks();
	const tasksCompletedList = () => {
		return completedTasksList.map((task) => (
			<li key={task.id} className="mb-3">
				<h3>{task.title}</h3>
				<ul>
					<li>Priority: {task.priority}</li>
					<li>Est. time {task.estimatedTime}</li>
				</ul>
			</li>
		));
	};
	return (
		<>
			<header>
				<h1 className="p-5">Task Manager</h1>
			</header>
			<main>
				<div className="p-5">
					<h2 className="mb-5">Current Tasks (4)</h2>
					<ul>{uncompletedTasksList()}</ul>
					<hr />
					<h2 className="mt-4 mb-5">Completed Tasks (6)</h2>
					<ul>{tasksCompletedList()}</ul>
				</div>
			</main>
		</>
	);
}

export default App;
