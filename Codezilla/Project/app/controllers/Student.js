var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

var Student = mongoose.model('Student');

module.exports = function (app) {
  app.use('/', router);
};

function createSchemas(name){
    var Any = new Schema({
        price: Number,
        itemName: String,
        stock: { type: Boolean, default: true }
    });
    return mongoose.model(name, Any);
}

router.post('/student/add', function(req, res){
    
    let leader = false;
    
    if(req.body.classLeader=="on"){
        leader = true
    }
    
    var studentDetails = {
        name: req.body.name,
        class: req.body.class,
        DOB: req.body.dob,
        rollNo: req.body.rollNo,
        classLeader: leader
    };
    
    var student = new Student(studentDetails);
    
    student.save(function(err){
        if(err){
            res.send('Error');
        }
        else{
            res.redirect('/student/create');
        }
    });
    
});

router.get('/student/create', function (req, res) {
    
    res.render('createstudent', {
        title: "Create Student"
    });
    
});

router.get('/student/find', function(req, res){
    
    res.render('findStudents', {
        title: "Find Student"
    });
    
});

router.post('/student/find', function(req, res){
    
    Student.find({
        class:req.body.class,
        delete: false
    }).select("name rollNo").exec(function(err, studentdet){
        res.render('listStudents', {
            title: "list of Students",
            list: studentdet
        });
    });
    
});

router.get('/students/delete/:id', function(req, res){
   
    console.log(req.params.id);
    Student.findOne({
        _id:req.params.id
    }).select('delete').exec(function(err, studentset){
        studentset.delete = true;
        studentset.save(function(err){
            if(!err){
                res.redirect('/student/find');
            }
        });
    });
    
});