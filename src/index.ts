// Basic Types
let id:number = 5
let fisrtName:string = 'Amin'
let isPublished:boolean = true
let x:any = 5
let age: number
age = 30

let ids : number [] = [1,2,3,4,5]
let arr : any[] = [1,'hi', true]

// Tuple
let person : [number , string, boolean] = [30, 'Amin', true]

//Tuple Array
let employee : [number, string][]

employee = [
    [1, 'Amin'],
    [2, 'John'],
    [3, 'Jane'],
]

//Union
let pid : number | string

pid = 22
pid = "22"

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
} 
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
} 

console.log(Direction1.Up);
console.log(Direction2.Left);

// Objects
const user : {
    id : number,
    name : string
} = {
    id : 1,
    name : 'Amin'
}

type User = {
    id: number
    name : string
}
const user2 : User = {
    id : 1,
    name : 'Amin'
}

// Type Assertion

let cid : any = 1
//let customerId = <number>cid
let customerId = cid as number

//Functions
function addNum(x : number, y:number) : number {
    return x + y
}

console.log(addNum(2,3));

// Void
function log(message : string|number) : void{
    console.log(message);
}

log("message")

// Interfaces
interface UserInterface{
    readonly id: number
    name : string
    age?: number
}
const userInt : UserInterface = {
    id : 1,
    name : 'Amin'
}

interface MatchFunc{
    (x:number , y: number) : number
}

const add : MatchFunc = (x:number , y:number) : number => x + y 
const sub : MatchFunc = (x:number , y:number) : number => x - y 




interface PersonInterface{
    id: number
    name : string
    registered(): string
}
// Classes
class Person implements PersonInterface {
    id : number
    name : string

    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }

    registered(){
        return `${this.name} is registered`
    }
}

const amin = new Person(1,'Amin Mirzapour')
const hidi = new Person(2,'Hidi Ghafouri')
console.log(amin.registered());
console.log(amin, hidi);

//subclass
class Employee extends Person{
    position : string

    constructor(id:number, name:string , position:string){
        super(id,name)
        this.position = position
    }
}

const emp1 = new Employee(1,'Akbar','Manager')
console.log(emp1);

// Generics

function getArray<T>(items : T[]): T[]{
    return new Array().concat(items)
}

const numArray = getArray<number>([1,2,3,4])
const strArray = getArray<string>(['ashtar','akbar','asghar'])

// numArray.push('s')