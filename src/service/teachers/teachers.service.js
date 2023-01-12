const teachersRepository = require('../../repository/teachers/teacheras.repository');

class TeachersService {

    constructor() {}

    async getTeachers() {
        return await teachersRepository.getTeachers();
    }

    async createTeachers(Teachers) {
        return await teachersRepository.createTeacher(Teachers);
    }

    async getgetTeacherClass(teacher_id) {
        return await teachersRepository.getTeacherClass(teacher_id);
    }

}

module.exports = new TeachersService();