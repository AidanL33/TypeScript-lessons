//Basic Types
let id: number = 5                                                  //number variable
let company: string = 'Northroom'                                   //string variable
let isPublished: boolean = true                                     //boolean variable
let x: any ='Hello'                                                 //string variable

let ids: number[] = [1,2,3,4,5]                                     //array of number variables
let arr: any[] = [1, true, 'hello']                                 //array of any variables
// ------------------------------------------------------------

//Tuple
let person: [number, string, boolean] = [1, 'aidan', true]          //tuplea are a waay to represent an array with a fixed number of elements whoes type are known, but need not be the same.
//Tuple Array
let employee: [number, string] []                                   //tuple array are arrays that contain tuples as their elements. They are useful when you want to store multiple tuples of different types and interate over them.

employee = [
    [1, 'aidna'],
    [2, 'brad'],
    [3, 'bob'],
]
//--------------------------------------------------------------

//Union
let pid: string | number                                           //Union holds more than one type of variable
pid = 22
//--------------------------------------------------------------

//Enum
enum Direction1 {                                                  //Enum defines a set of named constants, numeric or strings
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
// console.log(Direction2.Left)
//--------------------------------------------------------------

//Objects
type User ={                                                        //Objects used to represent data with key-value pairs
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}
//--------------------------------------------------------------

//Type Assertion                                                    //Type Assertion inform the compiler about the type of a variable
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number
//--------------------------------------------------------------

//Functions                                                         //Functions are similar to functions in JS, but they can have type annotations for the paraemters and the return values.
function addNum(x: number, y: number): number {
    return x + y
}
//------------------------------------------------

//Void                                                              //Void is a type that represents the absence of any value. It is mainly used to indicate that a function has no return value.
function log(message: string | number): void {
    // console.log(message)
}
//------------------------------------------------

//Interfaces                                                        //Interfaces is a way to describe the shape of an object, It defines the properties and methods that an object can have.
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}
const user1: UserInterface = {
    id: 1,
    name: 'John'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number,
    name: string,
    register(): string
}
//------------------------------------------------

//Classes                                                         //Classes are similar to classes in JS, but they have some additional features and syntax. 
                                                                //Classes are used to create reusable components that can encapsulate data and behavior.
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Aidan Knowles')
const mike = new Person(2, 'Mike Jordan')
//------------------------------------------------

//Subclasses                                                        //Subclasses are classes that inherit from another class, called the superclass. Subclasses can extend the functionality of the superclass by adding new fields and methods or by overriding the exising ones.
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Dave', 'developer')
//------------------------------------------------

//Generics                                                          //Generics are a way to create reusable components that can work with different types of data. Generics allow you to capture the type of a vairable and use it as a type parameter for functions, classes, interfaces and types.
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'john', 'mike'])

strArray.push('hello')
numArray.push(5)
//------------------------------------------------
