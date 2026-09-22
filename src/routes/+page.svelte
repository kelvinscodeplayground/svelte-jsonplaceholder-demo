<script lang="ts">
	import { onMount } from 'svelte';
	import type { Todos } from '../types/Todo';
	import TodoCard from '../components/todo.svelte';

	let count = $state(0);
	let todos: Todos = $state([]);

	const handleClick = () => {
		count++;
		alert(`Button clicked ${count} times!`);
	};

	const fetchTodos = async () => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos');
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			todos = await response.json();
		} catch (error) {
			console.error('Error fetching todos:', error);
			todos = [];
		}
	};

	onMount(async () => {
		await fetchTodos();
	});
</script>

<nav class="flex items-center justify-between bg-base-100 p-4">
	<h1 class="text-2xl font-bold">Todo</h1>
	<button class="btn btn-primary" onclick={handleClick}>Click Me!</button>
</nav>

<div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 p-4">
	{#each todos as todo}
		<TodoCard {todo} />
	{/each}
</div>
