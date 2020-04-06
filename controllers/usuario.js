const usuarioModel = require('../models/usuario');
const ferramentaModel = require('../models/ferramenta');
const aluguelModel = require('../models/alugueis');

module.exports = {
    create(req, res){
        const { usuario, senha } = req.body;

       usuarioModel.create(usuario, senha, (error)=>{
            if(error)return res.json({error});

            return res.send("Usuário criado");
        });
    },

    list(req, res){
       usuarioModel.list( (error, result)=>{
            if(error)return res.json({error});

            return res.json(result);
        });
    },

    show(req, res){
        const id = req.params.id;
        let data = {};

      usuarioModel.findID(id, (error, result)=>{
          if(error)return res.json({error});

          data.usuario = result[0];

          ferramentaModel.findIDUser(id, (error, result)=>{
            if(error)return res.json({error});

            data.ferrmamenta = result;

            aluguelModel.findIDUser(id, (error, result)=>{
                if(error)return res.json({error});

                data.aluguel = result;

                return res.json(data);
            });
          });
      });
    },

    alter(req, res){
        const { fields, values } = req.body;
        const id = req.headers.authorization;

       usuarioModel.alter(id, fields, values, (error)=>{
            if(error)return res.json({error});

            return res.send('Dados alterados');
        })
    },

    delete(req, res){
        const id = req.headers.authorization;
        ferramentaModel.findIDUser(id, (error, result)=>{/*Encontra ferramentas cadastradas pelo usuário*/
            if(error)return res.json({error});

            for(let I=0; I<result.length; I++)ferramentaModel.delete(result[I].id, (error)=>{/*Deleta cada ferramenta cadastrada pelo usuário*/
                if(error)return res.json({error});
            });
           usuarioModel.delete(id, (error, result)=>{/*Deleta o usuário*/
                if(error)return res.json({error});
                return res.send(`Usuario com id = ${id} deletado`);
            });
        });
    }
}