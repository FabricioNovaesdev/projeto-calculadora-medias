const form = document.getElementById('form-atividade'); //  colocando o ID do formulario 
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Aprovado" />';  //Add Emoji celebrando
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emoji triste" />';    //Add Emoji triste
const atividades = [];                                  // toda vez que o input for chapado , o arei sera puxado para add o conteudo
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</spa>'; 
const spanReprovado = '<span class="resultado Reprovado">Reprovado</spa>'; 
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';                                        // Conteudo global para linhas em lista nao ser att e sumir 

form.addEventListener('submit', function(e) {           //  Criando evendo de submit , para nao att a tela 
    e.preventDefault();                                 //  Chamando a funcao 

    adicinaLinha ();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicinaLinha () { // funcao add linhas 
    const inputNomeAtividade = document.getElementById('nome-atividade');   // Chamando nome / atriburir ID no HTML !
    const inputNotaAtividade = document.getElementById('nota-atividade');   // Chamando nota / atriburir ID no HTML !

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`);
    }   else {     
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        //Respostas dados 
        let linha = '<tr>';                                                     // Add Nota , Atividade , aprovado ou nao / no corpo da tabela
        linha += `<td>${inputNomeAtividade.value}</td>`;                        // linha é igual a outro conteudo 
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`; // Lembrar de ADD variaveis de EMOJI 
        linha += `</tr>`;

        linhas += linha; 
    }

    inputNomeAtividade.value = ''; //Limpar o conteudo apos ser add 
    inputNotaAtividade.value = '';
}

function atualizaTabela () { 
    const corpoTabela = document.querySelector('tbody');                    // Add conteudo na tabela  html 
    corpoTabela.innerHTML = linhas;                                          //Conteudo dentro na TAG 
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2); // ToFixed para limitar as casas decimais 
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0; 

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return media = somaDasNotas / notas.length

}