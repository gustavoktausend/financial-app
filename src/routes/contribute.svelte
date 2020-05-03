<script>
    import ImageInput from '../components/ImageInput.svelte';
    import Back from '../components/Back.svelte';
    import Paper, { Title, Content } from '@smui/paper'; 
    import MobileDetect from "mobile-detect";
    import { stores } from "@sapper/app";

    const { session } = stores();

    let md = new MobileDetect($session.userAgent);

    let linkBB;
    let linkBradesco;
    let linkCaixa;
    let linkSantander;

    if(md.mobile() !== null){
        if(md.os() === 'AndroidOS'){
            linkBB = "https://play.google.com/store/apps/details?id=br.com.bb.android";
            linkBradesco = "https://play.google.com/store/apps/details?id=com.bradesco";
            linkCaixa = "https://play.google.com/store/apps/details?id=com.santander.app";
            linkSantander = "https://play.google.com/store/apps/details?id=com.santander.app";
        } else {
            linkBB = "https://apps.apple.com/br/app/banco-do-brasil/id330984271";
            linkBradesco = "https://apps.apple.com/br/app/bradesco/id336954985";
            linkCaixa = "https://apps.apple.com/br/app/caixa/id490813624";
            linkSantander = "https://apps.apple.com/br/app/banco-santander-brasil/id613365711";
        }

    } else {
        linkBB = "http://bb.com.br";
        linkBradesco = "http://bradesco.com.br";
        linkCaixa = "http://caixa.com.br";
        linkSantander = "http://saantander.com.br";
    }

    const selectImage = ({ target: { files } }) => console.log(files[0]);

</script>

<style>
    img {
        width: 56px;
        height: 56px;
        margin-right: 9px;
    }
</style>

<svelte:head>
    <title>Aporte</title>
</svelte:head>

<Back/>

<Paper>
    <Title>Realize seus aportes, coloque seu dinheiro na Wall-it</Title>
    <Content>
        <strong class="text-center">Informações para transferência</strong>

        Banco: XYZ<br/>
        Agencia: 0000<br/>
        Conta Corrente: 000000-00<br/>
        CNPJ: 00.000.000/0001-00<br/>
        <br/>
        <div class="row">
            <div class="col">
                <small>
                    <strong>transfira diretamente pelo celular</strong>
                    <br/>
                    <a href={linkBB} target="_blank">
                        <img alt="BB" src="bb.png"/>
                    </a>
                    <a href={linkBradesco} target="_blank">
                        <img alt="Bradesco" src="bradesco.png"/>
                    </a>
                    <a href={linkCaixa} target="_blank">
                        <img alt="Caixa" src="caixa.png"/>
                    </a>
                    <a href={linkSantander} target="_blank">
                        <img alt="Santander" src="santander.png"/>
                    </a>
                </small>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col">
                <small>Comprovante</small>
                <br/>
                <ImageInput change={selectImage}/>
            </div>
        </div>
    </Content>
</Paper>


<!--
    Tela Depósito

Título: Realize seus aportes, coloque seu dinheiro na Wall-it.



Comprovante do aporte. (Botão - Galeria de fotos)

Jornadas (Botão - Tela Jornadas)
-->