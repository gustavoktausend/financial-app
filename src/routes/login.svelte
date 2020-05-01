<script>
    import Paper from '@smui/paper';
    import Textfield from '@smui/textfield';
    import Fab from '@smui/fab';
    import FormField from '@smui/form-field';

    export let email = '';
    export let password = '';
</script>

<svelte:head>
    <title>Login de Acesso</title>
</svelte:head>

<br/>
<h1>Acesso a Plataforma</h1>
<br/>
<Paper>
    <FormField>
        <Textfield class="shaped-outlined" label="Email" bind:value={email} type="email" input$autocomplete="email" />
    </FormField>
    <br/>
    <FormField>
        <Textfield class="shaped-outlined" label="Password" bind:value={password} type="password" />
    </FormField>
    <br/>
    <Fab on:click={()=> alert('login') } color="primary" extended >Login</Fab>
</Paper>