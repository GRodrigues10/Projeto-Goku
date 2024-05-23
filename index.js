document.addEventListener("DOMContentLoaded", function() {
    var backgroundMusic = document.getElementById("backgroundMusic");
    var gokuAudio = document.getElementById("ola"); // Selecionando o elemento de áudio do Goku
    var startButton = document.getElementById("startButton");
    var hiddenText = document.querySelector("header > h1");
    var downloadButton = document.querySelector("main > button");
    var img = document.querySelector("img");

    // Esconder texto "Parabéns Miguel", imagem do Goku e botão "Baixar Jogo Maneiro"
    hiddenText.style.display = "none";
    hiddenText.style.animationPlayState = "paused"; // Pausar a animação inicialmente
    img.style.display = "none";
    img.style.animationPlayState = "paused"; // Pausar a animação inicialmente
    downloadButton.style.display = "none";

    // Adicionar evento de clique ao botão de iniciar
    startButton.addEventListener("click", function() {
        backgroundMusic.play(); // Iniciar a primeira música
        gokuAudio.play(); // Iniciar o áudio do Goku
        
        
        hiddenText.style.display = "block"; // Exibir o texto "Parabéns Miguel"
        hiddenText.style.animationPlayState = "running"; // Iniciar a animação do texto
        img.style.display = "block"; // Exibir a imagem do Goku
        img.style.animationPlayState = "running"; // Iniciar a animação da imagem do Goku
        downloadButton.style.display = "block"; // Exibir o botão "Baixar Jogo Maneiro"
        startButton.style.display = "none"; // Esconder o botão de iniciar
    });
});

function baixar() {
    // Redirecionar para a página do jogo
    window.open("https://www.transfernow.net/dl/20240523WdTeIwbZ", "_blank");
}