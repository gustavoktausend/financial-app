<script>
    import Wallet from '../components/Wallet.svelte';
    import BankStatement from '../components/BankStatement.svelte';
    import { Swipe, SwipeItem } from "svelte-swipe"; 
    import MobileDetect from "mobile-detect";
    import { stores } from '@sapper/app';

    const { session } = stores();

    let autoplay = false;
    let delay = 100; //ms
    let showIndicators = false;
    let transitionDuration = 300; //ms
    let defaultIndex = 0; //start from 0
    let md = new MobileDetect($session.userAgent);
    
</script>

{#if md.mobile() !== null}
    <div class="row">
        <div class="col" style="height: 100vh">
            <Swipe {showIndicators} {autoplay} {delay} {transitionDuration} {defaultIndex}>
                <SwipeItem>
                    <Wallet/>
                </SwipeItem>
                <SwipeItem>
                    <BankStatement/>
                </SwipeItem>
            </Swipe>
        </div>
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