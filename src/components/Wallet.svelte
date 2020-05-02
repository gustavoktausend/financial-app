<script>
    import Card, { Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
    import Chart from 'svelte-frappe-charts';
    import Loading from './Loading.svelte';

    const same = async () => {        
        const delay = ms => new Promise(res => setTimeout(res, ms))
        await delay(3000);
        return {
            labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
            datasets: [
                {
                    values: [10, 12, 3, 9, 8, 15, 9]
                }
            ]
        };
    };
    let promise = same();

</script>

<Card>
    <Content class="text-center">
        <h4 class="mdc-typography--headline4">Você Poupou R$X,XX</h4>
        {#await promise}
            <Loading/>
        {:then value}
            <Chart data={value} type="pie" />
        {/await}
    </Content>
</Card>
