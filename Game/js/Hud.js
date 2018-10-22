class Hud{
    constructor(){
        this.HPlargura = 180;
        this.HPaltura = 20;
    }

    drawHPJogador(player,xTexto,yTexto,xBarra,yBarra){
        ctx.beginPath();
        ctx.fillStyle=`#FFF`;
        ctx.fillText(`${player.nome}: ${(player.hp>=0?player.hp:0)}`,xTexto,yTexto);
        ctx.strokeRect(xBarra,yBarra,this.HPlargura,this.HPaltura);
        ctx.fillStyle=`#000`;
        ctx.fillRect(xBarra,yBarra,this.HPlargura,this.HPaltura);
        ctx.fillStyle=`rgb(255, ${Math.floor(255*(player.hp/100))}, 34)`;
        ctx.rect(xBarra,yBarra,180*player.hp/100,this.HPaltura);
        ctx.fill();
    }
}