// Primeiro precisamos criar o app usando o express
const express = require("express")
const app = express()

// Vai permitir que aceite JSON na requisição
app.use(express.json())

const filmes = [
    {
        id: 1,
        description: "Miles Morales, um jovem que reside no Brooklyn se ttransforma no Homem-Aranha e enfrenta dificuldades em consiliar a vida de herói com a vida de um adolescente. Em meio a suas aventuras, participa de um 'evento multiversal' e conhece todos os heróis aranhas de cada multiverso.",
        title: "Homem-Aranha no Aranhaverso",
        genre: "Animação, Ação",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKngXl0nZE3oUQKxRQtKTBuTJjE2gPLbLTQ&s",
        releaseYear: 2018
    }
]


app.get("/filmes", (req, res) => {
    return res.json(filmes)
})

// Buscando pelo gênero
app.get("/filmes/genre", function(req, res){
    const generoBuscado = req.query.genre; // pegou o que vem na query string

    if (generoBuscado) { // se o user passou um gênero na URL, filtramos o array
        const filmeFiltrado = filmes.filter(f => 
            f.genre.toLowerCase().includes(generoBuscado.toLowerCase()));
        return res.json(filmeFiltrado);
        }

        return res.json(filmes); // se não passou nenhum gênero, retorna a lista completa original
    
})

// Criando um filme novo 
    app.post("/filmes", function(req, res){
    const title = req.body.title
    const description = req.body.description
    const genre = req.body.genre
    const image = req.body.image
    const releaseYear = req.body.releaseYear

    if(!title || !description || !genre || !image || !releaseYear){
        return res.status(400).json({erro: "Todas as informações são obrigatórias!"})
    }

    const novoFilme = {
        id: filmes.length + 1,
        title: title,
        description: description,
        genre: genre,
        image: image,
        releaseYear: releaseYear
    }


    // Impede títulos com menos de 2 caracteres
    if (title.trim().length < 1) {
        return res.status(400).json({ erro: "O título deve ter pelo menos 2 caracteres!" });
    }


    // Adiciona o novo filme no final da lista
    filmes.push(novoFilme)
    res.status(201).send()

    })

// Como buscar pelo id

app.get("/filmes/:id", function(req, res) {
    const id = parseInt(req.params.id) // está em parêntese com parseInt pois o id é um número

    // MUDANÇA AQUI: 'filme' no singular recebe a busca feita em 'filmes' plural
    const filmeEncontrado = filmes.find(a => a.id === id)

    if (filmeEncontrado) {
        return res.json(filmeEncontrado)
    } else {
        return res.status(404).json("Filme não encontrado")
    }
})


const series = [
    {
        id: 1,
        description: "Anne, uma jovem órfã de 13 anos é enviada por engano para ser adotada por um casal de irmãos idosos. Mesmo enfrentando tantos desafios e preconceitos, leva a vida com leveza e imaginação, mostrando sua criatividade e inocência sempre disposta a aprender e ajudar.",
        title: "Anne With An 'E'",
        genre: "Drama",
        image: "https://i.pinimg.com/236x/d3/4c/e0/d34ce05795d36ee7c58fd96d7bfc3219.jpg",
        releaseYear: 2017
    }
]

app.get("/series", (req, res) => {
    return res.json(series)
})

//Buscando pelo gênero

app.get("/series/genre", function(req, res){
    const generoProcurado = req.query.genre; // pegou o que vem na query string

    if (generoProcurado) { // se o user passou um gênero na URL, filtramos o array
        const serieFiltrada = series.filter(f => 
            f.genre.toLowerCase().includes(generoProcurado.toLowerCase()));
        return res.json(serieFiltrada);
        }

        return res.json(series); 
    
})

// Criando uma serie nova
    app.post("/series", function(req, res){
    const title = req.body.title
    const description = req.body.description
    const genre = req.body.genre
    const image = req.body.image
    const releaseYear = req.body.releaseYear

    if(!title || !description || !genre || !image || !releaseYear){
        return res.status(400).json({erro: "Todas as informações são obrigatórias!"})
    }

    const novaSerie = {
        id: series.length + 1,
        title: title,
        description: description,
        genre: genre,
        image: image,
        releaseYear: releaseYear
    }

    // Adiciona a nova serie no final da lista
    series.push(novaSerie)
    res.status(201).send()

    })

// Como buscar com id

app.get("/series/:id", function(req, res) {
    const id = parseInt(req.params.id) 

    const serieEncontrada = series.find(a => a.id === id)

    if (serieEncontrada) {
        return res.json(serieEncontrada)
    } else {
        return res.status(404).json("Série não encontrada")
    }
})

// Segundo passo, colocar o servidor para rodar
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})