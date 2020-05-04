<script>
    import Drawer, { Content, Scrim } from '@smui/drawer';
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
    import MenuItem from './MenuItem.svelte';
    import { goto, stores } from '@sapper/app';
    const { session } = stores();
    let element;
    export let open;
    export let close;
    const logout = () => {
        session.update(session => ({...session, token: null }));
        goto('/');
        close();
    }
</script>

<Drawer variant="dismissible" style="position:fixed;" bind:this={element} bind:open>
    <Content>
        <List>
            <MenuItem href="/wallet" title="Carteira" click={close} icon="account_balance_wallet"/>
            <MenuItem href="/journeys" title="Jornadas" click={close} icon="navigation"/>
            <MenuItem href="javascript:void(0)" title="Sair" click={logout} icon="directions_run"/>
        </List>
    </Content>
</Drawer>
