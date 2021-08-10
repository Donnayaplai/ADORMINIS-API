const db = require("../config/db");
const User = db.User;

//post user
exports.create = (req, res) => {	
	// Save to database
	User.create({  
			EMAIL: req.body.email,
			PASSWORD: req.body.password,
            FNAME: req.body.fname,
            LNAME: req.body.fname,
		})
		.then(User => {		
			// Send created customer to client
			res.json(User);
		})
		.catch(error => res.status(400).send(error))
};