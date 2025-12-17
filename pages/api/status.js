function status(request, response){
    response.status(200).json({chave: "mensagem"});
}

export default status;

/*
curl http://localhost:3000/api/status --verbose
*/