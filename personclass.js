class Elisama {
    props = {};
    constructor(props) {
      this.props = props;
    }
    
    getProps = () => this.props;
    
    getAge = () => this.props.age;
  }
  const ElisamaInstance = new Elisama({age: 19, city: 'Recife'});
  undefined
  ElisamaInstance
  Elisama {props: {…}, getProps: ƒ, getAge: ƒ}getAge: () => this.props.agelength: 0name: "getAge"arguments: (…)caller: (…)[[FunctionLocation]]: VM62:9[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]getProps: () => this.propslength: 0name: "getProps"arguments: (…)caller: (…)[[FunctionLocation]]: VM62:7[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]props: {age: 19, city: 'Recife'}age: 19city: "Recife"[[Prototype]]: Object[[Prototype]]: Object
  ElisamaInstance.getProps()
  {age: 19, city: 'Recife'}age: 19city: "Recife"[[Prototype]]: Object
  ElisamaInstance.getAge()
  19
  Elisama.getAge()
  VM276:1 Uncaught TypeError: Elisama.getAge is not a function
      at <anonymous>:1:9
  (anônimo) @ VM276:1
  ElisamaInstance.getAge()
  19
  ElisamaInstance instanceof Elisama
  true
  const ElisamaOldInstance = new Elisama({age: 30, city: "Rio de Janeiro"})
  undefined
  ElisamaOldInstance.getAge()
  30
  ElisamaInstance.getAge()
  19
  ElisamaOldInstance instanceof Elisama
  true
  ElisamaOldInstance instanceof ElisamaInstance