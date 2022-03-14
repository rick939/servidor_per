const express = require('express')
// const { v4: uuidv4 } = require('uuid')
const rotaMembro = require('./rotas/membro.rota')
const rotaEsquadrao = require('./rotas/esquadrao.rota')

const app = express()
app.use(express.json())

app.use('/membros', rotaMembro)
app.use('/esquadrao', rotaEsquadrao )
app.get('/', (req, res) => {
    res.json({msg: "Hello from Express!"})
})



app.listen(8080, () => {
    console.log('Servidor pronto na porta 8080')
})

/*
*/