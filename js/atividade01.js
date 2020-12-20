//função construtora de objetos Produto
function Livro(id, nome, autores, estilo){
	this.id = id;
	this.nome = nome;
	this.autores = autores;
	this.estilo = estilo;
	var object = {id, nome, autores, estilo};
	adicionarLivro(object);
}

// programar a inserção dos novos livros no array listaLivros e sua adição no DOM
function adicionarLivro(livro){
	var count = 0;
	listaLivros[count] = livro;
	count++;
}

// programar a remoção do livro no array listaLivros e sua remoção no DOM
function removerLivro(livro){
	
}

var listaLivros = [];
		
$(function(){

	$("#adicionar").click(function(){
		var tituloLivro = $("#titulo").val();
		var autores = $("#autores").val();
		var estilo = $("#estilo").val();
		$("#acervo").append(
				$("<tr>")
					.append($("<td>").text(tituloLivro))
					.append($("<td>").text(autores))
					.append($("<td>").text(estilo))
					.append($("<td>")
						.append($("<a>")
								.attr("href", "#")
								.text("Apagar"))
					)
		)
		$("#titulo").val("");
		$("#autores").val("");
		$("#estilo").val("");
	});

	$("#acervo").on("click", "a", function(){
		$(this).parents("tr").remove();
	})

	$("#excluir").click(function(){
		
	})

	$("#apagarAcervo").click(function(){
		$("#acervo").empty();
		$("#acervo")
			.append($("<tr>")
						.append($("<th>").text("Título"))
						.append($("<th>").text("Autores"))
						.append($("<th>").text("Estilo"))
						.append($("<th>").text(""))
					)
	})
});