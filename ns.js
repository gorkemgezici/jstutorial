var x=123;
console.log(x);

function MyClass(y){
    this.Foo = y;
    
    this.Square = function(){
        this.Foo *=this.Foo;
    }
    
    this.AddToFoo = function(added){
        this.Foo +=added;
    }
}

var myObj = new MyClass(5);
myObj.Square();
myObj.AddToFoo(3);
console.log(myObj.Foo);