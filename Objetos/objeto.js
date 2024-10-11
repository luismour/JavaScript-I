const imoveis = [];
let opcao = "";

do {
  opcao = parseInt(
    prompt(
      "Bem-vindo ao cadastro de imovéis.\nTotal de imoveis: " +
        imoveis.length +
        "\n\nEscolha uma opção:\n1-Adicionar Imóvel\n2-Listar imóveis\n3-Sair"
    )
  );

  switch (opcao) {
    case 1:
      const imovel = {};

      imovel.proprietario = prompt("Infome o nome do proprietário do imóvel:");
      imovel.quartos = parseInt(
        prompt("Informe quantos quartos tem o imóvel:")
      );
      imovel.banheiros = parseInt(
        prompt("Informe quantos banheiros tem o imóvel:")
      );
      imovel.garagem = prompt("O imóvel tem garagem? (Sim/Não)");

      confirma = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui Garagem? " +
          imovel.garagem
      );

      if (confirma) {
        imoveis.push(imovel);
      }
      break;
    case 2:
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietario: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nGaragem: " +
            imoveis[i].garagem11
        );
      }
      break;

    case 3:
      alert("Saindo...");

    default:
      alert("Opção inválida");
      break;
  }
} while (opcao !== 3);
