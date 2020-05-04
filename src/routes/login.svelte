<script>
    import Paper from '@smui/paper';
    import Textfield from '@smui/textfield';
    import Button from '@smui/button';
    import FormField from '@smui/form-field';
    import { goto, stores } from "@sapper/app";
    import { login } from '../utils/request';
	import jwtDecode from 'jwt-decode';

    const { session } = stores();

    $:if($session.token) goto('/wallet');

    const submit = async () => {
        try {
            const token = await login(email, password);
            const { userAgent } = $session;
            const user = JSON.parse(jwtDecode(token).sub);
            session.set({ token, userAgent, user });
        } catch (error) {
            console.log(error);
        }
    };

    export let email = '';
    export let password = '';
</script>

<svelte:head>
    <title>Login de Acesso</title>
</svelte:head>

<div class="row">
    <div class="col">
        <h1>Acesso a Plataforma</h1>
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
                            <Textfield class="shaped-outlined" label="Email" bind:value={email} type="email" input$autocomplete="email" />
                        </FormField>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <FormField>
                            <Textfield class="shaped-outlined" label="Senha" bind:value={password} type="password" />
                        </FormField>
                    </div>
                </div>
                <br/>
                <div class="row justify-content-between">
                    <div class="col">
                        <Button color="primary" variant="outlined">Login</Button>
                    </div>
                </div>
            </form>
        </Paper>
    </div>
</div>
<br/>
<div class="row text-right">
    <div class="col">
        <Button on:click={() =>  goto('\/signup')} >Cadastre-se</Button>
    </div>
</div>