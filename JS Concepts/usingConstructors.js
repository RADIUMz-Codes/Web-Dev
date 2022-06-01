function createStudent(name, rollNo, marks){
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
}

var s1 = new createStudent('abhi', 445,1232);
console.log(s1);