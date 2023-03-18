import { type NextRequest, NextResponse } from "next/server";
import { createYoga } from "graphql-yoga";
import schema from "./schema";

interface YogaContext {
  method: string;
  headers: Headers;
  body?: string;
}

const yoga = createYoga({
  graphqlEndpoint: "/api/billing/graphql",
  schema,
});

async function handler(req: NextRequest) {
  const context: YogaContext = {
    method: req.method,
    headers: req.headers,
  };

  if (req.body) {
    const body = await req.json();
    context.body = JSON.stringify(body);
  }

  const yogaResponse = await yoga.fetch(req.url, context);
  const yogaBody = await yogaResponse.text();

  return new NextResponse(yogaBody, {
    headers: yogaResponse.headers,
    status: yogaResponse.status,
  });
}

export default handler;
