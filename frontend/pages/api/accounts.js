import axios from "axios";

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      // retrieve payment intent data
        const {data} = await axios.post('https://127.0.0.1:8000/api/v1/dj-rest-auth/login/', req.body)
      res.status(200).send(data)
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
