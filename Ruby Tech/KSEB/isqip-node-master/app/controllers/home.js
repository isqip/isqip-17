var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  StudentModel = mongoose.model('Student');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/login', function (req, res) {
 res.render('login', {
  title: 'Login Page'
 });
});

router.get('/User', function (req, res) {
 res.render('user', {
  title: 'Login Page'
 });
});

router.get('/', function (req, res, next) {
 res.render('index', {
  title: 'Home'
 });
});

router.get('/student/create', function(req, res){
  res.render('create-student', {
    title: 'Create Student'
  });
});


router.post('/student/submit-form', function(req, res){
  var newStudent = new StudentModel();
  newStudent.name = req.body.studentName;
  newStudent.className = req.body.className;
  newStudent.rollNo = req.body.rollNum;
  newStudent.dOb = req.body.dOb;
  newStudent.Units = req.body.Units;
  newStudent.classLeader = req.body.isClassLeader ? true : false;

  newStudent.save(function(err){
    if(err){
      console.log(err);
      res.render('index', {
        title: 'Home',
        message: 'Error while creating student.'
      });
    }
    else{
      res.render('index', {
        title: 'Home',
        message: 'Successfully created Consumer Record.'
      });
    }
  });
});

router.get('/student/list', function(req, res){
  res.render('student-list', {
    title: 'List students'
  });
});

router.post('/student/list', function(req, res){
    StudentModel
    .find({
      rollNo: req.body.rollNum,
      delete: false
    })
    .select('name className rollNo dOb Units ')
    .exec(function(errorMsg, studentArray){
      if(errorMsg){
        res.render('index', {
          title: 'Home',
          message: 'Failed to load student list'
        });
      }
      else{
        res.render('student-table', {
          title: req.body.rollNum + ' students',
          students: studentArray
        })
      }
    })
});

router.get('/student/delete/:id', function(req, res){
  StudentModel
  .findOne({
    _id: req.params.id
  })
  .exec(function(err, student){
    student.delete = true;
    student.save(function(err){
      if(!err){
        res.redirect('/student/list');
      }
    })
  })
});