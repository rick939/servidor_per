const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express()
app.use(express.json())

const alunos = {}

app.get('/', (req, res) => {
    res.json({msg: "Hello from Express!"})
})

app.post('/alunos', (req, res) => {
    const aluno = req.body
    const idAluno = uuidv4()
    // console.log(aluno)
    aluno.id = idAluno
    alunos[idAluno] = aluno
    res.json({msg: `Aluno chamado ${aluno.nome} foi adicionado com sucesso!`})
})

app.get('/alunos', (req, res) => {
    res.json({alunos: Object.values(alunos)})
})

app.listen(8080, () => {
    console.log('Servidor pronto na porta 8080')
})