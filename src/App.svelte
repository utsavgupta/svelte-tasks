<script>
	import Button from "./components/Button.svelte"
	import TextBox from "./components/TextBox.svelte"
	import ListView from "./components/ListView.svelte"
	import { saveTasks, loadTasks } from "./services/storage.js"
	import { onMount } from "svelte"
	let currentTask = "";
	let buttonDisabled = true;
	let tasks =  loadTasks()

	$: saveTasks(tasks)

	const textChanged = () => {
		buttonDisabled = (currentTask === "")
	}

	const displayAlert = () => {
		var date = new Date()

		tasks[tasks.length] = currentTask + " (" + date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear() + ")"
		currentTask = "";
		textChanged()
	}
</script>

<main>
	<TextBox bind:value={currentTask} onKeyUp={textChanged} />&nbsp;<Button caption="Add Note" handleClick={displayAlert} bind:disabled={buttonDisabled} /><br />
	<ListView bind:items={tasks} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>