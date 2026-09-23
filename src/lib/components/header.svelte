<script lang="ts">
	import { goto } from '$app/navigation';

	let count = $state(0);

	const handleClick = () => {
		alert(`Button clicked ${++count} times!`);
	};

	const handleGoToHome = () => {
		goto('/');
	};
</script>

<nav class="flex items-center justify-between bg-base-100 p-4">
	<button class="cursor-pointer text-2xl font-bold" onclick={handleGoToHome}>Todo</button>
	<button class="btn btn-primary" onclick={handleClick}>Click Me!</button>
</nav>
