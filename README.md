# Backend-Atividade-Trilha

Siga os passos abaixo para começar:

1. Clone este repositório: `git clone https://github.com/AFSFerreira/Backend-Atividade-Trilha`.
2. Instale as dependências: `npm install`.
3. Execute o projeto: `npm run dev`.

## Usuários de exemplo:

<div align="center">

| Tipo   | Email             | Senha     |
|--------|-------------------|-----------|
| Admin  | admin@email.com   | 12345678  |
| Comum  | user@email.com    | 12345678  |

</div>

## Exemplo de requisição de autenticação:

```bash
POST http://localhost:3333/sessions

{
	"email": "admin@email.com",
	"password": "12345678"
}
```

## Exemplo de requisição autenticada (rota protegida):

Para acessar rotas protegidas, inclua no cabeçalho da requisição o header `Authorization` com o token JWT obtido na autenticação:

```bash
PATCH http://localhost:3333/users/64eb6347-eeb8-45f6-a29f-4d831dc78fb1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4ODVlNjVmZS1hNzg4LTQ4Y2MtYjIzMC1hNjI3NWRhYmE5OTYiLCJpYXQiOjE3NTYwODExNDgsImV4cCI6MTc1NjA4MTQ0OH0.JstfOz2a7i3zG_j9pdZxfEAcvSgHY598ddVygDVLumY

{
	"name": "novo_nome"
}
```
