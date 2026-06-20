import express from "express"

const app = express()
const PORT = process.env.PORT ?? 8000

app.get('/', (req, res) => {
    return res.json({message: 'Server is Healthy v4.1', status: 'Docker Chal Gya 🐳', });
})

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))