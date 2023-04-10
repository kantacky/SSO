export async function GET(request: Request) {
  const res = await fetch(`${process.env.API_URL}/domain`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 43200 },
  });

  if (!res.ok) {
    return new Response(res.statusText, { status: res.status });
  }

  const json = await res.json();

  const domains: string[] = [];

  for (const domain of json) {
    domains.push(domain.domain);
  }

  return new Response(JSON.stringify(domains), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
