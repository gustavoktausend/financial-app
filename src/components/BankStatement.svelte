<script>
    import Card, { Content} from '@smui/card';
    import List, { Item, Text } from '@smui/list';
    import Loading from './Loading.svelte';

    const same = async () => {        
        const delay = ms => new Promise(res => setTimeout(res, ms))
        await delay(3000);
        return {
            bankStatement: ['sadsad', 'adsa d'],
            total: 300
        };
    };

    let promise = same();
</script>

<Card>
    <Content>
        <h4 class="mdc-typography--headline4 text-center">Seu extrato</h4>
        {#await promise}
            <Loading/>
        {:then value}
            <List>
                {#each value.bankStatement as statement}
                    <Item>
                        <Text>{statement}</Text>
                    </Item>
                {/each}
            </List>
            <div class="row">
                <div class="col">
                    <strong class="float-right">R$ {value.total}</strong>
                </div>
            </div>
        {/await}
    </Content>
</Card>