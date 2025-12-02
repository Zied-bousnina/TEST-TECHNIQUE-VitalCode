import { NextResponse } from "next/server";

// Cache for 5 minutes => 300 s = 5*60 s =>>>>>>> 5 minutes
export const revalidate = 300;

export function GET() {
  return NextResponse.json(
    { message: "Hello VitalCode" },
    {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      },
    },
  );
}
