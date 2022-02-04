const express = require('express')
// const req = require('express/lib/request')
// const res = require('express/lib/response')

const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const membroMid = require('../middleware/validarMembro.midd')

const membros = {}

router.post('/', membroMid)
router.put('/', membroMid)

router.get('/', (req, res) => {
    res.json({ membros: Object.values(membros) })
})

router.get('/:id', (req, res) => {
    res.json({membros: membros[req.params.id]})
})

router.post('/', (req, res) => {
    const membro = req.body
    const idMembro = uuidv4()
    // console.log(aluno)
    membro.id = idMembro
    membros[idMembro] = membro
    res.json({ msg: `Membro chamado: ${membro.nome} foi adicionado com sucesso!` })
})

router.put('/', (req, res) => {
    const id = req.query.id
    if (id && membros[id]) {
        const membro = req.body
        membro.id = id
        membros[id] = membro
        res.json({ msg: `Membro chamado: ${membro.nome} foi atualizado com sucesso!` })
    } else {
        res.status(400).json({ msg: "Membro não encontrado!" })
    }
})

router.delete('/', (req, res) => {
    const id = req.query.id
    if (id && membros[id]) {
        delete membros[id]
        res.json({ msg: "Membro foi deletado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Membro não encontrado!" })
    }
})

module.exports = router