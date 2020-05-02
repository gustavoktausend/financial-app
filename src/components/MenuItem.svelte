<script>
    import List, { Item, Text, Graphic } from '@smui/list';
    export let title;
    export let href;
    export let icon;
    export let click = () => {};
</script>

<Item {href} on:click={click}>
    <Graphic class="material-icons">{icon}</Graphic>
    <Text>{title}</Text>
</Item>
