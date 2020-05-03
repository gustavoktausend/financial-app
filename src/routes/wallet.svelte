<script>
    import Wallet from "../components/Wallet.svelte";
    import Swipeable from "../components/Swipeable.svelte";
    import BankStatement from "../components/BankStatement.svelte";
    // import { Swipe, SwipeItem } from "svelte-swipe";
    import MobileDetect from "mobile-detect";
    import { stores } from "@sapper/app";
    import Button from "@smui/button";

    const { session } = stores();

    let md = new MobileDetect($session.userAgent);
    let initializing = true;
    let loginProgress;
    
</script>

<style>
    * :global(button) {
        width: 100%;
    }

    .actions {
        position: absolute;
        bottom: 20%;
        left: 0;
        right: 0;
        padding: 12px 0;
        text-align: center;
    }

    .fullpage {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        user-select: none;
    }
    .fullpage .inner {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    main {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .content {
        position: relative;
    }

    #wrapper {
        position: relative;
        height: 100vh;
        overflow: hidden;
        margin: 0;
    }

</style>

<svelte:head>
    <title>Carteira</title>
</svelte:head>

{#if md.mobile() !== null}
    <div id="wrapper">
        <Swipeable numStates="2" let:current let:progress={introProgress}>
            <div class="slides fullpage">
                <main class:current={current == 0 && !initializing}>
                    <div class="inner">
                        <div class="content" style="right: {100 * (introProgress)}%; opacity: {1 - Math.abs(introProgress)}">
                            <Wallet/>
                        </div>
                    </div>
                </main>
                <main class:current={current == 1}>
                    <div class="inner">
                        <div class="content" style="right: {100 * (introProgress - 1)}%; opacity: {1 - Math.abs(introProgress - 1)}">
                            <BankStatement/>
				        </div>
                    </div>
                </main>
                <br/>
                <div class="row actions">
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
            </div>
        </Swipeable>
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