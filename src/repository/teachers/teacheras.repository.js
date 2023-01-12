const { connect } = require('../../database/db_connection');
class TeachersRepository {

    constructor() {}

    async query_to_database(query) {
        const query_result = await connect(query)
            .catch((error) => {
                console.log("here message", error)
                console.log("here error", error._original)
            });

        return query_result;
    }

    async getTeachers() {
        try {
            const query_string = `SELECT * FROM teachers`
            const queryResult = await this.query_to_database(query_string)
            console.log(queryResult)


            const result = queryResult['rows']
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getTeacherClass(teacher_id) {
        try {
            const query_string = `
                SELECT cs.title, cs.grade, sdt.name FROM course cs
                LEFT JOIN cours_detail cd ON cs.id = cd.cours_id
                LEFT JOIN students sdt ON sdt.id = cd.student_id
                WHERE cs.teacher_id = ${teacher_id}`

            // console.log(query_string)
            const queryResult = await this.query_to_database(query_string)
            const result = queryResult['rows']
            return result;
        } catch (err) {
            console.log(err);
            return []
        }
    }

    async createTeacher(teacher) {
        let data = {};
        try {
            const insertTeacher = `INSERT INTO teachers (name, password)
            VALUES ('${teacher.name}', '${teacher.password}');`;

            // console.log(insertTeacher)
            data.rawCount = this.query_to_database(insertTeacher)

            // data = await this.db.teachers.create({...teacher });
        } catch (err) {
            console.log('Error::' + err);
        }
        return data;
    }


}

module.exports = new TeachersRepository();