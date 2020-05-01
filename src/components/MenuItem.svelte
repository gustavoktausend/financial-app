<script>
    import List, { Item, Text } from '@smui/list';
    export let title;
    export let href;
    export let click;
</script>

<Item {href} on:click={click}>
    <Text>{title}</Text>
</Item>
