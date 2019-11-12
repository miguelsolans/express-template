/* models/obra
 * Author: Miguel Solans
 * Notes: Prize Model
 */

/*
_id
nome
desc
anoCriacao
periodo
compositor
duracao
 */
const mongoose = require('mongoose');

const obraSchema = mongoose.Schema({
    _id: String,
    nome: String,
    desc: String,
    anoCriacao: String,
    compositor: String,
    duracao: String
});

const Obra = mongoose.model('obras', obraSchema,'obras');

module.exports = Obra;