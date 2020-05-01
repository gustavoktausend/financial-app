<script>
	import TopAppBar,  { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { AppContent } from '@smui/drawer';
	import Menu from './Menu.svelte';

	export let segment = 'Financial App';
	export let click;
	export let open;
</script>


<TopAppBar variant="short">
	<Row>
		<Section>
			{#if segment !== 'login'}
				<IconButton class="material-icons">menu</IconButton>
			{/if}
			<Title>{segment}</Title>
		</Section>
		<Section align="end" toolbar>
			<!-- <IconButton class="material-icons" aria-label="Download">file_download</IconButton> -->
		</Section>
	</Row>
</TopAppBar>