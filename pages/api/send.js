import express from "express";
import cors from "cors";
import { google } from "googleapis";
import nodemailer from "nodemailer";

export default async function (req, res) {
    const app = express();
    app.use(cors());
    app.use(express.json());

    const { OAuth2 } = google.auth;

    const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'; 

    const oauth2Client = new OAuth2(
        process.env.GMAIL_CLIENT_ID,
        process.env.GMAIL_CLIENT_SECRET,
        OAUTH_PLAYGROUND
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });
    const accessToken = oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_USER,
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            accessToken: process.env.GMAIL_ACCESS_TOKEN,
            accessToken,
        }
    });

    const mailData = {
        from: `Portfolio <${process.env.GMAIL_USER}>`,
        to: process.env.SEND_TO,
        subject: req.body.subject,
        html: `
            <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
                <div style="max-width: 700px; background-color: white; margin: 0 auto">
                    <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
                        <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
                            Portfolio
                        </p>
                        <div style="font-size: .8rem; margin: 0 30px">
                            <p>Name: <b>${req.body.name}</b></p>
                            <p>Email: <b>${req.body.email}</b></p>
                            <p>Message: <i>${req.body.message}</i></p>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    transporter.sendMail(mailData, (err, info) => {
        if(err) {
            console.log(err);
            res.send("error" + JSON.stringify(err));
        } else {
            console.log("Email send");
            res.send("success");
        };
    });
};