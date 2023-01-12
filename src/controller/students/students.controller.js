const studentsService = require('../../service/students/students.service');

class StudentsController {


    async createStudents(students) {
        console.log(students)
        return await studentsService.createStudents(students);
    }


    async createSelectClass(students) {
        console.log(students)
        return await studentsService.createSelectClass(students);
    }

}
module.exports = new StudentsController();