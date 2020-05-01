<script>
	import Nav from '../components/Nav.svelte';
	import Menu from '../components/Menu.svelte';
	import { ShortFixedAdjust } from '@smui/top-app-bar';

	const Adjust = ShortFixedAdjust;
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
	
	* :global(.app-content) {
		flex: auto;
		overflow: auto;
		position: relative;
		flex-grow: 1;
	}
</style>

<div class="drawer-container">
	<Nav {segment} {open} click={(value) => open = value}/>
	<main use:Adjust>
		<br/>
		<br/>
		<slot></slot>
	</main>
</div>