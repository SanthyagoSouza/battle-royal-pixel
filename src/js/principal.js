    function startGame() {
      const loadingText = document.getElementById("loading");
      const sound = document.getElementById("clickSound");

      // Som engraçado
      if (sound) sound.play();

      loadingText.style.display = "block";

      // Simula carregamento e depois redireciona (muda pra sua tela real depois)
      setTimeout(() => {
        window.location.href = "solo-game.html"; // ou a tela que você quiser
      }, 2000);
    }