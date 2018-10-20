
    //Captura o canvas e o contexto do canvas, para podermos desenhar na tela
    let cnv = document.querySelector("canvas");
    let ctx = cnv.getContext("2d");
    

    let prestart = new Image();
    prestart.src = "giphy.gif";
    prestart.width = 700;
   // window.onload = ()=> init();
    //Define os personagens
    var iniciou;
    
    let botoes = new Teclas();

   
    


    var start = new Image();
    start.src = "start.png";

    var start2 = new Image();
    start2.src = "start2.png";

    var mortoEsquerda= new Image();
    mortoEsquerda.src = "img/Player2/mortoEsquerda.png";

    var mortoDireita= new Image();
    mortoDireita.src = "img/Player2/mortoDireita.png";

    var mortoEsquerda1= new Image();
    mortoEsquerda1.src = "img/Player1/mortoEsquerda.png";

    var mortoDireita1= new Image();
    mortoDireita1.src = "img/Player1/mortoDireita.png";



    vitoriaBolsoMito = new Image();
    vitoriaBolsoMito.src = "mito.png";
    
    var tocarMorte;
    var tocarIniciou;
    
    var morreu = document.createElement("audio");
    morreu.setAttribute("src","morreu.mp3");
    var i;
    var contador3;
    var bgm = document.createElement("audio");
    bgm.setAttribute("src","Guren.mp3");

    
    var startMP3 = document.createElement("audio");
    var intervalo = 14;

    let player1; 
    let player2;  
    let interfacea; 
    var ciclo;
    
    
       
    function init(){
        player1 = new Personagem("Player 1",40,100,new Sprites("player1","socoEsticadoDireita","socoEsticadoEsquerda"),3,150,155,"direita");
        player2 = new Personagem("Player 2",50,113,new Sprites("player2","socoEsticadoDireita","socoEsticadoEsquerda"),3,350,140,"esquerda");
        interfacea = new Interface("background");
        ciclo = 0;
        document.querySelector("#carregar").setAttribute("style","display:none");
        window.addEventListener("keydown",(e)=>botoes.teclaApertada(e.keyCode));
        window.addEventListener("keyup",(e)=>botoes.teclaSolta(e.keyCode));
        startMP3.setAttribute("src","start.mp3");
        startMP3.loop = true;
        startMP3.volume = 0.3;
        startMP3.play();
        startMP3.currentTime = 0;
        i =0;
        tempCiclo = 0;
        bgm.currentTime = 0;
        contador3 = 0;
        tocarMorte = true;
        tocarIniciou = true;
        iniciou = false;
        loop();
        
    }

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
        interfacea.drawInterface();
        player1.draw();
        player2.draw();   
    }

    function loop(){
        if(!iniciou){   
            if(Math.floor(contador3/18)%2 == 0){
                ctx.clearRect(0,0,cnv.width,cnv.height);
                ctx.drawImage(start,0,-50);  
            }else{
                ctx.clearRect(0,0,cnv.width,cnv.height);
                ctx.drawImage(start2,0,-50);
            }
            updateStatus();           
            contador3++;
            window.requestAnimationFrame(loop,cnv);
        }else{
            if(tocarIniciou){
                startMP3.pause();
                bgm.play();
            }
            if(player1.hp > 0 && player2.hp > 0 && interfacea.tempo>0){
        
                update();
                draw();
                window.requestAnimationFrame(loop,cnv);
            }else if(player2.hp <= 0 && i<=80){ 
                bgm.pause();
                i++;
                ctx.clearRect(0,0,cnv.width,cnv.height);
                interfacea.drawInterface();
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
            }else if(player1.hp <= 0 && i<=140){    
                bgm.pause();
                i++;
                ctx.clearRect(0,0,cnv.width,cnv.height);
                interfacea.drawInterface();
                if(tocarMorte){     
                    morreu.play()
                    tocarMorte = false;
                }
                if(i>30)
                    player2.spriteDraw = vitoriaBolsoMito;
                player2.draw();
                if(player1.posicaoEsquerda){
                    player1.spriteDraw  = mortoEsquerda1;
                }
                else{
                    player1.spriteDraw = mortoDireita1;
                }
                player1.draw();
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
                },1000)
                setTimeout(()=>document.querySelector("#carregar").removeAttribute("style"),2000);
            }
    }
    }