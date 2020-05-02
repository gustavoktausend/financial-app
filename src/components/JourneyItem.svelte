<script>
    import Paper from '@smui/paper';
    import Button from '@smui/button';
    export let id = 1;
    export let itemName ='COMPRAR CARRO';
    export let itemDesc = 'Realize o sonho de ter seu carro próprio e aprenda sobre educa..';
</script>

<Paper class="item">
    <div class="row">
        <div class="col">
            <h6>JORNADA ESPECIAL</h6>
        </div>
    </div>
    <div class="row">
        <div class="col-8">
            <b>{itemName}</b>
        </div>
        <div class="col-4">
            img
        </div>
    </div>
    <br/>
    <div class="row">
        <div class="col">
            <p>{itemDesc}</p>
        </div>
    </div>
    <div class="row text-center">
        <div class="col">
            <Button color="primary">
                <a rel="prefetch" href="/journey/carro-novo">Detalhes</a>
            </Button>
        </div>
    </div>
</Paper>