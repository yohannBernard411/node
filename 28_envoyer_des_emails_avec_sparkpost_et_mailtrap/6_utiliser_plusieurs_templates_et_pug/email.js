const nodemailer = require('nodemailer');
const sparkPostTransport = require('nodemailer-sparkpost-transport');
const pug = require('pug');

class Email {
  constructor(){
    this.prodTransporter = nodemailer.createTransport(
      sparkPostTransport({
        sparkPostApiKey: 'ae28b464c1a73d51dd34bb2828d72e3bbe897987',
        endpoint: 'https://api.eu.sparkpost.com'
      })
    );
  }

  async getTemplate(templateName, options) {
    try {
      const template = pug.renderFile(`./email-templates ${ templateName }.pug`,options.metaData
      );
      const data = await this.prodTransporter.sendMail({
        from: 'Yohann-project <contact@yohann-project.site>', // sender address
        to: options.to,
        subject: options.subject,
        html: template
      });
      console.log("Email ok! " ,data);
    }catch(e){
      throw new Error(e);
    }
  }
}

module.exports = new Email();
