<script>
	import Nav from '../components/Nav.svelte';
	import Menu from '../components/Menu.svelte';
	import { FixedAdjust } from '@smui/top-app-bar';
	import Snackbar, {Actions, Label} from '@smui/snackbar';
    import { goto, stores } from "@sapper/app";

    const { session } = stores();

	const Adjust = FixedAdjust;
	let open = false;
	export let segment;
	let success;
	$: if($session.feedbackMsg){
		success.open();
		setTimeout(
			() => session.update(
				session => ({ ...session, feedbackMsg: null })
			), 6000
		);
	}
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

	:global(.success) :global(.mdc-snackbar__surface){
		background-color: rgb(0,179,38);
	}
</style>

<Nav {segment} {open} click={(value) => open = value}/>
<br/>
<br/>
<main class="container-fluid" use:Adjust on:click={() => open = false}>
	<slot></slot>
	<Snackbar bind:this={success} class="success">
      <Label>{$session.feedbackMsg}</Label>
    </Snackbar>
</main>
