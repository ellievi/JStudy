export default class Hours{
    constructor(){
        this.today = new Date();
    }

    getHour = () => this.today.getHours()
}