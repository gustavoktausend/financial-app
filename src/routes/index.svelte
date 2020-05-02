<script>
	import Loading from '../components/Loading.svelte';
	if(typeof window !== 'undefined'){
		window.location.replace('/login')
	}
</script>

<svelte:head>
	<title>Wall-it</title>
</svelte:head>

<Loading/>