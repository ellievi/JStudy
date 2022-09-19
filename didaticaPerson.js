class Elisama {
    props = {};
    constructor(props) {
      this.props = props;
    }
    
    getProps = () => this.props;
    
    getAge = () => this.props.age;
  }
  const ElisamaInstance = new Elisama({age: 19, city: 'Recife'});

  ElisamaInstance.getProps()
  ElisamaInstance.getAge()
  
  Elisama.getAge()
  
  ElisamaInstance.getAge()

  const ElisamaOldInstance = new Elisama({age: 30, city: "Rio de Janeiro"})
  undefined
  ElisamaOldInstance.getAge()
  
  ElisamaInstance.getAge()
  
  ElisamaOldInstance instanceof Elisama
  true
  ElisamaOldInstance instanceof ElisamaInstance