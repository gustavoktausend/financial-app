<script>
    import Back from '../components/Back.svelte';
    import Paper, { Title, Content } from '@smui/paper';
    import Button from "@smui/button";

    const draw = () => {};
</script>

<svelte:head>
    <title>Aporte</title>
</svelte:head>

<Back/>

<Paper>
    <Title>Chegou a hora de voce realizar seu sonho</Title>
    <Content>
        <p>Você cumpriu todas as fases da jornada e está pronto para [nome da Jornada].</p>
        <p>Solicite a retirada do seu investimento e depois, não esqueça de compartilhar seu sonho.</p>

        <strong>Meu banco</strong><br/>
        <br/>
        Banco: XYZ <br/>
        Agencia: 0000 <br/>
        Conta Corrente: 000000-00 <br/>
        CNPJ: 00.000.000/0001-00 <br/>

        Saldo R$ X,xx <br/>
        Você poupou: R$ X,xx <br/>
        Rendimento: XX% <br/>
        <br/>
        <strong>Seu dinheiro está na sua conta em até 24 horas.</strong>

        <div class="row">
            <div class="col">
                <Button color="primary" variant="outlined" on:click={()=> window.location.assign('\/journeys')}>Jornadas</Button>
            </div>
            <div class="col">
                <Button color="secondary" variant="unelevated" on:click={draw} style="height:100%;">
                    Retirar
                </Button>
            </div>
        </div>
    </Content>
</Paper>
