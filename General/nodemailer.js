let nodemailer = require('nodemailer');
const { ListGroup } = require('react-bootstrap');

let transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user: 'dltpdnd1234@gmial.com',
    pass: ''
  }
})

let mailOption = {
  from: '',
  to: '',
  subject:'',
  texr:''
}

transporter.sendMail(mailOption, (error, info)=>{
  if(error) {console.log(error);}
  else {console.log('email sent'+ info.response);}
})
