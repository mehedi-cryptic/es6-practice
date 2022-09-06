class Parent{
    constructor(){
        this.fatherName="Arnold";
    }
}
class Child extends Parent{
        constructor(name){
            super();
            this.name=name;
        }
}
const baby=new Child("smith");
const baby2=new Child("jon");
console.log(baby);
console.log(baby2);