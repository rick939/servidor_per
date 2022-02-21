module.exports = {
    type: "object",
    properties: {
        nome: {type: "string"},
        magia: {type: "string"},
        ranking: {type: "string"},
        tmId: {type: 'integer'}
    },
    required: ["nome", "magia","ranking","tmId"],
    additionalProperties: false
}