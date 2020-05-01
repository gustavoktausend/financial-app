<script>
	import TopAppBar,  { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	export let segment = 'Financial App';
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
