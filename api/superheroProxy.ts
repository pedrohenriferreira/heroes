import type { VercelRequest, VercelResponse } from '@vercel/node';

const API_KEY = "11f01a579d44c5255bc4fe1ec0fc3792";
const BASE_URL = `https://superheroapi.com/api.php/${API_KEY}`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // extrai o caminho sem o prefixo
    const cleanedPath = req.url?.replace(/^\/api\/superheroProxy/, '') || '';

    // garante que tenha uma / entre baseURL e caminho
    const url = `${BASE_URL}${cleanedPath.startsWith('/') ? '' : '/'}${cleanedPath}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
