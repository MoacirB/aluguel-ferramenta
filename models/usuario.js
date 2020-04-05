const connection = require('../config/connection')();
module.exports = {
    create(usuario, senha, callback){
        try{
            connection.query(`insert into usuario (usuario, senha) values ("${usuario}","${senha}")`, callback);
        }catch(err){console.log(`Error:${err}`);}
    },

    list(callback){
        try{
            connection.query('select * from usuario',callback);
        }catch(err){console.log(`Error:${err}`);}
    },

    alter(id, fields, values, callback){
        try{
            let filter = `${fields[0]} = "${values[0]}"`;
            
            for(let I=1; I<fields.length; I++){filter+=`, ${fields[I]} = "${values[I]}"`;}

            connection.query(`update usuario set ${filter} where id = ${id}`,callback);
        }catch(err){console.log(`Error:${err}`);}
    },

    delete(id, callback){
        try{
            connection.query(`delete from usuario where id=${id}`,callback);
        }catch(err){console.log(`Error:${err}`);}
    },

    findID(id, callback){
        try{
            connection.query(`select * from usuario where id=${id}`,callback);
        }catch(err){console.log(`Error:${err}`);}
    },

    show(id, callback){
        try{
            const query = `SELECT U.id, U.usuario, A.id_ferramenta, A.data, A.quantidade_dias, F.descricao, F.valor_dia FROM usuario AS U INNER JOIN aluguel AS A INNER JOIN ferramenta as F WHERE ${id} = U.id AND ${id} = A.id_usuario and ${id} = A.id_usuario`;
            connection.query(query, callback);
        }catch(err){console.log(`Error:${err}`)};
    }
}