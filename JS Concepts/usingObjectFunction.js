function createStuent(name, rollNo, marks){
    var student ={};
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;
    return student;
}

var s1 = createStuent('abhi',01,5);
var s2 = createStuent('kr',02,7);

// s1.name = 'asdf';

console.log(s1);
console.log(s2);