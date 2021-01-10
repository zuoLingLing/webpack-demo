window.onload = function () {
    document.querySelector('ul').style.listStyle = 'none';
    console.log(1)

}()

function* App() {
    yield 1,
        yield 2,
        yield 3
    return
}

let APP = App();
console.log(APP.next());
console.log(APP.next());
console.log(APP.next());
console.log(APP.next());
for(var i of App()){
    console.log(i);
}

let text = 'acvsdfsdfs';
console.log(text.includes('v'));

$('ul li:eq(0)').css('background', 'red')
class Text {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    logger() {
        console.log("Hello", this.name);
        return 1;
    }
    static age = 18
    static aa() {
        console.log(this.age);
        return 2;
    }

}
let text123 = new Text('小明', 20)
console.log(text123.logger())
console.log(Text.aa());
console.dir(text123);
console.dir(Text);

var a = () => { };
var a = (b) => b;

const double = [1, 2, 3].map((num) => num * 2);
console.log(double); // [2,4,6]

var bob = {
    _name: "Bob",
    _friends: ["Sally", "Tom"],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    }
};
console.log(bob.printFriends());

// let obj = {
//     x:'a',
//     y:'b'
// }
// let arr = []
// let {x,y} = obj;

// console.log(x,y);
let arr = [1,2,3,4,5]
let [x,y,...reset] = arr;
console.log(x,y,reset);
