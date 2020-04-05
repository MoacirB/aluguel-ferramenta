ferramentaModel = require('../models/ferramenta');
aluguelModel = require('../models/alugueis');

module.exports = {
    create(req, res){
        const { id_ferramenta, quantidade_dias, data } = req.body;
        const id_usuario = req.headers.authorization;

        ferramentaModel.findID(id_ferramenta, (error, result)=>{
            if(error)return res.json({error});

            if(result.length<1)return res.status(404).send('Ferramenta não encontrada');

            aluguelModel.create(id_usuario, id_ferramenta, quantidade_dias, data, (error)=>{
                if(error)return res.json({error});

                return res.json('Transação confirmada');
            });
        });
    },

    list(req, res){
        aluguelModel.list( (error, result)=>{
            if(error)return res.json({error});

            return res.json(result);
        });
    },

    alter(req, res){
        const { fields, values } = req.body;
        const id_aluguel = req.query.id;
        const id_usuario = req.headers.authorization;

        aluguelModel.findID(id_aluguel, (error, result)=>{
            if(error)return res.json({error});

            if(result.length<1)return res.status(404).send('Aluguel/Empréstimo não encontrado');/*Verificar se há resultados*/

            if(result[0].id_usuario != id_usuario)return res.status(403).send("Você não tem autorização para fazer laterações");/*Validar id do usuário*/

            aluguelModel.alter(id_aluguel, fields, values, (error)=>{
                if(error)return res.json({error});
                return res.send('Dados alterados');
            });
        });
    },

    delete(req, res){
        const aluguel_id = req.query.id;
        const usuario_id =  req.headers.authorization;

        aluguelModel.findID(aluguel_id, (error, result)=>{/*Busca pelo ID da ferramenta*/
            if(error)return res.json({error});

            /*Verificar se há resultados*/
            if(result.length<1)return res.status(404).send('Aluguel/Empréstimo não encontrado');
           
             /*Validar id do usuário*/
            if(result[0].id_usuario != usuario_id)return res.status(403).send("Você não tem autorização para deletar");

            /*Deletar ferramenta*/
            aluguelModel.delete(aluguel_id, (error)=>{
                if(error)return res.json({error});

                return res.send(`Aluguel deletado`);
            });
        });
    }
}