const express = require('express')

const router = express.Router()
// const { v4: uuidv4 } = require('uuid')
const esquadraoMid = require('../middleware/validarEsquadrao.midd')

const { Esquadrao } = require('../db/models')
// const esquadrao = {}

router.post('/', esquadraoMid)
router.put('/', esquadraoMid)

router.get('/', async (req, res) => {
    const squad = await Esquadrao.findAll()
    res.json({ esquadrao: squad })
})

router.get('/:id', async (req, res) => {
    const squad = await Esquadrao.findByPk(req.params.id)
    res.json({esquadrao: squad})
})

router.post('/', async (req, res) => {
    const squad = await Esquadrao.create(req.body)
    console.log(`Esquadrao chamado: ${squad.nome}`)
    res.json({ msg: `Esquadrao chamado: ${squad.nome} foi adicionado com sucesso!` })
})


router.delete('/', async (req, res) => {
    const id = req.query.id
    const squad = await Esquadrao.findByPk(id)
    if (squad) {
        await squad.destroy()
        res.json({ msg: "Esquadrao foi deletado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Esquadrao não encontrado!" })
    }
})

router.put('/', async (req, res) => {
    const id = req.query.id
    const squad = await Esquadrao.findByPk(id)
    if (squad) {
        squad.nome = req.body.nome
        await squad.save()
        res.json({ msg: `Esquadrao foi atualizado com sucesso!!!` })
    } else {
        res.status(400).json({ msg: "Esquadrao não encontrado!!!" })
    }
})
module.exports = router