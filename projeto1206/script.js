const botao = document.getElementById("tapText");
const stickman = document.getElementById("stickman");
const ball = document.getElementById("ball");
const nextBtn = document.getElementById("nextBtn");
const jorgePage = document.getElementById("jorgePage");
const albumCover = document.getElementById("albumCover");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const fecharPopup = document.getElementById("fecharPopup");
const musicName = document.getElementById("musicName");
const message = document.getElementById("message");
const player = document.getElementById("player");


stickman.style.display = "none";
ball.style.display = "none";

botao.addEventListener("click", () => {

    botao.style.display = "none";

    stickman.style.display = "block";
    ball.style.display = "block";

    stickman.animate(
        [
            { transform: "translateX(-300px)" },
            { transform: "translateX(200px)" }
        ],
        {
            duration: 2000,
            fill: "forwards"
        }
    );

    setTimeout(() => {

        ball.animate(
            [
                { transform: "translateX(0px)" },
                { transform: "translateX(500px)" }
            ],
            {
                duration: 1000,
                fill: "forwards"
            }
        );

    }, 2000);
setTimeout(() => {

    ball.animate(
        [
            { transform: "translateX(500px) scale(1)" },
            { transform: "translateX(500px) scale(50)" }
        ],
        {
            duration: 800,
            fill: "forwards"
        }
    );

    setTimeout(() => {

        stickman.style.display = "none";
        ball.style.display = "none";
     
        message.style.display = "block";

    setTimeout(() => {
    message.scrollTop = 0;
}, 10);

    }, 900);

}, 3000);
});
nextBtn.addEventListener("click", () => {

    message.style.display = "none";

    jorgePage.style.display = "flex";


});

const musicas = [

{
    nome:"Magnólia",
    capa:"imagens/magnolia.jpg.jpeg",
    audio:"musicas/magnolia.mp3",
    frase:"tive certeza que tava apaixonada no dia 07/11, mas papo? acho que tudo começou naquele dia que tu sorriu pra mim no ônibus."
},

{
    nome:"Por Causa de Você, Menina",
    capa:"imagens/porcausadevoce.jpg.jpeg",
    audio:"musicas/porcausadevoce.mp3",
    frase:"tu me faz um benzão. sério. por mim eu passava todos os dias contigo sem enjoar nem um tico."
},


{
    nome:"Menina Mulher da Pele Preta",
    capa:"imagens/pelepreta.jpg.jpeg",
    audio:"musicas/pelepreta.mp3",
    frase:"teus olhos são um absurdo. e teu sorriso nem se fala. Mas o que mais me prende é teu jeitinho e a pessoa incrível que tu é."
},



{
    nome:"Que Maravilha",
    capa:"imagens/quemaravilha.jpg.jpeg",
    audio:"musicas/quemaravilha.mp3",
    frase:"se eu tivesse que voltar pra algum momento, eu viveria tudo de novo sem pensar duas vezes, só por ser com você."
},

{
    nome:"Oba, Lá Vem Ela",
    capa:"imagens/obalavemela.jpg.jpeg",
    audio:"musicas/obalavemela.mp3",
    frase:"o doido é que a gente sempre dá um jeito de se ver. não importa a correria, a distância ou qualquer coisa. No fim, a gente sempre acaba encontrando um jeito."
},
];
let musicaAtual = 0;

player.src = musicas[0].audio;

albumCover.addEventListener("click", () => {

    player.src = musicas[musicaAtual].audio;

    player.load();

    player.play()
    .catch((erro) => {
        console.log("Erro ao tocar:", erro);
    });

    popupText.innerText = musicas[musicaAtual].frase;

    popup.style.display = "block";

});

fecharPopup.addEventListener("click", () => {

    popup.style.display = "none";

    player.pause();
    player.currentTime = 0;

    musicaAtual++;

    if(musicaAtual < musicas.length){

        albumCover.src = musicas[musicaAtual].capa;

        musicName.innerText = musicas[musicaAtual].nome;

        player.src = musicas[musicaAtual].audio;

    }else{

        window.location.href = "playlist.html";

    }

});