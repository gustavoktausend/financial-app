<script>
    import Drawer, { Content, Scrim } from '@smui/drawer';
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
    import MenuItem from './MenuItem.svelte';
    let element;
    export let open;
</script>

<Drawer variant="dismissible" bind:this={element} bind:open>
    <Content>
        <List>
            <MenuItem href="/wallet" title="Carteira" icon="account_balance_wallet"/>
        </List>
    </Content>
</Drawer>
