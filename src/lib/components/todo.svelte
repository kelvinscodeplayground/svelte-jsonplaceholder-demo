<script lang="ts">
	import type { Todos } from '$lib/types/Todo';
	import { goto } from '$app/navigation';

	interface Props {
		todo: Todos[number];
	}

	let { todo }: Props = $props();

	function onTodoCardClicked() {
		goto(`/todo/${todo.id}`);
	}
</script>

<button
	class="card cursor-pointer bg-base-100 p-4 text-left shadow-xl hover:bg-base-200"
	onkeydown={onTodoCardClicked}
	onclick={onTodoCardClicked}
>
	<h2 class="text-2xl">#{todo.id}</h2>
	<div>{todo.title}</div>
</button>
