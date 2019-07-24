module.exports = {
    registration: function (request, response) {
        if (!request.body) return response.sendStatus(400);
        //берем данные из формы html
        let userName = request.body.login;
        let userPass = request.body.pass;

        let hash = bcrypt.hashSync(userPass, salt);
        //создаем юзера
        let user = { name: userName, password: hash };
        id = 0;

        connection.query("INSERT INTO users VALUES ('"+user.name+"', '"+user.password+"', '"+id+"')",
            function (err, results, fields) {
                if(err){
                    console.log(err);
                    response.send({ "success": false });
                }else{
                    response.send({ "success": true });
                }
                console.log(results); // собственно данные
                console.log(fields); // мета-данные полей 
            });
    }
}