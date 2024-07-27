import { ConnectDB } from "@/lib/config/db";
import EmailModel from "../../../lib/models/EmailModel";
import { NextResponse } from "next/server";


const loadDB = async () => {
    try {
        await ConnectDB();
    } catch (error) {
        console.error("Database connection failed:", error);
        throw new Error("Database connection error");
    }
};


loadDB();

export async function POST(request) {
    try {
        const formData = await request.formData(); 
        const emailData = {
            email: formData.get('email').toString(),
        };

        await EmailModel.create(emailData);
        return NextResponse.json({ success: true, msg: "Email Subscribed" });
    } catch (error) {
        console.error("Error in POST route:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
export async function GET(request) {
    const emails= await EmailModel.find({})
    return NextResponse.json({emails});
}