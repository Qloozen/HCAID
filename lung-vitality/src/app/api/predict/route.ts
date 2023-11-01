export async function POST(req: Request) {
  let request = await req.json();
  let res = await fetch("https://hcaid-api.qloozen.nl/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
  return res;
}
