<script context="module">
    export async function preload({ params, query }) {
        // parametro `journey` é disponivel porque o arquivo se chama [journey].svelte
        if (params.journey === 'carro-novo') {
            return {
                journey: {
                    name:'Carro Novo',
                    description: 'Olá {Nome do Usuário}, seja bem-vindo a jornada que vai realizar o seu sonho de ter o seu próprio carro.' +
                            'Se você chegou até aqui, isso significa que você realmente quer realizar aprender sobre finanças pessoais de forma prática.' +
                            'Será preciso muito disciplina e organização, não será um caminho fácil, mas estamos aqui para te ajudar =) '
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
    import Back from '../../components/Back.svelte';

    export let journey;
</script>

<svelte:head>
    <title>Jornada {journey.name}</title>
</svelte:head>

<Back/>

<Paper>
    <div class="row text-center">
        <div class="col">
            <h3>{journey.name}</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <p>
                {journey.description}
            </p>
        </div>
    </div>
    <div class="row text-center">
        <div class="col">
            <Button color="primary">
                Iniciar Jornada
            </Button>
        </div>
    </div>
</Paper>


