import generateEmail from "./services/template";
import { NextResponse as Response } from 'next/server'

const mailer = require("./services/mailer");

export async function POST(req) {
  const {fullName, email, message} = await req.json();
  if (!email || !fullName || !message){

    return Response.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }
  const { MAIL_SENDER } = process.env;
  const mailOptions = {
    from: MAIL_SENDER,
    to: email,
    subject: `Thank you for your message`,
    text:"Thank you for your message",
    html: generateEmail(fullName)
  };
  const mailOptions2 = {
    from: MAIL_SENDER,
    to: "mahamadounouridinem@gmail.com",
    subject: `${fullName} from my Portfolio`,
    text: `Email: ${email}
    Full Name: ${fullName},
    Message:
    ${message}
    `,
  };

  try {
    const info1 = await mailer.sendMail(mailOptions);
    const info2 = await mailer.sendMail(mailOptions2);

    if(info2 || info1)
    return Response.json(
      { success: true, message: "message received successfully" },
      { status: 200, statusText: "message received" }
    );

    else return Response.json(
      { success: false, message: "Server Error" },
      { status: 500, statusText: "an error occured" }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, message: "Server Error", error },
      { status: 500, statusText: "an error occured" }
    );
  }
}
