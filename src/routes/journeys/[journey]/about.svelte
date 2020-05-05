<script context="module">
    export const preload = async ({ params, query }, session) => {
        console.log(arguments)
        return ({ journey: params.journey });
    }
</script>
<script>
    import Paper, { Title, Subtitle, Content } from '@smui/paper';
    import { Graphic } from '@smui/list';
    import Button from '@smui/button';
    import Back from '../../../components/Back.svelte';
    import Loading from '../../../components/Loading.svelte';
    import { stores } from '@sapper/app';
    import { journey as getJourney } from '../../../utils/request';

    export let journey;

    const { session } = stores();
    let promise = getJourney(journey, $session.token);
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
    <title>Jornada</title>
</svelte:head>
<Back/>
<Paper>
    {#await promise}
        <Loading/>
    {:then value}
        <Title>{value.title}</Title>
        <Subtitle>{value.subTitle}</Subtitle>
        <Content>
            <div class="row">
                <div class="col">
                    <p>
                        {value.description}
                    </p>
                </div>
            </div>
            <div class="row text-center">
                <div class="col">
                    <Button color="primary" variant="unelevated">
                        <a rel="prefetch" href="/journeys/{value.id}/checkin">Começar</a>
                    </Button>
                </div>
            </div>
        </Content>
    {:catch e}
        <Content>
            <p class="text-center" style="font-size: 1.3rem;">
                <strong>Não foi possível Recuperar Informações.</strong>
            </p>
            <p class="text-center">
                <Graphic class="material-icons icon">mood_bad</Graphic>
            </p>
        </Content>
    {/await}
</Paper>


