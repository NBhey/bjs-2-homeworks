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
  console.log(`1ый  ${this.marks}`);
  if (this.marks === undefined || this.marks.length === 0 ) return 0;
  console.log(`2ой  ${this.marks}`)
  return this.marks.reduce((acc,el)=>{return acc+=el},0) / this.marks.length
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
