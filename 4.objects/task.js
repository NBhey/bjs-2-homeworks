function Student(name, gender, age) {
  return {
    name,
    gender,
    age,
    marks: [],
  };
}

Student.prototype.setSubject = function (subjectName) {
    const obj = {
        subjectName
    }
  return obj.subjectName
};

Student.prototype.addMarks = function (...marks) {};

Student.prototype.getAverage = function () {};

Student.prototype.exclude = function (reason) {};
