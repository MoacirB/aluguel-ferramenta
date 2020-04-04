# Aluguel/Empréstimo de Ferramentas
 API REST para aluguel/empréstimo de ferramentas em Express/NodeJS

##Detalhes
Requisições e respostas em formato JSON

##Usuários
###URL:/usuario
####GET
Retorna uma lista com todos os usuários cadastrados

####POST
Cadastra um usuário
Body:
```JSON
{
    "usuario":"usuario",
    "senha":"senha"
}
```
#####Exemplo para teste
```JSON
{
    "usuario":"MArcelo",
    "senha":"1234"
}
```



####PUT
Altera campos do usuário
Header: authorization = ID do usuário
Body:
```JSON
{
    "fields": ["field_1", "field_2"],
    "values": ["value_1", "value_2"]
}
```

#####Exemplo para teste
```JSON
{
    "fields": ["usuario", "senha"],
    "values": ["Marcelo", "marcelo1234"]
}
```

####DELETE
Deleta o usuário autenticado e as ferramentas cadastradas por ele
Header: authorization = ID do usuário

##Ferramentas
###URL:/ferramenta
####GET
Retorna uma lista das ferramentas cadastradas

####POST
Cadastra uma ferramenta a partir do usuário autenticado
Header: authorization = ID do usuário
Body:
```JSON
{
    "descricao": "descrição",
    "valor_dia": valor
}
```
#####Exemplo para teste
```JSON
{
    "descricao": "Martelo",
    "valor_dia": 2.50
}
```



####PUT
Altera campos de uma ferramenta
Header: authorization = ID do usuário
Query: id=id_ferramenta *Ex: /ferramenta?id=1*
Body:
```JSON
{
    "fields": ["field_1", "field_2"],
    "values": ["value_1", "value_2"]
}
```

#####Exemplo para teste
```JSON
{
    "fields": ["valor_dia"],
    "values": [3.25]
}
```


####DELETE
Deleta uma ferramenta do usuário cadastrado
Header: authorization = ID do usuário
Query: id=id_ferramenta *Ex: /ferramenta?id=1*