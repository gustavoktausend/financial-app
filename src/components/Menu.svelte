<script>
    import Drawer, { Content, Scrim } from '@smui/drawer';
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
    import MenuItem from './MenuItem.svelte';
    let element;
    let clicked;
    export let open;
</script>

<Drawer variant="dismissible" bind:this={element} bind:open>
    <Content>
        <List>
            <MenuItem href="javascript:void(0)" click={() => clicked = 'Gray Kittens'} title="Gray Kittens"/>
        </List>
    </Content>
</Drawer>
