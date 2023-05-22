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
// This receives a input of type 'T' and returns the type 'T' as well
// Can you used to 'convert' to different types and preserves types
function generrics<T,>(input : T): T {
    return input
}
const generrics1 = <T,>(input : T): T => {
    return input
}
