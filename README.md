Esse repositório é para treinamento de utilização do servidor express com jwt.

Módulos utilizados:
express
nodemon
dotenv -- Para variáveis de ambiente
jsonwebtoken -- Tokens para validação de usuários
multer -- Tratamento de arquivos
cors -- Permite que a api seja consumida
axios -- Para consumir a API
form-data -- Para liberar requisições do tipo multipart/form-data no Node.js
eslint
prettier
eslint-config-prettier
eslint-plugin-prettier

cloud.mongodb.com - Para servir o banco de dados
  https://www.mongodb.com/developer/how-to/use-atlas-on-heroku/

Heroku -- Para colocar a api online
  https://edubonizio-backend-test.herokuapp.com/

  Comandos de criação/deploy (Depois de criar o repo no gitHub e configurar):
    Criar novo remote para o Heroku: heroku create app-name (app-name opcional)
    Deploy: git push heroku master (heroku é o nome do remote, pode ser outro se foi alterado)
    Deploy de outra branch para a master do heroku: git push heroku branch-teste:master
    Deletetar o remote: git remote rm heroku
    Criar remote com nome diferente de "Heroku": heroku create meu-deploy-de-testes-29302 --remote heroku-homolog
    Renomear remote: git remote rename heroku heroku-origin (rename nome-atual novo-nome)
    Vincular um app existente a um novo remote: heroku git:remote -a meu-deploy-de-testes-29302 --remote heroku-test
  
  Comandos para acompanhamento:
    Mostrar serviços em execução: heroku apps
    Informações de um app expecifico: heroku apps:info nome-do-seu-app-12345
    Setar variável de ambiente: heroku config:set TESTE="texto qualquer" --app nome-do-seu-app-12345
    Listar variáveis de ambiente: heroku config --app nome-do-seu-app-12345
    Mostrar as ultimas 200 linhas do log: heroku logs -n 200 --app nome-do-seu-app-12345
    Log em tempo real:heroku logs --tail --app nome-do-seu-app-12345
  
  Deletar o app:
    heroku destroy --app meu-deploy-de-testes-29302 --confirm meu-deploy-de-testes-29302
