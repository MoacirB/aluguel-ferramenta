const model = require('../models/usuario');
const ferramentaModel = require('../models/ferramenta');

module.exports = {
    create(req, res){
        const { usuario, senha } = req.body;

        model.create(usuario, senha, (error)=>{
            if(error)return res.json({error});

            return res.send("Usuário criado");
        });
    },

    list(req, res){
        model.list( (error, result)=>{
            if(error)return res.json({error});

            return res.json(result);
        });
    },

    show(req, res){
        const id = req.params.id;

        model.show(id, (error, result)=>{
            if(error)return res.json({error});

            return res.json(result[0]);
        });
    },

    alter(req, res){
        const { fields, values } = req.body;
        const id = req.headers.authorization;

        model.alter(id, fields, values, (error)=>{
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
            model.delete(id, (error, result)=>{/*Deleta o usuário*/
                if(error)return res.json({error});
                return res.send(`Usuario com id = ${id} deletado`);
            });
        });
    }
}