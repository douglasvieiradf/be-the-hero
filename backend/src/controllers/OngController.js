const crypto = require('crypto');
const connection = require('../database/connection');  // exportando a conexão do banco de dados

module.exports = {
  async index (request, Response) {
      const ongs = await connection('ongs').select('*');

      return Response.json(ongs);
    },

    async create(request, response){
      const {name, email, whatsapp, city, uf } = request.body;

      const id = crypto.randomBytes(4).toString('HEX');
      
      await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
      })
      return Response.json({ id });
    }
};