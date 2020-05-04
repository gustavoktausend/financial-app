<script>
    import Paper from '@smui/paper';
    import Button from '@smui/button';
    export let id;
    export let title;
    export let subTitle;
    export let description
</script>

<Paper class="item">
    <div class="row">
        <div class="col">
            <h6>{title}</h6>
        </div>
    </div>
    <div class="row">
        <div class="col-8">
            <b>{subTitle}</b>
        </div>
        <div class="col-4">
            img
        </div>
    </div>
    <br/>
    <div class="row">
        <div class="col">
            <p>{description}</p>
        </div>
    </div>
    <div class="row text-center">
        <div class="col">
            <Button color="primary">
                <a rel="prefetch" href="/journeys/{id}/about">Detalhes</a>
            </Button>
        </div>
    </div>
</Paper>