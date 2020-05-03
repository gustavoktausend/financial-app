<script context="module">
    export async function preload({ params, query }) {
        // parametro `journey` é disponivel porque o arquivo se chama about.svelte
        if (params.challenge === '1') {
            return {
                challenge: {
                    journey:params.journey,
                    name:'Desafio 1',
                    title: 'Faça um aporte inicial de R$1532,00',
                    reward: '150',
                    description:'Informações para transferencia:',
                    description2:'<div class="row"> <div class="col"> <b>BANCO</b>: XYZ </div></div>'
                    + '<div class="row"> <div class="col"> <b>AGENCIA</b>:0000</div></div>'
                    + '<div class="row"> <div class="col"> <b>CONTA CORRENTE</b>: 000000-00 </div></div>'
                    + '<div class="row"> <div class="col"> <b>NOME</b>: Wallit Corretoria de valores </div></div>'
                    + '<div class="row"> <div class="col"> <b>CNPJ</b>: 00.000.000/0001-00 </div></div>'
                }
            };
        } else {
            this.error(404, 'Not Found');
        }

    }
</script>

<script>
    import Paper from '@smui/paper';
    import Button from '@smui/button';
    import Textfield from '@smui/textfield';
    import FormField from '@smui/form-field';
    import Back from '../../../../components/Back.svelte';

    export let challenge;

    let aportValue =0;
</script>

<svelte:head>
    <title>Jornada {challenge.journey}- {challenge.name}</title>
</svelte:head>

<Back/>

<Paper>
    <div class="row">
        <div class="col">
            <h2>{challenge.title}</h2>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <p>{challenge.name} - Ganha {challenge.reward} pts</p>
        </div>
    </div>
    <br/>
    <div class="row">
        <div class="col">
            <p>{challenge.description}</p>
        </div>
    </div>
    <br/>
    {@html challenge.description2}
    <br/>
    <div class="row text-center">
        <div class="col">
            <FormField>
                <Textfield class="shaped-outlined" label="Digite o valor aportado " bind:value={aportValue} type="text"/>
            </FormField>
        </div>
    </div>
    <div class="row text-center">
        <div class="col">
            <Button color="primary" variant="unelevated">
                <a rel="prefetch" href="/journeys/carro-novo/challenges/2">Confirmar Aporte</a>
            </Button>
        </div>
    </div>
</Paper>