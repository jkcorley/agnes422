export async function getHumeAccessToken(): Promise<string> {
  const res = await fetch("https://api.hume.ai/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.HUME_CLIENT_ID,
      client_secret: process.env.HUME_CLIENT_SECRET,
      grant_type: "client_credentials"
    })
  });
  const { access_token } = await res.json();
  return access_token;
}
