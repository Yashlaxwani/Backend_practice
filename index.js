require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {//(request,respond)
  res.send('Hello World!')
})

app.get('/youtube', (req, res) => {//(request,respond)
  res.send('<h2>yohoooooooooo</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})