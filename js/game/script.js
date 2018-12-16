    //Captura o canvas e o contexto do canvas, para podermos desenhar na tela
    let cnv = document.querySelector("canvas");
    let ctx = cnv.getContext("2d");
    
   // window.onload = ()=> init();
    //Define os personagens
    var iniciou;
    
    let botoes = new Teclas();

    var start = new Image();
    start.src = "img/game/interface/start.png";

    var start2 = new Image();
    start2.src = "img/game/interface/start2.png";

    var mortoEsquerda= new Image();
    mortoEsquerda.src = "img/game/player2/mortoEsquerda.png";

    var mortoDireita= new Image();
    mortoDireita.src = "img/game/player2/mortoDireita.png";

    var mortoEsquerda1= new Image();
    mortoEsquerda1.src = "img/game/player1/mortoEsquerda.png";

    var mortoDireita1= new Image();
    mortoDireita1.src = "img/game/player1/mortoDireita.png";

    vitoriaPlayer2 = new Image();
    vitoriaPlayer2.src = "img/game/player2/mito.png";
    
    vitoriaPlayer1 = new Image();
    vitoriaPlayer1.src = "img/game/player1/mito2.png";
    

    var tocarMorte;
    var tocarIniciou;
    
    var morreu = document.createElement("audio");
    morreu.setAttribute("src","Musics/morreu.mp3");
    var i;
    var contador3;
    var bgm = document.createElement("audio");
    bgm.setAttribute("src","Musics/Guren.mp3");

    
    var startMP3 = document.createElement("audio");
    var intervalo = 14;

    let player1; 
    let player2;  
    let interfacea; 
    var ciclo;
    let usandoJoystick;

    function joystick(){
        document.querySelector("#keyboard").setAttribute("style","display:none");
        document.querySelector("#controle").removeAttribute("style");
        usandoJoystick = true;
        scriptJoystick = document.createElement("script");
        scriptJoystick.src = "gamepadtest.js";
        document.body.appendChild(scriptJoystick);
        scriptJoystick.onload = ()=>init();
    }
    
       
    function init(){
        player1 = new Personagem("Player 1",50,100,new Sprites("player1","socoEsticadoDireita","socoEsticadoEsquerda"),3,150,155,"direita");
        player2 = new Personagem("Player 2",50,100,new Sprites("player2","socoEsticadoDireita","socoEsticadoEsquerda"),3,350,155,"esquerda");
        interfacea = new Interface("background");
        ciclo = 0;
        document.querySelector("#joystick").setAttribute("style","display:none");
        document.querySelector("#teclado").setAttribute("style","display:none");
       
        startMP3.setAttribute("src","Musics/start.mp3");
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

        if(!usandoJoystick){ 
            window.addEventListener("keydown",(e)=>botoes.teclaApertada(e.keyCode));
            window.addEventListener("keyup",(e)=>botoes.teclaSolta(e.keyCode));
            window.addEventListener("wheel", ()=>document.querySelector("body").removeAttribute("style"));
            player1.speed = 8;
            player2.speed = 8; 
            document.querySelector("#keyboard").removeAttribute("style");
            document.querySelector("#controle").setAttribute("style","display:none");
            
        }

        loop();
        
    }

    function update(){  
        if(usandoJoystick)
            updateStatus();
        if(player1.golpeSoco)
            player2.checarDano(player1);
        if(player2.golpeSoco)
            player1.checarDano(player2);  
        if(player1.golpeEspecial1)
            player2.checarDano(player1);  
        if(player2.golpeEspecial1)
            player1.checarDano(player2);
        if(player1.golpeChute)
            player2.checarDano(player1);  
        if(player2.golpeChute)
            player1.checarDano(player2);
    }

    function selecionarModo(){
        document.querySelector("#restart").setAttribute("style","display:none");
        document.querySelector("#joystick").removeAttribute("style");
        document.querySelector("#teclado").removeAttribute("style");
    }
    
    function draw(){
        ctx.clearRect(0,0,cnv.width,cnv.height);        
        interfacea.drawInterface(player1,player2);
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
            if(usandoJoystick)
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
                interfacea.drawInterface(player1,player2);
                if(tocarMorte){     
                    morreu.play()
                    tocarMorte = false;
                }
                if(i>30)
                    player1.spriteDraw = vitoriaPlayer1;
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
                interfacea.drawInterface(player1,player2);
                if(tocarMorte){     
                    morreu.play()
                    tocarMorte = false;
                }
                if(i>30)
                    player2.spriteDraw = vitoriaPlayer2;
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
                gameover.src = "img/game/interface/gameover.png";
                setTimeout(()=>    {
                    ctx.clearRect(0,0,cnv.width,cnv.height);
                    ctx.drawImage(gameover,-60,-60);
                    var died = document.createElement("audio");
                    died.setAttribute("src","Musics/died.mp3");
                    died.play()
                },1000)
                setTimeout(()=>document.querySelector("#restart").removeAttribute("style"),2000);
            }
    }
    }