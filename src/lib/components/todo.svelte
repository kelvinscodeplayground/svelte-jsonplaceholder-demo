<script lang="ts">
	import type { Todos } from '$lib/types/Todo';

	interface Props {
		todo: Todos[number];
	}

	let { todo }: Props = $props();
</script>

<div class="card cursor-pointer bg-base-100 p-4 shadow-xl hover:bg-base-200">
	<h2 class="text-2xl">#{todo.id}</h2>
	<div>{todo.title}</div>
</div>
