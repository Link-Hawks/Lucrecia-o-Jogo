class Personagem {

    constructor(nome,largura,altura,sprites,velocidade,xInicial,yInicial,posInicial) {
        this.nome = nome;
        this.largura = largura;
        this.altura = altura;
        this.sprite = sprites;
        this.spriteDraw = new Image();
        this.x = xInicial;
        this.y = yInicial;
        this.xTemp = this.x;
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
            let colisaoDireita = this.x+this.largura+this.speed>=Colidivel.x && Colidivel.x>this.x;
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
        let inimigoDireita = Inimigo.x > this.x && Inimigo.x<this.x+this.largura;
        let inimigoEsquerda = Inimigo.x+Inimigo.largura>this.x && Inimigo.x<this.x;
        if(inimigoDireita){
            this.hp-=5;
            if(this.checaColisao(Inimigo,"direita"))
                this.x = Inimigo.x+Inimigo.largura+1;           
        }else if(inimigoEsquerda ){
            this.hp-=5; 
            if(this.checaColisao(Inimigo,"esquerda")){
                this.x = Inimigo.x+Inimigo.largura+1; 
                console.log(this.nome+" || ")
            }
        }
        if(inimigoDireita || inimigoEsquerda){
            
            var audio = document.createElement("audio");
            audio.setAttribute("src","punch.mp3");
            audio.play();
        }

        //Temporario
        if(this.hp<=0){
            this.hp = 0;
        }
        
        
    }

    zeraPosicao(){
        this.posicaoDireita = false;
        this.posicaoEsquerda = false;
        this.posicaoBaixo = false;        
        this.posicaoCima = false;
    }

    movimentacao(orientacao,Colidivel){

        if(orientacao == "direita"){
            this.zeraPosicao();
            this.posicaoDireita = true;
            this.spriteDraw = this.sprite.direita;
            if(!this.checaColisao(Colidivel,"direita")){
                this.cor = "#fff";
                this.x+=this.speed;
                this.xTemp = this.x;
                
            }else{
                this.cor = "firebrick";
            }
            
        }
        if(orientacao == "esquerda"){
            this.zeraPosicao();
            this.posicaoEsquerda = true;           
            this.spriteDraw = this.sprite.esquerda;
            if(!this.checaColisao(Colidivel,"esquerda")){
                this.cor = "#fff";
                this.x-=this.speed;
                this.xTemp = this.x;
            } else{
                this.cor = "firebrick";
            }
        }
        if(orientacao == "baixo"){
            this.posicaoBaixo = true;            
            this.spriteEsquerdaDireita(this.sprite.baixoDireita.src,this.sprite.baixoEsquerda.src); 
            
        }
        if(orientacao == "cima"){
            this.posicaoCima = true;            
            this.spriteEsquerdaDireita(this.sprite.puloDireita.src,this.sprite.puloEsquerda.src);  
        }
    }

    
    golpes(golpe){
        if(golpe == "soco"){
            this.golpeSoco = true;            
            this.spriteEsquerdaDireita(this.sprite.socoDireita.src,this.sprite.socoEsquerda.src);  
            if(this.posicaoEsquerda && this.golpeSoco){
                let intervalo=Math.abs(this.largura-74);
                if(intervalo == 60)
                    intervalo = 0;
                this.x-=intervalo;
            }
        }
        if(golpe == "golpeEspecial1"){
            this.golpeEspecial1 = true;
            this.spriteEsquerdaDireita(this.sprite.golpeEspecial1.src);  
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
    }

    spriteEsquerdaDireita(direita,esquerda){
        if(this.posicaoDireita){
            this.spriteDraw.src = direita;
        }else if(this.posicaoEsquerda){
            this.spriteDraw.src = esquerda;
        }
    }

    retornarEstado(golpeSolto){
        golpeSolto = false;
        if(this.posicaoDireita)
            this.spriteDraw = this.sprite.direita;
        else if (this.posicaoEsquerda){
            this.x=this.xTemp;
            this.spriteDraw = this.sprite.esquerda;
        }
    }
   
    draw(){        
        this.largura = this.spriteDraw.width;
        this.altura = this.spriteDraw.height;     
        ctx.drawImage(this.spriteDraw,this.x,this.y,this.largura,this.altura);
        ctx.strokeStyle = "#000";
        ctx.strokeRect(this.x,this.y,this.spriteDraw.width,this.spriteDraw.height);
        ctx.fillStyle = this.cor;
        ctx.fillText("x: "+this.x,this.x,this.y-7);
        ctx.fillText("y: "+this.y,this.x,this.y-20);
        
    }

}
