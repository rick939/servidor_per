module.exports = {
    type: "object",
    properties: {
        nome: {type: "string"},
        magia: {type: "string"},
        esquadrao: {type: "string"}
    },
    required: ["nome", "magia", "esquadrao"],
    additionalProperties: false
}