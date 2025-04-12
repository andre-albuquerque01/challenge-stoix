# Desafio de desenvolvimento de API em laravel e consumir no React

## Requisitos do Sistema

Para operar o sistema, são necessários os seguintes requisitos mínimos na sua máquina: PHP, Composer e Docker. O PHP e o Composer são essenciais para executar o Laravel, que contém a API principal do sistema. O Docker é utilizado para virtualizar o ambiente no qual a API é executada. Estes componentes garantem a funcionalidade e o desempenho ideais do nosso sistema de forma integrada e eficiente.

## Arquitetura do Sistema

O sistema utiliza as seguintes tecnologias:

- **Linguagens:** PHP
- **Banco de Dados:** MySQL
- **Frameworks:** Laravel 12, Next.js 15
- **Arquitetura da API:** MVC, RESTful
- **Outras Tecnologias:** Docker, React

## Como Iniciar o Sistema

### Passo 1: Download dos Arquivos

Clone o repositório:

```bash
git clone https://github.com/andre-albuquerque01/challenge-stoix.git
```

### Passo 2: Configuração do Back-end

Entre na pasta back-end:

```bash
cd /challenge-stoix/Api
```

Inicialize os pacotes do Laravel:

```php
composer install
```

Crie um arquivo `.env` na raiz do seu projeto e configure as variáveis de ambiente conforme necessário.
Execute `php artisan config:cache` para aplicar as configurações do arquivo `.env`.

Inicie o servidor da API:

```bash
./vendor/bin/sail up
```

Para desativar o servidor da API:

```bash
./vendor/bin/sail down
```

Inicialize o banco de dados:

```bash
./vendor/bin/sail artisan migrate
```

Rodar os teste:

```bash
./vendor/bin/sail artisan test
```

### Passo 3: Configuração do Front-end

Entre na pasta app:

Baixe as dependências do Node.js:

```bash
npm i
```

Inicie o servidor do Next.js:

```bash
npm run dev
```

### Passo 4: Acesso ao Sistema

Abra o navegador e acesse `http://localhost:3000` para utilizar o serviço.
