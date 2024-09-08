const nodemailer = require("nodemailer");


module.exports = async(userEmail,subject,htmlTemplate)=>{
  try {
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "nwigashop@gmail.com",
        pass: "ptfktzptqiqwnlun",
      },
    })

    const mailOption ={
      from: `"META2FX.com 💸"<nwigashop@gmail.com>`, // sender address
      to: userEmail, // list of receivers
      subject: subject, // Subject line
      html: htmlTemplate, // html body
    }

    const info = await transporter.sendMail(mailOption)
    console.log('Email sent : ' + info.response)
  } catch (error) {
    console.log(error);
    throw new Error('internale Server Error (nodeMailer) ')
  }
}
