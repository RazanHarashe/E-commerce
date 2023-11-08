import nodemailer from 'nodemailer';
export async function  sendEmail(to,subject,html){
const transporter = nodemailer.createTransport({
service:'gmail',
  auth: {
    user: "rharashe5@gmail.com",
    pass: "bjqx pogt pwwx qprg",
  },
}); 

const info = await transporter.sendMail({
    from: `"Razan harashe👻" <rharashe5@gmail.com>`, // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });

  return info; 
}


