export default class Hours{
    constructor(){
        this.today = new Date('2022-10-05 05:20:01');
    }

    getHour = () => this.today.getHours()
}

// EXPORT OBJETO