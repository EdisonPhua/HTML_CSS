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

//Interfaces are similar to types but with some differences. SUch as, reopening, inheritance
//reopening

interface before {
    name : string,
    email : string,
    purhcase : boolean
}
interface before {
    month : number
}

//inheritance 
interface after extends before{
    year : number
}



//Narrowing used to detectTypes 'Type Guards'
interface user {
    name : string,
    email : string,
}
interface admin {
    name :string,
    email : string,
    isAdmin : boolean
}
//Checks to see if the variable 'value' contains 'isadmin' which indirectly 
//confirms whether or not 'value' is of tpye admin or user
function adminchecker(value: user | admin) {
    if ("isAdmin" in value){
        return value.isAdmin
    }
}