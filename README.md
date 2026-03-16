# API SENAIFLIX - Node.Js + Express
API REST simples para gerenciar filmes e séries

## Pré-requisitos
- Node.js instalado

## Como rodar

### Instalar dependências
```bash
npm i
```

### Iniciar o servidor
```bash
node index.js
```

### Acessar
Abra o navegador em: `http://localhost:3000´

## Endpoints

| Método | Endpoints | Descrição|
|--------|-----------|----------|
| GET | `/filmes` | Lista todos os filmes |
| GET | `/filmes/:id` | Busca um filmes específico |
| POST | `/filmes` | Cria um novo filmes |
| PUT | `/filmes/:id` | Atualiza um filmes |
| DELETE | `/filmes/:id` | Remove um filmes |

### Séries

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/series` | Lista todos os series|
| POST | `/series` | Cria um novo series |
| PUT | `/series/:id` | Atualiza um series |
| DELETE | `/series/:id` | Deleta um series |

## Tecnologias
- Node.Js
- Express

## Notas
- Os dados são armazenados em memória (reiniciar o servidor apaga tudo)
