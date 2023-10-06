// Cria a referência
const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] // Declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita o envio do formulário
    const nome = frm.inPaciente.value // Obtém o valor do nome do paciente
    pacientes.push(nome) // Faz um push do valor de nome para pacientes
    let lista = "" // Variável contadora/acumuladora (Serve para concatenação)

    // For "tradicional"
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n` //linha principal
    }
    respLista.innerText = lista // Exibe a lista de pacientes na página
    frm.inPaciente.value = ""
    frm.inPaciente.focus() // Posiciona o cursor no campo
}) // Fim do ouvinte submit

// Início do ouvinte click
frm.btUrgencia.addEventListener("click", () => {
    // Verifica se as validações do formulário estão ok (no caso, paciente is required´)
    if (frm.checkValidity() == false) {
        alert("Informe o nome do paciente em caráter de urgência")
        frm.inPaciente.focus() // Posiciona o cursor no campo inPaciente
        return // Retorna ao formulário
    }
    const nome = frm.inPaciente.value // Obtém nome do paciente 
    pacientes.unshift(nome) //adiciona paciente no início do vetor
    let lista = "" //criamos uma viriável lista para podermos utiliza-la dentro de forEach
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))//linha principal 

    //o forEach permite criar uma função para cada elemento do arry.
    //(paciente, i ) : callback, executa uma função para cada elemento do array
    //sintaxe do forEach é elemento, indice, ou seja, o elemento receberá o valor do arry e i será o indice que nós atribuímos mais tarde na lista    


    respLista.innerText = lista // Exibe a lista de pacientes na página

    // forEach aplicado sobre o array paciente
    frm.paciente.value = "" // Limpa o conteúdo do campo de formulário
    frm.inPaciente.focus() // Posiciona o cursor no campo
})

frm.btAtender.addEventListener("click", () => {
    // Se o tamanho do vetor = 0
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift() // Remove do início da fila (e obtém o nome)
    respNome.innerText = atender // Exibe o nome do paciente em atendimento
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
})