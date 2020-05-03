<script>
    import Paper from '@smui/paper';
    import Textfield from '@smui/textfield';
    import Button from '@smui/button';
    import FormField from '@smui/form-field';

    const submit = () => alert('cadastrar');

    export let nick = '';
    export let name = '';
    export let email = '';
    export let password = '';
    export let cpf = '';

</script>

<svelte:head>
    <title>Novo Usuário</title>
</svelte:head>

<div class="row">
    <div class="col">
       <h4 class="mdc-typography--headline4 text-center">Oi =) Vamos conhecer vc</h4>
    </div>
</div>
<br/>
<div class="row text-center">
    <div class="col">
        <Paper>
            <form on:submit|preventDefault={submit}>
                <div class="row">
                    <div class="col">
                        <FormField>
                            <Textfield class="shaped-outlined" label="Nickname" bind:value={nick} type="text"/>
                        </FormField>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col">
                        <FormField>
                            <Textfield class="shaped-outlined" label="Nome Completo" bind:value={name} type="text"/>
                        </FormField>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col">
                        <FormField>
                            <Textfield class="shaped-outlined" label="Email" bind:value={email} type="email"/>
                        </FormField>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col">
                        <FormField>
                            <Textfield class="shaped-outlined" label="Senha" bind:value={password} type="text"/>
                        </FormField>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col">
                        <FormField>
                            <Textfield class="shaped-outlined" label="CPF" bind:value={cpf} type="text"/>
                        </FormField>
                    </div>
                </div>
                <br/>
                <div class="row text-center">
                    <div class="col">
                        <Button color="primary" variant="outlined">Cadastrar</Button>
                    </div>
                </div>
            </form>
        </Paper>
    </div>
</div>
<br/>
<div class="row text-left">
    <div class="col">
        <Button on:click={() => window.history.back()}>Voltar</Button>
    </div>
</div>