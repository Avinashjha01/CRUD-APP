// importing all required packages 

const passport = require("passport");
// importing passport jwt for log in docters
const JwtStrategy = require("passport-jwt").Strategy;
ExtractJwt = require("passport-jwt").ExtractJwt;
let admin ={
"login_id" : "test@sunbasedata.com",
"password" :"Test@123"
}
var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secretkey",
};

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    console.log(typeof jwt_payload);
    admin.login_Id === jwt_payload
    
  })
);
