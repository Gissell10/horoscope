import { signs } from "../../../constants/signs";

export default function handler(req, res) {
  const { query } = req;
  const { signId } = query;
  const sign = signs.find((s) => s.id === signId);
  const openAPIKEY = "xldfRRFfijasdfhbosr";

  if (sign) {
    const apiUrl = "https://api.openai.com/v1/engines/text-davinci-002/completions";
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Autorization": `Bearer ${process.env.openAPIKEY}`,
      }, 
      body: JSON.stringify({
        prompt:`Write a daily horoscope for ${sign.id}`, 
        max_tokens: 300, 
        temperature: 0.7,
      }),
    });
    const data = await response.json();
    const horoscope = data.choices[0].text;
    res.status(200).json({...sign, horoscope});
  } else {
    return res
      .status(404)
      .json({ message: `Sign with id: ${signId} not found.` });
  }
}
