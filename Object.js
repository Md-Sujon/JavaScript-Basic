const student={id:12920,phone:017145,name:"Sujon"};
const student1={id:23565,phone:14566,name:"robin"};

const studentPhone=student1['name'];
const studentPhone1=studentPhone;
student1.phone=9420;
student.name='bilkish';
console.log(studentPhone);
console.log(student);