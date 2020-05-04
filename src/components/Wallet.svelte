<script>
    import Card, { Content } from '@smui/card';
    import Chart from 'svelte-frappe-charts';
    import Loading from './Loading.svelte';
    import { wallet } from '../utils/request';
    import { stores } from '@sapper/app';
    import { Graphic } from '@smui/list';
    const { session } = stores();

    const { token, user: { id } } = $session;

    const createChart = async () => {
        try {
            const data = await wallet(id, token);
            return {
                empty: Object.keys(data).length === 0,
                total: Object.values(data).reduce((a, b) => a + b, 0.00),
                labels: Object.keys(data),
                datasets: [ { values: Object.values(data) } ]
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    let promise = createChart();
</script>

<style>
    :global(.icon) {
        width: 75px;
        height: 75px;
        font-size: 75px;
        margin-right: 0;
    }
</style>

<Card>
    <Content class="text-center">
        {#await promise}
            <Loading/>
        {:then value}
            {#if value.empty}
                <p style="font-size: 1.5rem;">
                    <strong>Você ainda não começou a poupar.</strong>
                </p>
                <p class="text-center">
                    <Graphic class="material-icons icon">mood_bad</Graphic>
                </p>

            {:else}
                <h4 class="mdc-typography--headline4">Você Poupou R${value.total}</h4>
                <Chart data={value} type="pie" />
            {/if}
        {:catch e}
            <p style="font-size: 1.3rem;">
                <strong>Não foi possível recuperar dados sobre sua carteira.</strong>
            </p>
            <p class="text-center">
                <Graphic class="material-icons icon">mood_bad</Graphic>
            </p>
        {/await}
    </Content>
</Card>
