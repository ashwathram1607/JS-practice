let student={
    name:"Ashwath",
    age:26
}
let course={
    course:Javascript,
    Duaration:"2months"
}
let result={
    ...student,
    ...course
}
console.log(result);