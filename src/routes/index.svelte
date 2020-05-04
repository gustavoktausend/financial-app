<script>
	import Loading from '../components/Loading.svelte';
    import { goto } from "@sapper/app";
	if(typeof window !== 'undefined'){
		goto(`/login`, { replaceState: true });
	}
</script>

<svelte:head>
	<title>Wall-it</title>
</svelte:head>

<Loading/>