export default class Names{
    constructor(info){
        this.name = info.name;
    }
    
    userName = () => `${this.name}`;
};