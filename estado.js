let estado = function (e){
    if(e == "SP"|| e == "RJ"){
        return "Pode"
    }else{
        return "Não Pode"
    }
}

module.exports = estado