const vagas = [];

function listarVagas() {
  const vagasText = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.lenght + "candidatos)\n";
    return textoFinal;
  }, "");
  alert(vagasText);
}

function novaVaga() {
  const nome = prompt("Informe o nome da vaga:");
  const descricao = prompt("Informe a descrição da vaga");
  const dataLimite = prompt("Informe a data limite da vaga (dd/mm/aaaa)");

  const confirmacao = confirm(
    "Deseja criar uma nova vaga?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData Limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada");
  }
}

function exibirVaga() {
  const indice = prompt("Infome o índice da vaga que deseja exibir:");

  if (indice >= vagas.length || indice < 0) {
    alert("Índice inválido!");
    return;
  }
  const vaga = vagas[indice];

  const candidatosText = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");
  alert(
    "Vaga " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição " +
      vaga.descricao +
      "\nData Limite" +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.lenght +
      "\nCandidatos inscritos: " +
      candidatosText
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a):");
  const indice = prompt(
    "Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:"
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga?" +
      indice +
      "?\n" +
      "\nNome: " +
      vaga.nome +
      "\nDescrição " +
      vaga.descricao +
      "\nData Limite" +
      vaga.dataLimite
  );
  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluida!");
  }
}

function exibirMenu() {
  const opcao = parseInt(
    prompt(
      "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções" +
        "\n1. Listar vagas disponivéis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Exibir uma vaga" +
        "\n4. Inscrever candidato(a)" +
        "\n5. Excluir vaga" +
        "\n6. Sair"
    )
  );
  return opcao;
}
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case 1:
        listarVagas();
        break;

      case 2:
        novaVaga();
        break;

      case 3:
        exibirVaga();
        break;

      case 4:
        inscreverCandidato();
        break;

      case 5:
        excluirVaga();
        break;

      case 6:
        alert("Saindo...");
        break;

      default:
        alert("Opção Inválida.");
        break;
    }
  } while (opcao !== "6");
}

executar();
