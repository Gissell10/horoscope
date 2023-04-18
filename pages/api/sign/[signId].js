import { signs } from "../../../constants/signs";

export default async function handler(req, res) {
  const { query } = req;
  const { signId } = query;
  const sign = signs.find((s) => s.id === signId);

  if (sign) {
    console.log(process.env.OPENAI_API_KEY, "KEY");
    const apiUrl =
      "https://api.openai.com/v1/engines/text-davinci-002/completions";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `Write a daily horoscope for ${signId}`,
        max_tokens: 100,
        temperature: 0.7,
      }),
    });
    console.log(response);
    const data = await response.json();

    if (data && data.choices && data.choices.length > 0) {
      const horoscope = data.choices[0].text;
      res.status(200).json({ ...sign, horoscope });
    } else {
      res.status(500).json({ message: `Failed to fecth horoscope data` });
    }
  } else {
    return res
      .status(404)
      .json({ message: `Sign with id: ${signId} not found.` });
  }
}
