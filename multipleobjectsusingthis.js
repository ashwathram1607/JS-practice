let student1={
    name:"Ashwath",
    greet:function(){
        console.log("hello"+this.name)
    }
};
let student2={
    name:"venkat",
    greet:function(){
        console.log("hello"+this.name)
    }
};
student1.greet();
student2.greet();