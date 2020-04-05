const model = require('../models/ferramenta');

module.exports = {
    create(req, res){
        const id = req.headers.authorization;
        const {  descricao, valor_dia } = req.body;

        model.create(id, descricao, valor_dia, (error)=>{
            if(error)return res.json({error});
            return res.send('Ferramenta criada');
        });
    },

    list(req, res){
        model.list( (error, result)=>{
            if(error)return res.json({error});
            return res.json(result);
        });
    },

    count(req, res){
        /*Buscar quantas vezes uma ferramenta já foi alugada*/
        const id = req.params.id;

        model.count(id, (error, result)=>{
            if(error)return res.json(error).send();

           // return res.json(result[0]);
            return res.json({
                id:result[0].id,
                descrição: result[0].descricao,
                "Quantidade de vezes alugada": result[0].count});
        });
    },

    alter(req, res){
        const { fields, values } = req.body;

        const ferramenta_id = req.query.id;
        const usuario_id =  req.headers.authorization;

        model.findID(ferramenta_id, (error, result)=>{
            if(error)return res.json({error});

            if(result.length<1)return res.status(404).send('Ferramenta não encontrada');/*Verificar se há resultados*/

            if(result[0].id_usuario != usuario_id)return res.status(403).send("Você não tem autorização para alterar essa ferramenta");/*Validar id do usuário*/

            model.alter(ferramenta_id, fields, values, (error)=>{
                if(error)return res.json({error});
                return res.send('Dados alterados');
            });
        });
    },

    delete(req, res){
        const ferramenta_id = req.query.id;
        const usuario_id =  req.headers.authorization;

        model.findID(ferramenta_id, (error, result)=>{/*Busca pelo ID da ferramenta*/
            if(error)return res.json({error});

            /*Verificar se há resultados*/
            if(result.length<1)return res.status(404).send('Ferramenta não encontrada');
           
             /*Validar id do usuário*/
            if(result[0].id_usuario != usuario_id)return res.status(403).send("Você não tem autorização para deletar essa ferramenta");

            /*Deletar ferramenta*/
            model.delete(ferramenta_id, (error)=>{
                if(error)return res.json({error});

                return res.send(`Ferramenta com id = ${usuario_id} deletada`);
            });
        });
    }
}