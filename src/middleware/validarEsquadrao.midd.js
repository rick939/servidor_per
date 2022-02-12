const Ajv = require('ajv')
const ajv = new Ajv()
const addFormats = require("ajv-formats")
const esquadraoSchema = require('../schemas/esquadrao.schema')
addFormats(ajv)

function validarEsquadrao(req, res, next) {
    const esquadrao = req.body
    const validate = ajv.compile(esquadraoSchema)
    const valid = validate(esquadrao)
    if (valid){
        next()
    }else{
        res.status(400).json({msg: "Dados inválidos", erros: validate.errors})
    }
}


module.exports = validarEsquadrao