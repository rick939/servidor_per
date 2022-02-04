const Ajv = require('ajv')
const ajv = new Ajv()
const addFormats = require("ajv-formats")
const membroSchema = require('../schemas/membro.schema')
addFormats(ajv)

function validarMembro(req, res, next) {
    const membro = req.body
    const validate = ajv.compile(membroSchema)
    const valid = validate(membro)
    if (valid){
        next()
    }else{
        res.status(400).json({msg: "Dados inválidos", erros: validate.errors})
    }
}


module.exports = validarMembro