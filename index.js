import express from "express"

const app = express()
const PORT = process.env.PORT ?? 8000

app.get('/', (req, res) => {
    return res.json({message: 'Server is Healthy v5.139', status: 'Docker ke saath Caddy Chal Gya 🐳🔥', });
})

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))