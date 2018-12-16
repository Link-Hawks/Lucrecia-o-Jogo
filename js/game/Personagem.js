 class Personagem {

    constructor(nome,largura,altura,sprites,velocidade,xInicial,yInicial,posInicial) {
        this.nome = nome;
        this.largura = largura;
        this.larguraInicial = largura;
        this.altura = altura;
        this.sprite = sprites;
        this.spriteDraw = new Image();
        this.yInicial = yInicial;
        this.x = xInicial;
        this.y = yInicial;
        this.xTemp = this.x;
        this.apertadoSoco = true;
        if(posInicial == "direita"){
            this.posicaoDireita = true;
            this.spriteDraw = this.sprite.direita;
        }else if(posInicial == "esquerda"){
            this.posicaoEsquerda = true;
            this.spriteDraw = this.sprite.esquerda;
        }
        this.speed = velocidade;
        this.hp = 100;
        this.cor = "#fff";
        this.draw();
    }
    
    checaColisao(Colidivel,posicao){
        let colisaoCanvasEsquerda = this.x-this.speed<0;
        let colisaoCanvasDireita = this.x+this.largura+this.speed>cnv.width;
        
        if(posicao == "canvas"){
            return colisaoCanvasEsquerda || colisaoCanvasDireita;
        }

        if(posicao == "canvasEsquerda"){
            return colisaoCanvasEsquerda;
        }
        if(posicao == "canvasDireita"){
            return colisaoCanvasDireita;
        }

        if(posicao == "direita"){
            console.log(Colidivel.x+"Valor de X");
            console.log(Colidivel.xTemp+"Valor de XTemp");
            let colisaoDireita = this.x+this.largura+this.speed>=Colidivel.xTemp && Colidivel.xTemp>this.x;
            return colisaoDireita || colisaoCanvasDireita;
        }

        if(posicao == "esquerda" ){
            let colisaoEsquerda = this.x-this.speed<=Colidivel.x+Colidivel.largura && Colidivel.x<this.x;
            return colisaoEsquerda || colisaoCanvasEsquerda;
        }
    }

    aproximaMovimentacao(){
        
    }

    checarDano(Inimigo){
        let inimigoDireita = Inimigo.xTemp > this.x && Inimigo.x<this.x+this.largura && Inimigo.posicaoEsquerda;
        let inimigoEsquerda = Inimigo.x+Inimigo.largura>this.x && Inimigo.x<this.x && Inimigo.posicaoDireita;
        if(Inimigo.apertadoSoco && (inimigoDireita||inimigoEsquerda)){
           
            if(inimigoDireita && (Inimigo.golpeEspecial1 || Inimigo.golpeSoco || Inimigo.golpeChute)){
                console.log(`acertou player ${this.nome}`)
                if(!this.defesa){
                    this.hp-=5;
                }
                    console.log("personagem"+this.nome+"xtemp: "+this.xTemp)
                    if(!this.checaColisao(null,"canvasEsquerda")){
                        if(this.golpeEspecial1)           
                            this.xTemp = this.x-60; 
                        else if(this.golpeSoco || this.golpeChute)   
                            this.xTemp = this.x-11; 
                        else if(this.posicaoDireita && Inimigo.golpeEspecial1)    
                            this.x = Inimigo.x-Inimigo.largura;
                        else if(this.posicaoEsquerda && Inimigo.golpeEspecial1)
                            this.xTemp = Inimigo.x-Inimigo.largura;
                        else if(this.posicaoEsquerda){
                            this.x = this.xTemp-20
                            this.xTemp = this.x;
                        }
                        else
                            this.x = this.x-10
                        
                    }
                         
            }else if(inimigoEsquerda && (Inimigo.golpeEspecial1 || Inimigo.golpeSoco || Inimigo.golpeChute)){
               
                if((!this.defesa && !(this.posicaoBaixo && Inimigo.golpeSoco)) || (Inimigo.golpeChute && this.posicaoBaixo) ){
                    this.hp-=5;
                }                
                if(!this.checaColisao(null,"canvasDireita")){
                    if(this.golpeSoco || this.golpeChute)     
                        this.x = this.x+18; 
                    else if (this.golpeEspecial1)
                        this.x = this.x+18
                    else if(Inimigo.golpeEspecial1)
                        this.x = Inimigo.x+145; //145 é o tamanho do golpe especial
                    else
                        this.x = this.x+5

                    this.xTemp = this.x;
                    console.log(this.nome+" || ")
                }
            }

            
            var audio = document.createElement("audio");
            audio.setAttribute("src","Musics/punch.mp3");
            audio.play();
            
            Inimigo.apertadoSoco = false;

        }
    }

    zeraPosicao(){
        this.posicaoDireita = false;
        this.posicaoEsquerda = false;
        this.posicaoBaixo = false;        
        this.posicaoCima = false;
    }

    movimentacao(orientacao,Colidivel){

        if(orientacao == "direita"&& !this.golpeSoco && !this.golpeEspecial1 ){
            this.zeraPosicao();
            this.posicaoDireita = true;
            if(!this.posicaoBaixo)
                this.spriteDraw = this.sprite.direita;
                if(!this.checaColisao(null,"canvasDireita")){
                    this.x+=this.speed;
                    this.xTemp = this.x;
                }
           
            
        }
        if(orientacao == "esquerda" && !this.golpeSoco  && !this.golpeEspecial1){
            this.zeraPosicao();
            this.posicaoEsquerda = true;           
            this.spriteDraw = this.sprite.esquerda;
            if(!this.checaColisao(null,"canvasEsquerda")){
                this.x-=this.speed;
                this.xTemp = this.x;
            }
        }
        if(orientacao == "baixo"){
            this.posicaoBaixo = true;            
            this.spriteEsquerdaDireita(this.sprite.baixoDireita.src,this.sprite.baixoEsquerda.src); 
            
        }
        if(orientacao == "cima" && !this.golpeEspecial1){
            this.posicaoCima = true;  
           if(this.y-this.speed>100 && !this.caindo){
                this.y-=this.speed;
           }else{
               this.caindo = true;''
           } 
            this.spriteEsquerdaDireita(this.sprite.puloDireita.src,this.sprite.puloEsquerda.src);  
        }
    }

    desce(){
        if(this.y<this.yInicial){    
            this.y+=this.speed;
        }
    }

    retornaIntervalo(){
        let intervalo2 = 71;
        if(this.x==this.xTemp-intervalo2)
            intervalo2 = 0;  
        if(this.posicaoEsquerda)
            this.x-=intervalo2; 
    }

    golpes(golpe){
        if(golpe == "soco" && !this.golpeEspecial1){
            this.golpeSoco = true;   
            this.spriteEsquerdaDireita(this.sprite.socoDireita.src,this.sprite.socoEsquerda.src);  
            if(this.posicaoEsquerda){                
                let intervalo=19;
                if(this.x=this.xTemp-intervalo)
                    intervalo = 0;            
                this.x-=intervalo;
                this.largura = this.sprite.socoEsquerda.width-25;
            }else
                this.largura = this.sprite.socoDireita.width-16;            
        }
        if(golpe == "golpeEspecial1" && !this.golpeSoco){
            this.golpeEspecial1 = true;
            this.spriteEsquerdaDireita(this.sprite.golpeEspecial1Direita.src,this.sprite.golpeEspecial1Esquerda.src);  
            this.retornaIntervalo();
        
        }

        if(golpe == "golpeEspecial2"){
            this.golpeEspecial2 = true;
            this.spriteEsquerdaDireita(this.sprite.golpeEspecial2.src);    
        }

        if(golpe == "chute"){
            this.golpeChute = true;
            this.spriteEsquerdaDireita(this.sprite.chuteDireita.src,this.sprite.chuteEsquerda.src);           
           
        }
        if(golpe == "defesa"){
            this.defesa = true;
            this.spriteEsquerdaDireita(this.sprite.defesaDireita.src,this.sprite.defesaEsquerda.src);
            
        }

        this.desce();
    }

    spriteEsquerdaDireita(direita,esquerda){
        if(this.posicaoDireita){
            this.spriteDraw.src = direita;
        }else if(this.posicaoEsquerda){
            this.spriteDraw.src = esquerda;
        }
    }

    cai(){
        if(this.y<this.yInicial && (this.caindo || !this.posicaoCima)){
            console.log(this.y);
            this.y+=6;
        }else{
            this.caindo = false;
        }
    }

    retornarEstado(golpeSolto){
        golpeSolto = false;
        this.golpeSoco = false;
        if(this.posicaoDireita && !this.posicaoCima)
            this.spriteDraw = this.sprite.direita;
        else if (this.posicaoEsquerda  && !this.posicaoCima){
            this.x=this.xTemp;
            this.spriteDraw = this.sprite.esquerda;
        }
        this.apertadoSoco = true;
        this.defesa = false;
        this.golpeEspecial1 = false;
        this.posicaoCima = false;
        this.posicaoBaixo = false;
        this.golpeChute = false;
        this.cai();
    }
   
    draw(){       
        if(!this.golpeSoco){
            this.largura = this.larguraInicial;
        }
        if(this.golpeEspecial1){
            this.largura = this.spriteDraw.width;
        }
        ctx.drawImage(this.spriteDraw,this.x,this.y,this.spriteDraw.width,this.spriteDraw.height);
        ctx.strokeStyle = `#000`;
       // ctx.strokeRect(this.x,this.y,this.largura,this.altura);
        ctx.fillStyle = this.cor;
        //ctx.fillText(`x: ${this.x}`,this.x,this.y-7);
        //ctx.fillText(`y: ${this.y}`,this.x,this.y-20);
        
    }

}
