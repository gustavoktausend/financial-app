<script>
	import Nav from '../components/Nav.svelte';
	import Menu from '../components/Menu.svelte';
	import { FixedAdjust } from '@smui/top-app-bar';

	const Adjust = FixedAdjust;
	let open = false;
	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment} {open} click={(value) => open = value}/>
<br/>
<br/>
<main class="container-fluid" use:Adjust on:click={() => open = false}>
	<slot></slot>
</main>
