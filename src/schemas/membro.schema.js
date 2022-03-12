module.exports = {
    type: "object",
    properties: {
        nome: {type: "string"},
        magia: {type: "string"},
        ranking: {type: "string"},
        // esquadraoId: {type: 'integer'}
    },
    required: ["nome", "magia","ranking"],
    additionalProperties: false
}

// "esquadraoId"