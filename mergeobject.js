let student={
    name:"venkat",
    age:26,
};
let course={
    course:"Javascript",
    Duration:"2 months"
};
let result={
    ...student,
    ...course,
};
console.log(result)