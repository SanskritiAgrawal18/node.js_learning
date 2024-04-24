const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const person = require("./models/person");

passport.use(new LocalStrategy(async (Username, password, done) => {

  try {
   
    const user = await person.findOne({ username: Username });

    if (!user){
    return done(null, false, { message: "Incorrect username" });
    }
    
    const isPasswordMatch = await user.comparePassword(password);
    
    if (isPasswordMatch)
      return done(null, user);
    else
    console.log("{ message: 'Incorrect password' }");
      return done(null, false, { message: "Incorrect password" });

  } catch (err) {
    return done(err);
  }
}))
module.exports = passport;