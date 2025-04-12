<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

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

Inicialize o banco de dados:

```bash
./vendor/bin/sail artisan migrate
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

Rodar os teste:

```bash
./vendor/bin/sail artisan test
```
