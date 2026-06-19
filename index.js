import express from "express"

const app = express()
const PORT = process.env.PORT ?? 8000

app.get('/', (req, res) => {
    return res.json({message: 'Serverv1 is Healthy'});
})

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))