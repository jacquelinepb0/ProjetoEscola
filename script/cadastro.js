const cep = document.getElementById("cep")

cep.onblur = async function () {

    if(cep.length !== 8) return

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        const dados = await resposta.json()
console.log(dados)        
    } catch (error) {
        console.error(error)
    }

}