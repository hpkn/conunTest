const teachersService = require('../../service/teachers/teachers.service');

class TeacherController {

    async getTeachers() {
        return await teachersService.getTeachers();
    }

    async createTeacher(teachers) {
        return await teachersService.createTeachers(teachers);
    }

    async getTeacherClass(teacherid) {
        return await teachersService.getgetTeacherClass(teacherid);
    }

}
module.exports = new TeacherController();