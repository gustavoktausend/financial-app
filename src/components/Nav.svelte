<script>
	import TopAppBar,  { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { AppContent } from '@smui/drawer';
	import Menu from './Menu.svelte';

	export let segment = 'Financial App';
	export let click;
	export let open;
</script>

<Menu {open} close={() => click(false)}/>
<AppContent>
	<TopAppBar variant="fixed">
		<Row>
			<Section>
				{#if segment !== 'login'}
					{#if !open}
						<IconButton class="material-icons" on:click={() => click(true)}>menu</IconButton>
					{:else}
						<IconButton class="material-icons" on:click={() => click(false)}>close</IconButton>
					{/if}
				{/if}
				<Title style="color: white;">{segment}</Title>
			</Section>
			<Section align="end" toolbar>
			</Section>
		</Row>
	</TopAppBar>
</AppContent>
