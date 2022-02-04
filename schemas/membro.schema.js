module.exports = {
    type: "object",
    properties: {
        nome: {type: "string"},
        magia: {type: "string"},
    },
    required: ["nome", "magia"],
    additionalProperties: false
}