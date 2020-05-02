<script>
    import Drawer, { Content, Scrim } from '@smui/drawer';
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
    import MenuItem from './MenuItem.svelte';
    let element;
    export let open;
    export let close;
</script>

<Drawer variant="dismissible" style="position:fixed;" bind:this={element} bind:open>
    <Content>
        <List>
            <MenuItem href="/wallet" title="Carteira" click={close} icon="account_balance_wallet"/>
            <MenuItem href="/journeys" title="Jornadas" click={close} icon="account_balance_wallet"/>
        </List>
    </Content>
</Drawer>
