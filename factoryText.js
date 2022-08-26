class Car {
  // constrói a classe com os atributos indicados
  constructor(model, color, inch) {
    this.color = color;
    this.model = model;
    this.inch = inch;
    this.isRunning = false;
  }
  // ativa a corrida do carro
  run() {
    this.isRunning = true;
  }
  // Desativa a corrida do carro
  stop() {
    this.isRunning = false;
  }
  // Método getInfo() retorna todas as informações contidas no objeto abaixo
  getInfo() {
    return {
      color: this.color,
      model: this.model,
      inch: this.inch,
      isRunning: this.isRunning,
    };
  }
}
// Factory com função nomeada
const makeCarForteenInch = function makeCar(model, color) {
  // retorna nova instância de Car com os atributos predifinidos
  return new Car(model, color, 14);
}
// Factory com arrow function
const makeBlackCarThirteenInch = (model) => new Car(model, 'black', 13);
// cria instância de Car com a factory
const Porsche = makeCarForteenInch('porsche', 'rosa');
// cria instância de Car com a factory
const Fusca = makeCarForteenInch('fusca', 'preto');
// cria instância de Car com a factory
const Palio = makeBlackCarThirteenInch('palio');
// cria instância de Car com a factory
const Gol = makeBlackCarThirteenInch('gol');
Fusca.getInfo(); // estado inicial criado na instancia
Fusca.run(); // correr
Fusca.getInfo(); // andando
Fusca.stop(); // parar
Fusca.getInfo(); // parado
console.log(Fusca.getInfo())