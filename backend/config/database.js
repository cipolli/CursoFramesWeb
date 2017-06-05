const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "Not Validation: MIN: O O atributo informado '{VALUE}', é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "Not Validation: MAX: O O atributo informado '{VALUE}', é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "Not Validation: ENUM: O atributo informado '{VALUE}', não é valido para '{PATH}'."