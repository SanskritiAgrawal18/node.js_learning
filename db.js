const mongoose=require("mongoose");

const bodyParser = require("body-parser");

//define connection url
const mongoURL="mongodb://127.0.0.1:27017/emplyoees" // replce emplyees with database name
mongoose.connect(mongoURL,
	{
		useNewUrlParser: true, // isko ni likhenge to connection error aa skta h
		useUnifiedTopology: true // same as above
	});

    const db= mongoose.connection;
    db.on('connected',()=>{
        console.log("Connected to MongoDB server");
    })
    db.on('error',(err)=>{
        console.log("MongoDB connection error", err);
    })
    db.on('disconnected',()=>{
        console.log("MongoDB disconnected");
    })
// const contactSchema = {
// 	email: String,
// 	query: String,
// };

// const Contact =
// 	mongoose.model("Contact", contactSchema);

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
 module.exports=db;