// class FoodList{
//     constructor(info){
//         this.fruitList = [info.fruitList];
//     }
//     addFood = `${this.fruitList[info.fruitList]}`
// }
// const foodInstanceFruits = new FoodList(['Apple','Grape','Tomato'])
// console.log(foodInstanceFruits.addFood())

class FoodList{
    constructor(info){
        this.fruitList = [info.fruitList];
    }
}
const foodInstanceFruits = [new FoodList('Apple'), new FoodList('Tomato'), new FoodList('Grape')]
console.log(foodInstanceFruits)
