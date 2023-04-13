import { use, useEffect, useState } from "react";

export default function Prediction({ id, name, date }) {
  const [horoscope, setHoroscope] = useState("");

  useEffect(() => {
    const fetchHoroscope = async () => {
      const response = await fetch(
        `https://api.openai.com/v1/engines/text-davinci-002/completions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "aplication/json",
          },
        }
      );
    };
  }, [id]);

  return (
    <>
      <span>{id}</span>
    </>
  );
}
