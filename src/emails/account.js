const { send } = require("@sendgrid/mail");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'XXXXXXXXX@XXXXX.COM',
    subject: "Welcome to the project",
    text: `Welcome to the experience ${name} Let me know how you like the app. Thanks!`,
    // html: '<h1>HELLO, Thanks for Joining!</h1>' this can easily be added
  });
};

const sendTerminationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'XXXXXX@XXXX.COM',
    subject: "A little birdie is telling me you cancelled your account...",
    text: `Hate to see you go and I'm sure you have your reasons ${name}, anyway you could let us know whats up and how we might be able to provide better service in the future?  Feel free to respond to this email ${name}.  Thank you and no hard feelings..lol yea we just sold your ALL of your data!!! hahah`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendTerminationEmail,
};

// sgMail.send({
//   to: 'XXXXXXXXX@gmail.com',
//   from: 'XXXXXXXXXXX@gmail.com',
//   subject: 'This is my first creation email',
//   text: 'I hope this one actually comes through with no errors!!!'
// }) this worked !
