module.exports = {
    type: "object",
    properties: {
        nome: {type: "string"},
        magia: {type: "string"},
        ranking: {type: "string"},
        squadId: {type: 'integer'}
    },
    required: ["nome", "magia","ranking", "squadId"],
    additionalProperties: false
}

// "esquadraoId"
