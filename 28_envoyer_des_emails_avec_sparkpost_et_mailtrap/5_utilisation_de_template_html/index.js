const nodemailer = require('nodemailer');
const sparkPostTransport = require('nodemailer-sparkpost-transport');
const fs = require('fs');


const sparkPostTransporter = nodemailer.createTransport(
  sparkPostTransport({
    sparkPostApiKey: 'ae28b464c1a73d51dd34bb2828d72e3bbe897987',
    endpoint: 'https://api.eu.sparkpost.com'
  })
);

async function main() {
  try {
    const data = await sparkPostTransporter.sendMail({
      from: 'Yohann-project <contact@yohann-project.site>', // sender address
      to: 'yohannb215@gmail.com', // list of receivers
      subject: 'Bienvenue sur Yohann-project', // Subject line
      html: fs.readFileSync('./email-welcome.html')
    });
    console.log(data);
  }catch(e){
    console.log(e);
  }
}

main();