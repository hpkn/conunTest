const { connect } = require('../../database/db_connection');
class studentsRepository {
    async query_to_database(query) {
        const query_result = await connect(query)
            .catch((error) => {
                console.log("here message", error)
                console.log("here error", error._original)
            });

        return query_result;
    }

    async createStudent(student) {
        let data = {};
        try {
            const insertStudent = `INSERT INTO students (name, grade)
            VALUES ('${student.name}', '${student.grade}');`;

            data.rawCount = this.query_to_database(insertStudent)
        } catch (err) {
            console.log('Error::' + err);
        }
        return data;
    }


    async createSelectClass(selected) {
        let data = {};
        try {
            const insertStudent = `INSERT INTO cours_detail (cours_id, student_id)
            VALUES ('${selected.cours_id}', '${selected.student_id}');`;

            data.rawCount = this.query_to_database(insertStudent)
        } catch (err) {
            console.log('Error::' + err);
        }
        return data;
    }




}

module.exports = new studentsRepository();