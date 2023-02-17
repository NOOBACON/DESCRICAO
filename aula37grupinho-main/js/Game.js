//classe Game
class Game {
  //método de construção 
  constructor() { }

  //pegar estado de jogo do banco
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  //atualizar estado de jogo no banco
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  //quando começa
  start() {
    //criar um objeto player
    player = new Player();
    //pegar essa informação do banco através do método
    playerCount = player.getCount();

    //criar um objeto formulário
    form = new Form();
    //chama o método para exibir
    form.display();

    //sprites dos carros
    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    //guardando carros na matriz
    cars = [car1, car2];
  }

  //manipulação de elementos
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //quando der play no jogo
  play() {
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6)
      drawSprites();
    }
  }
}
