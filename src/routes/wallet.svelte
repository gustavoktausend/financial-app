<script>
    import Wallet from "../components/Wallet.svelte";
    import BankStatement from "../components/BankStatement.svelte";
    import { Swipe, SwipeItem } from "svelte-swipe"; 
    import MobileDetect from "mobile-detect";
    import { stores } from "@sapper/app";
    import Button from "@smui/Button";

    const { session } = stores();

    let autoplay = false;
    let delay = 100; //ms
    let showIndicators = false;
    let transitionDuration = 300; //ms
    let defaultIndex = 0; //start from 0
    let md = new MobileDetect($session.userAgent);
    
</script>

<style>
    * :global(button) {
        width: 100%;
        pointer-events:fill;
    }
</style>

<svelte:head>
    <title>Carteira</title>
</svelte:head>

{#if md.mobile() !== null}
    <div style="height: 100vh">
        <Swipe {showIndicators} {autoplay} {delay} {transitionDuration} {defaultIndex}>
            <SwipeItem>
                <Wallet/>
                <br/>
                <div class="row">
                    <div class="col">
                        <Button color="primary" variant="outlined" on:click={()=> window.location.assign('\/contribute')}>Depositar</Button>
                        <br/>
                        <br/>
                        <Button color="primary" variant="outlined" on:click={()=> window.location.assign('\/journeys')}>Jornadas</Button>
                    </div>
                    <div class="col">
                        <Button color="secondary" variant="unelevated" on:click={()=> window.location.assign('\/')} style="height:100%;">
                            Realizar<br/>
                            sonho
                        </Button>
                    </div>
                </div>
            </SwipeItem>
            <SwipeItem>
                <div class="row">
                    <div class="col">
                        <BankStatement/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col">
                    </div>
                </div>
            </SwipeItem>
        </Swipe>
    </div>
{:else}
    <div class="row">
        <div class="col">
            <Wallet/>
        </div>
        <div class="col">
            <BankStatement/>
        </div>
    </div>
{/if}