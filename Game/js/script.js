
    //Captura o canvas e o contexto do canvas, para podermos desenhar na tela
    let cnv = document.querySelector("canvas");
    let ctx = cnv.getContext("2d");

    //Define os personagens
    
    let botoes = new Teclas();
    window.addEventListener("keydown",(e)=>botoes.teclaApertada(e.keyCode));
    window.addEventListener("keyup",(e)=>botoes.teclaSolta(e.keyCode));
    let player1 = new Personagem("lucrecia",110,120,new Sprites("player1","socoEsticadoDireita"),3,350,150,"esquerda");
    let player2 = new Personagem("rosivaldo",60,120,new Sprites("player2"),3,150,140,"direita");
    let interface = new Interface("background");
    let ciclo = 0;
    loop();
       
    function update(){  
        if(player1.golpeSoco)
            player2.checarDano(player1);
        if(player2.golpeSoco)
            player1.checarDano(player2);     
    }
    
    function draw(){
        ctx.clearRect(0,0,cnv.width,cnv.height);
        interface.drawInterface();
        player1.draw();
        player2.draw();
    }

    function loop(){
        update();
        draw();
        window.requestAnimationFrame(loop,cnv);
    }