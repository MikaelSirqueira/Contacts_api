<h1 align="center"> 📱 Contacts API 👽 </h1>

  
## 💻 Projeto

- Esta API foi desenvolvida para gerenciar uma lista de contatos, permitindo o registro, atualização, listagem e exclusão desses contatos.
- Desenvolvido utilizando:
  - Node.js v22
  - TypeScript
  - Express
  - Zod (validação)
  - Prisma ORM
  - MySQL

<br>

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js v22+
- MySQL instalado e em execução
- `npm` instalado

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/MikaelSirqueira/Contacts_api.git

# Acesse a pasta do projeto
cd Contacts_api

# Crie o arquivo .env com suas configurações:
# Exemplo:
# DATABASE_URL="mysql://${DB_USER}:${DB_PASS}@localhost:${DB_PORT}/contatosdb"
# DB_USER=user
# DB_PASS=password
# DB_PORT=3306
# PORT=3000

# rodar esses comandos
npm install
npx prisma generate
npx prisma db push

# Inicie o servidor
npm run dev
```

<br>

## Finalização ❤

Feito por Mikael Sirqueira
