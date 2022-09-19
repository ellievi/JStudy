class Elisama {
    props = {};
    constructor(props) {
      this.props = props;
    }
    // Getting the properties
    getProps = () => this.props;
    // Getting the AGE, which is part of the properties
    getAge = () => this.props.age;
  }
  // Instancying the class Elisama putting the object's attribute
  const ElisamaInstance = new Elisama({age: 19, city: 'Recife'});
  const ElisamaOldInstance = new Elisama({age: 30, city: "Rio de Janeiro"})
  
  // Getting the properties of the class instance
  ElisamaInstance.getProps()
  ElisamaInstance.getAge()
  
  Elisama.getAge()
  
  ElisamaInstance.getAge()


  ElisamaOldInstance.getAge()
  
  ElisamaOldInstance instanceof Elisama