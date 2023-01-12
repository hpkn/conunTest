const StudentsRepository = require('../../repository/student/students.repository');

class StudentsService {

    constructor() {}


    async createStudents(student) {
        return await StudentsRepository.createStudent(student);
    }

    async createSelectClass(selected) {
        return await StudentsRepository.createSelectClass(selected);
    }
}

module.exports = new StudentsService();