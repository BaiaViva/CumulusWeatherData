# CumulusWeatherData ☀️
Projeto com RaspberryPi, coleta de dados meteorológicos <i>in situ</i> na Baía de Guanabara - RJ.

## Descrição
Utilização do Vantage Vue, da Davis Instruments, painel solar, Raspberry Pi 4, JS, Node.js, Axios, redes móveis e servidor.

## Instalação de dependências usando NodeJS com Docker

### Instalar Docker

- Instalar pacote docker.io:

```shell
sudo apt install docker.io
```

- Inicializa o Docker e configura para inicializar junto com o sistema:

```shell
sudo systemctl enable --now docker
```

- Testar se funcionou:

```shell
sudo docker run hello-world
```

### Instalar Docker-Compose

```shell
sudo apt install docker-compose
```
## Baixar e executar localmente os projetos do repositório

### Baixar

```shell
git clone https://github.com/BaiaViva/CumulusWeatherData.git
```

## Agora vamos colocar o projeto para funcionar. Na raiz do projeto execute o comando:

```shell
sudo docker-compose up -d
```

E agora, execute:

```shell
sudo docker exec -it cumulus_weather_data bash
```

Autores:
> Yuri Galdino e Rodrigo Lucas

Mentoria:
> <a href="https://www.linkedin.com/in/fabioh/" target="_blank">Fábio Hochleitner</a>

 <i>for <a href="http://www.lamce.coppe.ufrj.br/" target="_blank">Laboratory for Computational Methods in Engineering (LAMCE/COPPE/UFRJ)</a></i>
