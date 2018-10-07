
    //Captura o canvas e o contexto do canvas, para podermos desenhar na tela
    let cnv = document.querySelector("canvas");
    let ctx = cnv.getContext("2d");

    //Define os personagens
    var iniciou = false;
    
    let botoes = new Teclas();

    var startMP3 = document.createElement("audio");
    startMP3.setAttribute("src","start.mp3");
    startMP3.play();
    
    var start = new Image();
    start.src = "start.png";
    var mortoEsquerda= new Image();
    mortoEsquerda.src = "img/Player2/mortoEsquerda.png";
    var mortoDireita= new Image();
    mortoDireita.src = "img/Player2/mortoDireita.png";
    var tocarMorte = true;
    var tocarIniciou = true;
    
    var morreu = document.createElement("audio");
    morreu.setAttribute("src","morreu.mp3");
    var i = 0;
    var bgm = document.createElement("audio");
    bgm.setAttribute("src","Guren.mp3");
    var intervalo = 14;
    window.addEventListener("keydown",(e)=>botoes.teclaApertada(e.keyCode));
    window.addEventListener("keyup",(e)=>botoes.teclaSolta(e.keyCode));
    window.addEventListener("key", () => console.log("soco"));
    let player1 = new Personagem("lucrecia",110,120,new Sprites("player1","socoEsticadoDireita","socoEsticadoEsquerda"),3,150,155,"direita");
    let player2 = new Personagem("rosivaldo",60,120,new Sprites("player2"),3,350,150,"esquerda");
    let interface = new Interface("background");
    let ciclo = 0;
    loop();
       
    function update(){  
        updateStatus();
        if(player1.golpeSoco)
            player2.checarDano(player1);
        if(player2.golpeSoco)
            player1.checarDano(player2);  
        if(player1.golpeEspecial1)
            player2.checarDano(player1);  
        if(player2.golpeEspecial1)
            player1.checarDano(player2);  
    }
    
    function draw(){
        ctx.clearRect(0,0,cnv.width,cnv.height);        
        interface.drawInterface();
        player1.draw();
        player2.draw();   
    }

    function loop(){
        if(!iniciou){              
            ctx.drawImage(start,0,-50); 
            updateStatus();
            window.requestAnimationFrame(loop,cnv);
        }else{
            if(tocarIniciou){
                startMP3.pause();
                bgm.play();
            }
        if(player1.hp > 0 && player2.hp > 0 && interface.tempo>0){
    
            update();
            draw();
            window.requestAnimationFrame(loop,cnv);
        }else if(player2.hp <= 0 && i<=80){
            i++;
            ctx.clearRect(0,0,cnv.width,cnv.height);
            interface.drawInterface();
            if(tocarMorte){
                morreu.play()
                tocarMorte = false;
            }
            player1.draw();
            if(player2.posicaoEsquerda)
                player2.spriteDraw  = mortoEsquerda;
            else
                player2.spriteDraw = mortoDireita;
            player2.draw();
            window.requestAnimationFrame(loop,cnv);
        }
        else{
            
            bgm.pause();
            var gameover = new Image();
            gameover.src = "gameover.png";
            setTimeout(()=>    {
                ctx.clearRect(0,0,cnv.width,cnv.height);
                ctx.drawImage(gameover,-60,-60);
                var died = document.createElement("audio");
                died.setAttribute("src","died.mp3");
                died.play()
            },200)
        }
    }
    }