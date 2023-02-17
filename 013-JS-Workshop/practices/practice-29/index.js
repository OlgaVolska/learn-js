function StudetentStore() {
    this.students = [
        { name: "Kate Green", group: "PR_1", marks: [2, 3, 4, 3] },
        { name: "Patrik Giang", group: "PR_1", marks: [5, 5, 5, 5] },
        { name: "John Giang", group: "PR_2", marks: [3, 2, 2, 2] },
        { name: "Mary Li", group: "PR_2", marks: [5, 3, 5, 5] },
    ];
    this.addNewStudent = function(name , group , marks) {
        if (typeof name === 'string'
            && typeof group === 'string'
            && Array.isArray(marks)
            && marks.filter((value) => typeof value === 'number').length === 4
        ) {
           let obj = {
            name: name,
            group: group,
            marks: Object.assign([], marks)
           };
           this.students.push(obj);
           return 'Added 1 new student';
        } 
        return 'Incorrect format of arguments';       
    }
    this.getTheBestStudents = function() {
        let maxMarks = 0;
        let bestStudents = [];
        for (let student of this.students) {
            let sum = student.marks.reduce((prevValue, currentValue) => {
                return prevValue + currentValue;
            }, 0);
            if (sum > maxMarks) {    
                bestStudents = [];
                bestStudents.push(student.name);
                maxMarks = sum;
            } else if (sum === maxMarks) {
                bestStudents.push(student.name);
            }                    
        } 
        return bestStudents;  
    };
    this.getDropList = function() {
         //студент считается двоечником, если имеет одну или более двоек в массиве marks .
         let dropList = [];
         for (let student of this.students) {
            if (student.marks.includes(2)) {
                dropList.push(student.name);
            }
        }
        return dropList;               
    };
}


    

let studentStore = new StudetentStore();

console.log(studentStore.addNewStudent('Olga Volska', 'tr-2', [5, 5, 5, 5]));
console.log(studentStore.getTheBestStudents());
console.log(studentStore.getDropList());
