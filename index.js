const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const teacherController = require('./src/controller/teachers/teachers.controller')
const studentController = require('./src/controller/students/students.controller')




const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/api/teacher/signin', (req, res) => {
    // console.log(...req.body);
    const result = teacherController.createTeacher(req.body).then(data => res.json(data));
    // console.log(result)
});

app.get('/api/teacherClass', (req, res) => {
    console.log("here request", req)
    const result = teacherController.getTeacherClass(req.query.teacher_id).then(data => res.json(data));
    return result
});


app.post('/api/student/signin', (req, res) => {
    console.log(req.body);
    const result = studentController.createStudents(req.body).then(data => res.json(data));
    console.log(result)
});


app.post('/api/student/selectClass', (req, res) => {
    console.log(req.body);
    const result = studentController.createSelectClass(req.body).then(data => res.json(data));
    console.log(result)
});




app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})