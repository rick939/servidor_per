module.exports = {
    type: "object",
    properties: {
        nome: {type: "string"},
        magia: {type: "string"},
        ranking: {type: "string"}
    },
    required: ["nome", "magia","ranking"],
    additionalProperties: false
}