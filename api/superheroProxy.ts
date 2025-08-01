import type { VercelRequest, VercelResponse } from '@vercel/node';

const API_KEY = "11f01a579d44c5255bc4fe1ec0fc3792";
const BASE_URL = `https://superheroapi.com/api.php/${API_KEY}`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const fullPath = req.url || '';
    
    // Remove prefix e inclui query params se houver
    const cleanedPath = fullPath.replace(/^\/api\/superheroProxy/, '');

    const apiUrl = `${BASE_URL}${cleanedPath}`;
    const apiResponse = await fetch(apiUrl);
    const data = await apiResponse.json();

    res.status(apiResponse.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
