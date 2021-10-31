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

Integração do PM com Heroku:
  Configs PM2:
    Fazer login no site do PM2
      https://id.keymetrics.io/api/oauth/login
    Criar um bucket e pegar as duas chaves env na aba "Docker"
    Adiiconar um arquivo ecosystem.config.yml
    Adicionar o start nos scripts do package.json
      "start": "pm2-runtime start ecosystem.config.yml"
  Config heroku
    Adicionar as duas chaves as variáveis de ambiente do heroku
    Pode adicionar uma terceira chave chamada PM2_MACHINE_NAME para dar um nome a essa máquina no PM2
    Faz o git commit
    Faz o push para o heroku
      git push heroku master

PM2 - Process Manager
  npm install pm2 --Instala nas dependências do projeto.
    Adicionar aos scripts do package.json
      "start": "pm2-runtime start ecosystem.config.yml"
    Adicionar a config:
      Criar o arquivo ecosystem.config.yml na raiz do projeto
      Com o conteúdo:
        apps:
        - name: app
          script: ./index.js

  npm install pm2@latest -g
  pm2 --version
  pm2 update

  Algumas utilidades:
    Reload automático;
    Abstração da complexidade de gerenciadores nativos;
    Gerenciamento de sessões;
    Facilidade de gerenciamento de múltiplos núcleos de processamento;
    Responsabilidade do uso de cores delegados ao PM;
    Gerenciamento de múltiplas aplicações no servidor;
    Escalonamento dos processos;
    Balanceamento de carga;
    Monitoramento;
    Gerenciamento de logs.
    Essas funções nos ajudam a manter nossa aplicação no ar 24/7 e com maior aproveitamento dos recursos do servidor, aumentando assim sua disponibilidade e resiliência.

  Comandos PM2
    Start
      pm2 start index.js -- Substitui o "node index.js"
      pm2 start index.js --name <NOME_DO_PROCESSO> -- Opcional, utilizado para dar nome ao processo
    Stop
      pm2 stop <NOME_DO_PROCESSO>
      pm2 start <NOME_DO_PROCESSO>
      pm2 stop all
    Delete
      pm2 delete <NOME_DO_PROCESSO>
    Restart
      pm2 restart <NOME_DO_PROCESSO>
    Reload
      pm2 reload <NOME_DO_PROCESSO>
    List
      pm2 list
      pm2 ls
      pm2 list --sort name:desc
    Show
      pm2 show <NOME_DO_PROCESSO>
    Logs
      pm2 logs <NOME_DO_PROCESSO>
    Monit
      pm2 monit
    Interface Web
      pm2 plus
    Modo Cluster
      Para realizar o load balancing e utilizar vários núcleos do processador
      Adicionar a tag abaixo ao start , reload ou restart
        --instances 2  -- Define a quantidade de núcleos que devem ser utilizados
        -i max -- utiliza todo os núcleos possíveis
  Ecosystem file
    O arquivo de configuração pode ser feito nos formatos Javascript , JSON ou YAML .
    pm2 [start|restart|stop|delete] ecosystem.config.yml
    pm2 start ecosystem.config.yml --only app-1
    pm2 start ecosystem.config.yml --only "app-1,app-2"
    pm2 start ecosystem.config.yml --env homolog
    pm2 start ecosystem.config.yml --env prod
      obs.: As opções de qual env usar são definidas no nome da váriavel "env_NOME"

  Auto restart
    Memória máxima
      pm2 start index.js --name <NOME_DO_PROCESSO> --max-memory-restart 20M
    Delay de restart
      pm2 start index.js --name <NOME_DO_PROCESSO> --restart-delay 100
    Estratégias de Backoff
      Isso é serve incrementar o delay do restart, para evitar abusos
      pm2 start index.js --name <NOME_DO_PROCESSO> --exp-backoff-restart-delay 100

  Assistindo a Alterações
    pm2 start index.js --name <NOME_DO_PROCESSO> --watch

    Exemplo de arquivo ecosystem.config.yml
      apps:
    - name: app
      script: ./index.js
      watch: ./
      max_memory_restart: 20M
      restart_delay: 100
      exp_backoff_restart_delay: 100
      exec_mode: cluster
      instances: 4
      env_prod:
        ENVIRONMENT: PRODUCTION
      env_homolog:
        ENVIRONMENT: HOMOLOG

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
