// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    });
}
