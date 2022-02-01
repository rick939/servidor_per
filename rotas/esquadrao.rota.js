const express = require('express')
// const req = require('express/lib/request')
// const res = require('express/lib/response')

const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const time = {}

router.get('/', (req, res) => {
    res.json({ time: Object.values(time) })
})

router.get('/:id', (req, res) => {
    res.json({time: time[req.params.id]})
})

router.post('/', (req, res) => {
    const time = req.body
    const idTime = uuidv4()
    // console.log(aluno)
    time.id = idTime
    time[idTime] = time
    res.json({ msg: `Esquadrão chamado: ${time.nome} foi adicionado com sucesso!` })
})

router.put('/', (req, res) => {
    const id = req.query.id
    if (id && time[id]) {
        const time = req.body
        time.id = id
        time[id] = time
        res.json({ msg: `Esquadrão chamado: ${time.nome} foi atualizado com sucesso!` })
    } else {
        res.status(400).json({ msg: "Esquadrão não encontrado!" })
    }
})

router.delete('/', (req, res) => {
    const id = req.query.id
    if (id && time[id]) {
        delete time[id]
        res.json({ msg: "Esquadrão foi deletado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Esquadrão não encontrado!" })
    }
})

module.exports = router