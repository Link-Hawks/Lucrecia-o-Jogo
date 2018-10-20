/*
 * Gamepad API Test
 * Written in 2013 by Ted Mielczarek <ted@mielczarek.org>
 *
 * To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty.
 *
 * You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
 */
var haveEvents = 'GamepadEvent' in window;
var controllers = {};
var tempCiclo;

function connecthandler(e) {
  addgamepad(e.gamepad);
}
function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad;   
}

function disconnecthandler(e) {
  removegamepad(e.gamepad);
}

function removegamepad(gamepad) {
  delete controllers[gamepad.index];
}

function updateStatus() {
  scangamepads();
  if(controllers[0].buttons[0].pressed){
    player1.golpes("chute");
  }
  if(controllers[0].buttons[1].pressed){   
    player1.golpes("defesa");   
  }
  if(controllers[0].buttons[2].pressed){    
    player1.movimentacao("cima",player2)     
  }
  if(controllers[0].buttons[3].pressed){
    player1.golpes("soco");       
  }
  if(controllers[0].buttons[4].pressed){
    player1.golpes("golpeEspecial1");     
  }
  if(controllers[0].buttons[6].pressed)
  player1.golpes("golpeEspecial2"); 

  if(controllers[0].buttons[9].pressed){
    console.log("apertou")
    iniciou = true;
  }

  if(controllers[0].axes[0] == 1)
    player1.movimentacao("direita",player2)
  else if(controllers[0].axes[0] == -1){
    player1.movimentacao("esquerda",player2);
  }
  if(controllers[0].axes[1] == 1)
    player1.movimentacao("baixo",player2)
  else if(controllers[0].axes[1] == -1)
    player1.movimentacao("cima",player2)









    if(controllers[1].buttons[0].pressed){
      player2.golpes("chute");
    }
    if(controllers[1].buttons[1].pressed){   
      player2.golpes("defesa");   
    }
    if(controllers[1].buttons[2].pressed){    
      player2.movimentacao("cima",player1)     
    }
    if(controllers[1].buttons[3].pressed){
      player2.golpes("soco");       
    }
    if(controllers[1].buttons[4].pressed){
      player2.golpes("golpeEspecial1");     
    }
    if(controllers[1].buttons[6].pressed)
    player2.golpes("golpeEspecial2"); 

    
    if(controllers[1].buttons[9].pressed)
      iniciou = true;

    if(controllers[1].axes[0] == 1)
      player2.movimentacao("direita",player1)
    else if(controllers[1].axes[0] == -1){
      player2.movimentacao("esquerda",player1);
    }
    if(controllers[1].axes[1] == 1)
      player2.movimentacao("baixo",player1)
    else if(controllers[1].axes[1] == -1)
      player2.movimentacao("cima",player1)


    var player1BotaoApertado = (controllers[0].buttons[0].pressed || controllers[0].buttons[1].pressed || controllers[0].buttons[2].pressed || controllers[0].buttons[3].pressed || controllers[0].buttons[4].pressed || controllers[0].axes[1] == 1);
    var player2BotaoApertado = (controllers[1].buttons[0].pressed || controllers[1].buttons[1].pressed || controllers[1].buttons[2].pressed || controllers[1].buttons[3].pressed || controllers[1].buttons[4].pressed || controllers[1].axes[1] == 1)


    if(ciclo - tempCiclo>=4 ){
      if(!player1BotaoApertado)
        player1.retornarEstado(player1.soco); 
    if(!player2BotaoApertado)
        player2.retornarEstado(player2.soco);
      tempCiclo = ciclo;
    }
  }

function scangamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
 
  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      if (!(gamepads[i].index in controllers)) {
        addgamepad(gamepads[i]);
      } else {
        controllers[gamepads[i].index] = gamepads[i];
      }
    }
  }
}

if (haveEvents) {
  window.addEventListener("gamepadconnected", connecthandler);
  window.addEventListener("gamepaddisconnected", disconnecthandler);
} else {
  setInterval(scangamepads, 500);
}
