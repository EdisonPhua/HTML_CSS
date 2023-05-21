class person {
    name: string
    city : string
    age : number
    constructor(name: string, city : string ,age : number ){
        this.name =  name;
        this.age = age;
        this.city = city;
    }
}
//Alternative to class using public
class person1{
    constructor(
        public name:string, 
        public city:string, 
        public age:string){

    }
}