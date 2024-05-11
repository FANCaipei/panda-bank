const nodemailer = require("nodemailer");

async function sendMail() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.mailersend.net",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "MS_a0NVFK@hanzi-nft.com",
            pass: "pTtr3Rd9awfdv5QH",
        },
        requireTLS: true,
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `<info@hanzi-nft.com>`, // sender address  <fancaipei@gmail.com>
        to: "2272946937@qq.com", // list of receivers //caipei.fan@moblab.com
        subject: "Hello ✔", // Subject line
        text: "Hello world? Test", // plain text body
        html: "<b>Hello world?</b> <h3>Random code: 8888</h3>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

sendMail().catch(err => console.log(err));
