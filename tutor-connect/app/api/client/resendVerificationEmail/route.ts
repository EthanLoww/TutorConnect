import { sendMail } from "@/lib/mailService";
import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { email } = await req.json();

		const user = await prisma.client.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json(
                { error: "This email is not registered" },
                { status: 404 }
            );
        }

		const token = await prisma.activateClientToken.create({
			data: {
				clientId: user.id,
				token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ""),
			},
		});

		const from: string = "<lowethan11@gmail.com>";
		const to: string = user.email;
		const subject: string = "Please Activate Your Account";
		const mailTemplate: string = `Hello ${user.name}, <br> Please click on the link to activate your account: http://localhost:3000/api/client/activate/${token.token}`;

		sendMail(from, to, subject, mailTemplate);

		return NextResponse.json({
			user: {
				email: user.email,
			},
		});
	} catch (err: any) {
		return new NextResponse(
			JSON.stringify({
				error: err.message,
			}),
			{
				status: 500,
			}
		);
	}
}
