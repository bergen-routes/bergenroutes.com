import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readFormData(event)
    const name = body.get("name")?.toString()
    const email = body.get("email")?.toString()
    const subject = body.get("subject")?.toString() || ""
    const message = body.get("message")?.toString() || ""
    if (name && email) {
        try {
            await SendContactMail({name, email, subject, message})
            setResponseStatus(event, 200)
            return
        } catch (error) {
            console.error(error)
            throw createError({statusCode: 500, statusMessage: error})
        }
    } else {
        throw createError({statusCode: 400})
    }
})

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'ohadsfarkash@gmail.com',
        pass: process.env.STMP_AUTH_PASS
    }
})

function SendContactMail(params) {
    return transporter.sendMail({
        from: '"Contact Form" <ohadsfarkash@gmail.com>',
        to: "ohadsfarkash@gmail.com",
        replyTo: params.email,
        subject: `Bergen Routes Contact Form | ${params.subject}`,
        text: params.message
    })
}
