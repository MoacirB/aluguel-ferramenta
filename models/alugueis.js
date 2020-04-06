const connection = require('../config/connection')();

module.exports = {
    create(id_usuario, id_ferramenta, quantidade_dias, data, callback){
        try{
            connection.query(`insert into aluguel (id_usuario, id_ferramenta, quantidade_dias, data) values (${id_usuario}, ${id_ferramenta}, ${quantidade_dias}, "${data}")`, callback);
        }catch(err){console.log(err);}
    },

    list(callback){
        try{
            connection.query('select * from aluguel', callback);
        }catch(err){console.log(err);}
    },

    alter(id, fields, values, callback){
        try{
            let filter = `${fields[0]} = "${values[0]}"`;
            for(let I=1; I<fields.length; I++){filter+=`, ${fields[I]} = "${values[I]}"`;}
            connection.query(`update aluguel set ${filter} where id = ${id}`,callback);
        }catch(err){console.log(`Error:${err}`);}
    },

    delete(id, callback){
        try{
            connection.query(`delete from aluguel where id=${id}`,callback);
        }catch(err){console.log(`Error:${err}`);}
    },

    findID(id, callback){
        try{
            connection.query(`select id, id_usuario from aluguel where id=${id}`,callback);
        }catch(err){console.log(`Error:${err}`);}
    },

    findIDUser(id, callback){
        try{
            connection.query(`select id, id_ferramenta, quantidade_dias, data from aluguel where id_usuario=${id}`,callback);
        }catch(err){console.log(`Error:${err}`);}
    }
}