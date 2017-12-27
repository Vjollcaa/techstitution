var express = require('express');
var path = require('path');

//init app
var app = express();

//Connection of MongoDB
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const mongoURL = 'mongodb://localhost:27017/techs';

MongoClient.connect(mongoURL, function(err, database){
       if(err) {
       	 console.log(err);
       }
       console.log("MongoDB connected!");
       qkmk = database.collection('qkmk');
       roads = database.collection('roads');
});

//setup template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// use static files
app.use(express.static(path.join(__dirname + '/public')));
app.use('/qkmk/', express.static(path.join(__dirname + '/public')));
app.use('/qkmk/edit/', express.static(path.join(__dirname + '/public')));
app.use('/roads/', express.static(path.join(__dirname + '/public')));
app.use('/roads/edit/', express.static(path.join(__dirname + '/public')));

var bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

 var dateTimeNow = new Date();

// Routs
app.get('/', function (req, res) {
	 qkmk.find({}).toArray(function(err, docs) {
		if(err) {
			console.log(err);
		}
         res.render('index', {docs: docs});
  });
});

app.get('/roads', function(req, res) {
	 roads.find({}).toArray(function(err, docs) {
		if(err) {
			console.log(err);
		}
		  res.render('roads', {docs: docs});
	});
});

app.get('/qkmk', function(req, res) {
	qkmk.find({}).toArray(function(err, docs) {
		if(err) {
			console.log(err);
		}
		res.render('table', {docs: docs});
	});
});

app.get('/qkmk/:id', function(req, res) {
    qkmk.findOne({_id: ObjectId(req.params.id)}, function(err, doc) {
    	if(err) {
    		console.log(err);
    	}
    	res.render('show', {doc: doc});
    });
});

app.get('/roads/:id', function(req, res) {
    roads.findOne({_id: ObjectId(req.params.id)}, function(err, doc) {
    	if(err) {
    		console.log(err);
    	}
    	res.render('show_roads', {doc: doc});
    });
});

// Add data to collection qkmk
app.post('/qkmk/add', function(req, res) {
	qkmk.insert({pikaKufitare: req.body.pikaKufitare, 
		          hyrjeMinMinuta: req.body.hyrjeMinMinuta,
		          hyrjeMaxMinuta: req.body.hyrjeMaxMinuta,
		          daljeMinMinuta: req.body.daljeMinMinuta,
		          daljeMaxMinuta: req.body.daljeMaxMinuta,
		          hyrjeMinMetra: req.body.hyrjeMinMetra,
		          hyrjeMaxMetra: req.body.hyrjeMaxMetra,
		          daljeMinMetra: req.body.daljeMinMetra,
		          daljeMaxMetra: req.body.daljeMaxMetra,
		          updatedAt: dateTimeNow}, function(err, result) {
                   if(err) {
                   	console.log(err);
                   }
                   res.redirect("/");
		          });
});

//Add data to collection roads
app.post('/roads/add', function(req, res) {
	roads.insert({magjistralja: req.body.magjistralja, 
		          debore: req.body.debore,
		          akull: req.body.akull,
		          mjegull: req.body.mjegull,
		          rreshqitjeDheu: req.body.rreshqitjeDheu,
		          kalueshmeria: req.body.kalueshmeria,
		          updatedAt: dateTimeNow}, function(err, result) {
                   if(err) {
                   	console.log(err);
                   }
                   res.redirect("/roads");
		          });
});

//Edit data from collection qkmk
app.get('/qkmk/edit/:id', function(req, res) {
    qkmk.findOne({_id: ObjectId(req.params.id)}, function(err, doc) {
    	if(err) {
    		console.log(err);
    	}
    	res.render('edit', {doc: doc});
    });
});

//Edit data from collection roads
app.get('/roads/edit/:id', function(req, res) {
    roads.findOne({_id: ObjectId(req.params.id)}, function(err, doc) {
    	if(err) {
    		console.log(err);
    	}
    	res.render('edit_roads', {doc: doc});
    });
});

//Upadate data from collection qkmk
app.post('/qkmk/update/:id', function(req, res) {
	qkmk.updateOne({_id: ObjectId(req.params.id)}, 
		            {$set: {pikaKufitare: req.body.pikaKufitare, 
		                    hyrjeMinMinuta: req.body.hyrjeMinMinuta,
		                    hyrjeMaxMinuta: req.body.hyrjeMaxMinuta,
		                    daljeMinMinuta: req.body.daljeMinMinuta,
		                    daljeMaxMinuta: req.body.daljeMaxMinuta,
		                    hyrjeMinMetra: req.body.hyrjeMinMetra,
		                    hyrjeMaxMetra: req.body.hyrjeMaxMetra,
		                    daljeMinMetra: req.body.daljeMinMetra,
		                    daljeMaxMetra: req.body.daljeMaxMetra,
		                    updatedAt: dateTimeNow}}, function(err, result) {
		if(err) {
			console.log(err);
		}
	res.redirect("/");
   });
});

//Update data from collection roads
app.post('/roads/update/:id', function(req, res) {
	roads.updateOne({_id: ObjectId(req.params.id)}, 
		            {$set: {magjistralja: req.body.magjistralja, 
		                    debore: req.body.debore,
		                    akull: req.body.akull,
		                    mjegull: req.body.mjegull,
		                    rreshqitjeDheu: req.body.rreshqitjeDheu,
		                    kalueshmeria: req.body.kalueshmeria,
		                    updatedAt: dateTimeNow}}, function(err, result) {
		if(err) {
			console.log(err);
		}
	res.redirect("/roads");
   });
});

//Delete data from collection qkmk
app.get('/qkmk/delete/:id', function(req, res) {
		qkmk.deleteOne({_id: ObjectId(req.params.id)}, function(err, result) {
		if(err) {
			console.log(err);
		}
	res.redirect("/");
   });
});

//Delete data from collection roads
app.get('/roads/delete/:id', function(req, res) {
		roads.deleteOne({_id: ObjectId(req.params.id)}, function(err, result) {
		if(err) {
			console.log(err);
		}
	res.redirect("/roads");
   });
});

app.listen(3001, function() {
	console.log("App running at http://localhost:3001");
}); 


