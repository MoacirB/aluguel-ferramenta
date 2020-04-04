const model = require('../models/ferramenta');

module.exports = {
    create(req, res){
        let id = req.headers.authorization;
        let {  descricao, valor_dia } = req.body;

        model.create(id, descricao, valor_dia, (error)=>{
            if(error)return res.json({error});
            return res.send('Ferramenta criada');
        });
    },

    list(req, res){
        model.list( (error, result)=>{
            if(error)return res.json({error});
            res.json(result);
        });
    },

    alter(req, res){
        let { fields, values } = req.body;

        let ferramentaID = req.query.id;
        let usuarioID =  req.headers.authorization;

        model.findID(ferramentaID, (error, result)=>{
            if(error)res.json({error});

            if(result.length<1)return res.status(404).send('ID da ferramenta não encontrado');/*Verificar se há resultados*/

            if(result[0].id_usuario != usuarioID)return res.status(403).send("Você não tem autorização para alterar essa ferramenta");/*Validar id do usuário*/

            model.alter(ferramentaID, fields, values, (error)=>{
                if(error)return res.json({error});
                return res.send('Dados alterados');
            });
        });
    },

    delete(req, res){
        let ferramentaID = req.query.id;
        let usuarioID =  req.headers.authorization;

        model.findID(ferramentaID, (error, result)=>{/*Busca pelo ID da ferramenta*/
            if(error)res.json({error});

            /*Verificar se há resultados*/
            if(result.length<1)return res.status(404).send('ID da ferramenta não encontrado');
           
             /*Validar id do usuário*/
            if(result[0].id_usuario != usuarioID)return res.status(403).send("Você não tem autorização para deletar essa ferramenta");

            /*Deletar ferramenta*/
            model.delete(ferramentaID, (error)=>{
                if(error)return res.json({error});

                res.send(`Ferramenta com id = ${usuarioID} deletada`);
            });
        });
    }
}