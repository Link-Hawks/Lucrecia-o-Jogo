//Podemos criar ainda outra classe apenas para as fontes, tornando o código mais manutenível.

class Interface{
    constructor(background){
        this._fontePadrao ="12px Arial";
        this._background = new Image();
        this._background.src = "img/"+background+".jpg";
        this.hud = new Hud();
        this._tempo = 60;
    }

    drawContador(){
        this._tempo = 60-Math.floor(ciclo/60);
        if(Math.floor(ciclo/60)<60){
            ciclo++;
        }
        ctx.fillStyle="#e9d700";
        ctx.font="20px Arial";
        ctx.fillText(this._tempo>=10?this._tempo:"0"+this._tempo,(cnv.width/2)-25,35);
    }

    get background(){
        ctx.drawImage(this._background,0,-140,this._background.width,this._background.height);
    }
    
    set background(background){
        this._background = background;
    }

    drawInterface(){
        this.background;
        this.drawContador();
        ctx.font = this._fontePadrao;
        this.hud.drawHPJogador(player2,cnv.width-(11*player2.nome.length),15,cnv.width-200,20);
        this.hud.drawHPJogador(player1,20,15,20,20);
    }

    get tempo(){
        return this._tempo;
    }

}