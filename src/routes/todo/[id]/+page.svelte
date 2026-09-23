<script lang="ts">
	import type { PageProps } from './types';
	import type { Todo } from '$lib/types/Todo';

	let { params }: PageProps = $props();
	let todoId = $derived(params.id);

	let fetchTodo = async (id: string): Promise<Todo> => {
		await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.json();
	};
</script>

{#await fetchTodo(todoId)}
	<div class="mt-6 grid place-items-center">
		<div class="loading loading-spinner text-2xl text-primary"></div>
	</div>
{:then todo}
	<pre>{JSON.stringify(todo, null, 2)}</pre>
{:catch error}
	{console.log(error)}
	<div class="m-4 alert alert-outline alert-error">Opps! Something went wrong!</div>
{/await}
