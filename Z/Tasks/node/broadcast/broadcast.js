'use strict';
program
    .version('0.0.1')
    .option('-l, --list [list]', 'List of customers in CSV')
    .parse(process.argv);
const program = require('commander');
const csv = require('csv');
const fs = require('fs');
const inquirer = require('inquirer');

let __sendEmail = function (to, from, subject, callback) {
    let template = "Wishing you a Merry Christmas and a " +
        "prosperous year ahead. P.S. Toby, I hate you.";
    let helper = require('sendgrid').mail;
    let fromEmail = new helper.Email(from.email, from.name);
    let toEmail = new helper.Email(to.email, to.name);
    let body = new helper.Content("text/plain", template);
    let mail = new helper.Mail(fromEmail, subject, toEmail, body);
    let sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    let request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });
    sg.API(request, function (error, response) {
        if (error) {
            return callback(error);
        }
        callback();
    });
};
stream
    .on("error", function (err) {
        return console.error(err.response);
    })
    .on("data", function (data) {
        let name = data[0] + " " + data[1];
        let email = data[2];
        contactList.push({name: name, email: email});
    })
    .on("end", function () {
        inquirer.prompt(questions).then(function (ans) {
            async.each(contactList, function (recipient, fn) {
                __sendEmail(recipient, ans.sender, ans.subject, fn);
            });
        });
    });