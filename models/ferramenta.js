const connection = require('../config/connection')();
module.exports = {
    create(id, descricao, valor_dia, callback){
        try{
            connection.query(`insert into ferramenta (descricao, valor_dia, id_usuario) values ("${descricao}",${valor_dia},${id})`, callback);
        }catch(err){console.log(`Erro:${err}`);}
    },

    list(callback){
        try{
            connection.query('select * from ferramenta', callback);
        }catch(err){console.log(`Erro:${err}`);}
    },

    alter(id, fields, values, callback){
        try{
            let filter = `${fields[0]} = "${values[0]}"`;
            for(let I=1; I<fields.length; I++){filter+=`, ${fields[I]} = "${values[I]}"`;}
            connection.query(`update ferramenta set ${filter} where id = ${id}`,callback);
        }catch(err){console.log(`Error:${err}`);}
    },

    delete(id, callback){
        try{
            connection.query(`delete from ferramenta where id=${id}`,callback);
        }catch(err){console.log(`Error:${err}`);}
    },

    findID(id, callback){
        try{
            connection.query(`select * from ferramenta where id=${id}`,callback);
        }catch(err){console.log(`Error:${err}`);}
    },

    findIDUser(id, callback){
        try{
            connection.query(`select id from ferramenta where id_usuario=${id}`,callback);
        }catch(err){console.log(`Error:${err}`);}
    }
}