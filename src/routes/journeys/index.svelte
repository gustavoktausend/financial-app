<script>
    import JourneyItem from '../../components/JourneyItem.svelte';
    import Loading from '../../components/Loading.svelte';
    import { journeys } from '../../utils/request';
    import Card, { Content } from '@smui/card';
    import { stores } from '@sapper/app';
    import { Graphic } from '@smui/List';

    const { session } = stores();

    let promise = journeys($session.token)

</script>

<style>
    :global(.icon) {
        width: 75px;
        height: 75px;
        font-size: 75px;
        margin-right: 0;
    }
</style>

<svelte:head>
    <title>Jornadas</title>
</svelte:head>
<h2 >Realize seu Sonho</h2>
{#await promise}
    <Loading/>
{:then value}
    {#each value.content as journey}
        <JourneyItem { ...journey }/>
    {/each}
{:catch error}
    <Card>
        <Content>
            <p class="text-center" style="font-size: 1.3rem;">
                <strong>Não foi possível recuperar Jornadas.</strong>
            </p>
            <p class="text-center">
                <Graphic class="material-icons icon">mood_bad</Graphic>
            </p>
        </Content>
    </Card>
{/await}
