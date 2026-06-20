import express from "express"

const app = express()
const PORT = process.env.PORT ?? 8000

app.get('/', (req, res) => {
    return res.json({message: 'Server is Healthy v9.9', status: 'Docker ke saath Caddy Chal Gya with internal TLS "HTTPS" 🐳🔥', });
})

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))