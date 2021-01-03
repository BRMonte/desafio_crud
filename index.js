var dados = []

function FulfillTable(params) {
  if (Array.isArray(dados)) {

    $("#tblDados tbody").html("")

    dados.forEach(function (item) {
      $("#tblDados tbody").append(`<tr>
        <td>${item.ID}</td>
        <td>${item.Quantity}</td>
        <td>${item.Name}</td>
        <td>${item.Price}</td>
      </tr>`)
    })
  }

}

$(function() {
  //EXECUTA AO CARREGAR DA SCREEN
  dados = JSON.parse(localStorage.getItem("__dados__"))

  if (dados) {
    FulfillTable()
  }
})
