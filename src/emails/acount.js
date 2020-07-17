const  sgMail  =  require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email,name) => {
  sgMail.send({
    to:email,
    from:'polaris.2.71828@gmail.com',
    subject:'Thanks for joining in!',
    text:`Welcome to the app, ${name}. Let me know how you get along with the app`
  })
}

const sendCancelationEmail = (email,name) => {
  sgMail.send({
    to:email,
    from:'polaris.2.71828@gmail.com',
    subject:'Sorry to see you go!',
    text:`Godbye, ${name}. I hope to see you back sometime soon.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}

// const msg = {
//   to: 'polaris.2.71828@gmail.com',
//   from: 'polaris.2.71828@gmaill.com',
//   subject: 'This is my first creation!',
//   text: 'I hope this one actually get to you',
// };
// sgMail.send(msg);