import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "10";

  const items = await prisma.items.findMany({
    take: parseInt(limit),
    skip: (parseInt(page) - 1) * parseInt(limit),
  });
  return Response.json(items);
}
