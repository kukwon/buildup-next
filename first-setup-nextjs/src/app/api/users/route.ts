import { users } from "@/app/lib/placeholder-data";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  return NextResponse.json(users[0]);
}
