var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  DiseaseModel = mongoose.model('Disease'),
  SymptomModel = mongoose.model('Symptom');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('index', {
  	title: 'Home'
  })
});

router.get('/add-disease',function(req,res){
	SymptomModel
	.find({})					// Retrieve all symptoms from the database'
	.exec(function(err, symptoms){
		res.render('form1',{
  			title: 'Add Disease',
  			symptoms: symptoms      // Pass the retrieved symptoms to the front-end (EJS)
  		});
	})
});

router.post('/save-disease', function(req, res){
	var newDisease = new DiseaseModel();
	
	newDisease.diseaseName = req.body.dName;
	newDisease.fatal = req.body.fatal == 'yes' ? true : false;
	newDisease.symptomIds = req.body.symptomIds

	newDisease.save(function(err){
		console.log(err);
		var statusMessage = err? 'Failed to create' : 'Successfully added disease';
		res.render('index', {
			title: 'Home',
			message: statusMessage
		});
	})
});

router.get('/diseases/list',function(req,res){
	
	DiseaseModel
	.find({})
	.exec(function(err, diseases){
		res.render('diseases-list',{
  			title: 'List Disease',
  			diseases: diseases
		}) // Pass the retrieved symptoms to the front-end (EJS)
  		});
});

router.get('/diseases/find',function(req,res){
  res.render('find-disease');

  }); 

router.get('/suggestions',function(req,res){
		res.render('suggestions.ejs');
});

router.get('/login/user',function(req,res){
		res.render('login-user.ejs');
});

router.get('/login/doctor',function(req,res){
		res.render('login.ejs');
});
/*router.post('/identifydisease',function(req,res){
	var sd = new SymptomDisease();
	sd.symptomId=req.body.fever? true : false;
/*	sd.symptomId=req.body.headache? true : false;
	sd.symptomId=req.body.loa? true : false;
	
	//if(sd.symptomId=req.body.fever){
		console.log(req.body);
		if (sd.symptomId='on'){
			SymptomDisease
				.find({
					symptomId:'1'
			})
		
				.select('diseaseIdList')
				.exec(function(err,dArray){
					if(err){
						res.render('index', {
						 	message: 'Failed'
						});
						   }		
					else{
						res.render('diseaseoutput',{
							disease: dArray
						})
						}	
						
					})
				

		}
}); 

*/
	//}
	







router.post('/add-diseasesymptom',function(req,res){
var symdis= new SymptomDisease();
  symdis.sdId=req.body.sdIdfrontend;
  symdis.symptomId=req.body.sIdfrontend;	
  symdis.save(function(err){ if(err){res.render('index',{title:'Home',message:'error while adding symptom to db'});
  }
  else{
    res.render('index',{
      title:'Home',
      message:'Success'
    });

  }
});
 

});


/* ALGORITHM TO FIND DISEASE:
				input symptom name, identify diseases with unique id corresponding to input symptom in disease symptomIdLIst array
					if hit count of disease =1
					on inputting second symptom 
						if hit count ++;
						
						disease with highest hit count has highest probability
						 "		 "	2nd highest hit count has 2nd highest probability etc....
						 
				
		
*/

			//POPULATE FUNCTION FOR INTERSECTION? 
			




router.get('/view',function(req,res){
  res.render('view',{});

  });
router.get('/user/signup',function(req,res){
  res.render('add-user',{});

  });

router.post('/view',function(req,res){
  console.log(req.body);
});
router.post('/disease/find/submit',function(req,res){
  console.log(req.body);
	if(req.body.loA === 'on' &&& req.body.fever='on' &&& req.body.headache)
		{ 
	res.render('cp',{});
		}
	else if(req.body.fever='on' &&& req.body.headache)
		{ 
	res.render('disease',{});
		
	}
});
router.get('/doctor/signup',function(req,res){
  res.render('add-doctor',{});

  });
router.post('/doctor/add',function(req,res){
  res.render('registered',{});
});
router.post('/user/add',function(req,res){
  console.log(req.body);
	  res.render('registered',{});

});
