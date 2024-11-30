function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  this.marks === undefined ? undefined : this.marks.push(...marks);
};

Student.prototype.getAverage = function () {
  
};

Student.prototype.exclude = function (reason) {

};
