<script lang="ts">
	import TodoCard from '$lib/components/todo.svelte';

	let count = $state(0);

	const handleClick = () => {
		alert(`Button clicked ${++count} times!`);
	};

	const fetchTodos = async () => {
		await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.json();
	};
</script>

<nav class="flex items-center justify-between bg-base-100 p-4">
	<h1 class="text-2xl font-bold">Todo</h1>
	<button class="btn btn-primary" onclick={handleClick}>Click Me!</button>
</nav>

{#await fetchTodos()}
	<div class="mt-6 grid place-items-center">
		<div class="loading loading-spinner text-4xl text-primary"></div>
	</div>
{:then todos}
	<div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 p-4">
		{#each todos as todo (todo.id)}
			<TodoCard {todo} />
		{/each}
	</div>
{:catch error}
	<div class="m-4 alert alert-outline alert-error">Opps! Something went wrong!</div>
{/await}
