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
	console.log(listaLivros[count]);
	count++;
}

// programar a remoção do livro no array listaLivros e sua remoção no DOM
function removerLivro(titulolivro){
	listaLivros.splice(titulolivro);
	for(i=0; i<listaLivros.length; i++){
	console.log(listaLivros[i]);
}
}

var listaLivros = [];
		
$(function(){

	$("#adicionar").click(function(){
		var tituloLivro = $("#titulo").val();
		var autores = $("#autores").val();
		var estilo = $("#estilo").val();
		var id = 0;
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
		Livro(id, tituloLivro, autores, estilo);
		$("#titulo").val("");
		$("#autores").val("");
		$("#estilo").val("");
		id++;
	});

	$(document.getElementsByTagName("a").click(function(){
		removerLivro(document.getElementById("titulo"));
	}));


	$("#acervo").on("click", "a", function(){
		$(this).parents("tr").remove();
	})

	$("#excluir").click(function(){
		$("#titulo").val("");
		$("#autores").val("");
		$("#estilo").val("");
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