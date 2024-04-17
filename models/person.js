const mongoose= require('mongoose');
//schema=blueprint of your database
const personSchema = new mongoose.Schema({
	name:{
        type:String,
        required:true 
    },
    age:{
        type:Number,
    
    },
    work:{
        type:String,
        required:true,
        enum:['AWS' ,'web developer', 'designer'],
        default:'AWS'
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});

const person =
	mongoose.model("person", personSchema);

// const app = express();

// app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({
// 	extended: true
// }));

// app.use(express.static(__dirname + '/public'));

// app.get("/contact",
// 	function (req, res) {
// 		res.render("contact");
// 	});

// app.post("/contact",
// 	function (req, res) {
// 		console.log(req.body.email);
// 		const contact = new Contact({
// 			email: req.body.email,
// 			query: req.body.query,
// 		});
// 		contact.save(function (err) {
// 			if (err) {
// 				throw err;
// 			} else {
// 				res.render("contact");
// 			}
// 		});
// 	});

// app.listen(3000,
// 	function () {
// 		console.log("App is running on Port 3000");
// 	});
module.exports=person;