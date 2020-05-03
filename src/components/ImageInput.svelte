<script>
    import { Graphic } from '@smui/list';
    export let change;
</script>

<style>
    .file-input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
    .file-input + label {
        font-size: 1.25em;
        font-weight: 700;
        color: white;
        background-color: rgb(0,179,38);
        display: inline-block;
        width: 56px;
        height: 56px;
    }

    .file-input:focus + label,
    .file-input + label:hover {
        background-color: rgb(97, 173, 113);
    }

    .file-input:focus + label {
        outline: 1px dotted rgb(0,179,38);
        outline: -webkit-focus-ring-color auto 5px;
    }

    :global(.icon) {
        color: white !important;
        margin: 8px !important;
        font-size: 40px !important;
        height: 40px !important;
        width: 40px !important;
    }
</style>


<input id="file" type="file" accept="image/*" class="file-input" on:change={change} />
<label for="file" class="text-center">
    <Graphic class="material-icons icon">camera_alt</Graphic>
</label>