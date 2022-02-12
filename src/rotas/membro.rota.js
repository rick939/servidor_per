const express = require('express')
// const req = require('express/lib/request')
// const res = require('express/lib/response')

const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const membroMid = require('../middleware/validarMembro.midd')

// const membros = {}
const { Membros } = require('../db/models')

router.post('/', membroMid)
router.put('/', membroMid)

router.get('/', async (req, res) => {
    const membros = await Membros.findAll()
    res.json({ membros: membros })
})

router.get('/:id',async (req, res) => {
    const membro = await Membros.findByPk(req.params.id)
    res.json({membros: membro})
})

router.post('/', async (req, res) => {
    const membro = await Membros.create(req.body)
    res.json({ msg: `Membro chamado: ${membro.nome} foi adicionado com sucesso!` })
})

router.put('/', async (req, res) => {
    const id = req.query.id
    const membro = await Membros.findByPk(id)
    if (membro) {
        membro.nome = req.body.nome
        membro.magia = req.body.magia
        //O codigo não rodou a parte do Ranking
        // membro.ranking = req.boby.ranking
        await membro.save()
        res.json({ msg: `Aliado foi atualizado com sucesso!!!` })
    } else {
        res.status(400).json({ msg: "Aliado não encontrado!!!" })
    }
})

router.delete('/', async (req, res) => {
    const id = req.query.id
    const membro = await Membros.findByPk(id)
    if (membro) {
        await membro.destroy()
        res.json({ msg: "Infelizmente, perdemos um aliado!!!" })
    } else {
        res.status(400).json({ msg: "Aliado não encontrado!" })
    }
})

module.exports = router