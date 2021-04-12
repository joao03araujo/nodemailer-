const nodemailer = require('nodemailer');

var email = 'email@email.com';

var emailDestino = 'email@email.com';

var senha = 'SenhaSenha';

const remetente = nodemailer.createTransport({
    service: 'gmail',
    auth:{
    user: email,
    pass: senha}
});


const emailEnviado = {
    from: email,
    to: emailDestino,
    subject: 'Enviando Email com Node.js',
    text: 'Enviando e-mail com Node.js',
};

remetente.sendMail(emailEnviado, function(error){
    if (error) {
    console.log(error);
    } else {
    console.log('Email enviado com sucesso.');
    }
});