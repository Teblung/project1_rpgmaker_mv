var Config = module.exports = {
  //---------------------
  //Main Configurations
  //---------------------
  port: 8000,

  jwtSecret: ';dslhlkdfmn45ifpbjamfh-jakblkanf;gm',

  loggingConfig: {
    format : [
              "{{timestamp}} <{{title}}> {{message}}", //default format
              {
                error : "{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})\nCall Stack:\n{{stack}}" // error format
              }
    ],
    dateformat : "HH:MM:ss.L",
    preprocess :  function(data){
      data.title = data.title.toUpperCase();
    },
    level: 'debug'
  },

  //---------------------
  //Login Configurations
  //---------------------

  //Needs to be the same as Client firstHash
  firstHash: 'd28cb767c4272d8ab91000283c67747cb2ef7cd1',

  //Mail to send activation codes from
  mailFrom: 'smtps://theo.sepdianto97@gmail.com:password@smtp.gmail.com',

  //Activation API Location
  actUrl: 'http://localhost:8000/activate/',

  //Time until token expires (in minutes)
  tokenExpiresIn: 5,

  //Allows only one logged in user at a time.
  enforceOneUser: false,

  //Temporary Password Complexity for lost Passwords
  lostPasswordComplexity: 2,

  //Temporary Password Expiration in Milliseconds
  tempPasswordExpires: 3600000, //1 hour

  //------------------------
  //Database Configurations
  //------------------------

  mongoDBconnect: 'mongodb://kiyoka:qwerty21@ds117730.mlab.com:17730/rpgdb'
};
