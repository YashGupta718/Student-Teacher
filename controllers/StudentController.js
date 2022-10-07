const Student = require('../models/Student')

//list of
const index = (req, res, next) => {
  Student.find()
  .then(response => {
    res.json({
      response
    })
  })
  .catch(error => {
    res.json({
      message: 'An error occured!!'
    })
  })
}

//display single student
const show = (req, res, next) => {
  let studentID = req.body.studentID
  Student.findById(studentID)
  .then(response => {
    res.json({
      response
    })
  })
  .catch(error => {
    res.json({
      message: 'An error occured!!'
    })
  })
}

//add student
const store = (req, res, next) => {
  let student = new Student({
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age
  })
  student.save()
  .then(response => {
    res.json({
      message: 'Student added succesfully'
    })
  })
  .catch(error => {
    res.json({
      message: 'An error occured!!'
    })
  })
}

//update student details by student id---> update students fav teacher by student id
const update = (req, res, next) => {
  let studentID = req.body.studentID
  let updatedData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age
  }
  Student.findByIdAndUpdate(studentID, {$set: updatedData})
  .then(response => {
    res.json({
      response
    })
  })
  .catch(error => {
    res.json({
      message: 'An error occured!!'
    })
  })
}

module.exports = {
  index, show, store, update
}