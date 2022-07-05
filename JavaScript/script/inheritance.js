// 1.
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+ this.name;
    }
}
let p1 = new Person('oxxun');
document.write(p1.introduce());

// 위 코드를 밑처럼 변경 가능
// 2.
function Person(name){
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return 'My name is '+ this.name;
}
// let p2 = new Person('oxxun');
// document.write(p2.introduce());

// 3.   Pregrammer가 Person의 introduce를 상속 받을 수 있음
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();

let p3 = new Programmer('oxxun');
document.write(p3.introduce());

// 어떠한 객체를 상속받고 싶다면 그 객체를 생성자의 프로토타입에 할당을 시키면 된다.
// 4.
function Person(name){
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return 'My name is '+ this.name;
}

function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}

function Designer(name){
    this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = function(){
    return "beautiful";
}

let p4 = new Programmer('oxxun');
document.write(p4.introduce()+"<br/>");
document.write(p4.coding()+"<br/>");

let p5 = new Designer('oxxun_^');
document.write(p5.introduce()+"<br/>");
document.write(p5.design()+"<br/>");

//My name is oxxun
// hello world
// My name is oxxun_^
// beautiful