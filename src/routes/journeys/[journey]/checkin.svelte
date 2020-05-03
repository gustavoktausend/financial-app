<script>
    import Paper from '@smui/paper';
    import Button from '@smui/button';
    import Slider from '@smui/slider';
    import FormField from '@smui/form-field';
    import Back from '../../../components/Back.svelte';

    let value = 20000;
    let interval = 48;
    let firstValue = 1.456;

</script>

<svelte:head>
    <title>Checkin</title>
</svelte:head>

<Back/>

<Paper>
    <div class="row">
        <div class="col">
            <h2>Conte pra gente o seu sonho:</h2>
        </div>
    </div>
    <br/>
    <div class="row">
        <div class="col">
            <p>Qual o valor do carro e em quanto tempo você quer realizar este sonho?</p>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <h5>Valor do carro:</h5>
        </div>
        <div class="col-6">
            <Slider bind:value min={10000} max={200000} step={500} discrete  />
        </div>
    </div>
    <br/>
    <div class="row">
        <div class="col">
            <pre class="status">Valor do Carro: R${value}</pre>
        </div>
    </div>
    <br/>
    <div class="row">
        <div class="col-6">
            <h5>Em quanto Tempo?</h5>
        </div>
        <div class="col-6">
            <Slider bind:value={interval} min={3} max={60} step={1} discrete  />
        </div>
    </div>
    <br/>
    <div class="row">
        <div class="col">
            <pre class="status">Meses: {interval}</pre>
        </div>
    </div>
    <br/>
    <div class="row">
        <div class="col">
            <p>O Valor sugerido para o primeiro aporte é de <b style="color: #2cc642">R${firstValue}</b>, Tudo bem?</p>
        </div>
    </div>
    <div class="row text-center">
        <div class="col">
            <Button color="primary" variant="unelevated"><a rel="prefetch" href="/journeys/carro-novo/challenges/1">INICIAR DESAFIOS</a></Button>
        </div>
    </div>
</Paper>
