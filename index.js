let studentRecords = [{ name: 'John', id: 123, marks: 98 },
{ name: 'Baba', id: 101, marks: 23 },
{ name: 'yaga', id: 200, marks: 45 },
{ name: 'Wick', id: 115, marks: 75 }]

// We are interested in retrieving only the students' names; all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']

let names = [];
for (let i = 0; i < studentRecords.length; i++) {
    names.push(studentRecords[i].name.toUpperCase());
}
console.log(names);

// Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]

let namesAndScore = studentRecords.filter(stu => stu.marks > 50);
console.log(namesAndScore);

// Retrieve the details of students who scored more than 50 marks and have IDs greater than 120.

let namesAndId = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
console.log(namesAndId);

// Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let totalMarks = studentRecords.reduce(((acc, emp) => acc + emp.marks), 0)
console.log(totalMarks);

// This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let requirednames = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name)
console.log(requirednames);

// This time we are required to print the sum of marks of the students with id > 120.

let totalMarksSum = studentRecords.filter(stu => stu.id > 120).reduce((acc, curr) => acc + curr.marks, 0)
console.log(totalMarksSum);

// This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let totalGraceMarks = studentRecords.map(function (stu) {
    if (stu.marks < 50) {
        stu.marks += 15;
    }
    return stu;
}).filter(stu => stu.marks > 50).reduce((acc, curr) => acc + curr.marks, 0);
console.log(totalGraceMarks);

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

let newStudentRecords = [{ name: "Navin", class: 9, rollno: 10 },
{ name: "Nitin", class: 9, rollno: 11 },
{ name: "Ravi", class: 9, rollno: 13 },
{ name: "Satish", class: 9, rollno: 14 },
{ name: "Aarav", class: 9, rollno: 17 },
{ name: "Abhi", class: 9, rollno: 15 }] 

console.log(newStudentRecords);