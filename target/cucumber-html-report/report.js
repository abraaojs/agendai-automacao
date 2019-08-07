$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/casos_de_testes/loja/CadastrarCliente.feature");
formatter.feature({
  "name": "Cadastrar cliente",
  "description": "  Cadastra um cliente no sistema",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Automacao"
    },
    {
      "name": "@Loja"
    },
    {
      "name": "@Clientes"
    },
    {
      "name": "@CadastrarCliente"
    },
    {
      "name": "@JonatasKirsch"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Cliente válido",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "o usuario acessou a pagina de cadastro",
  "keyword": "Given "
});
formatter.step({
  "name": "incluir o cliente de primeiro nome \"\u003cprimeiro_nome\u003e\" sobrenome \"\u003cultimo_nome\u003e\" email \"\u003cemail\u003e\" telefone \"\u003ctelefone\u003e\" senha \"\u003csenha\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "o sistema deve salvar o cliente corretamente",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "primeiro_nome",
        "ultimo_nome",
        "email",
        "telefone",
        "senha"
      ]
    },
    {
      "cells": [
        "Teste",
        "Jônatas Kirsch",
        "teste.jonatas2@mailcatch.com",
        "1185859696",
        "159753"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Cliente válido",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Automacao"
    },
    {
      "name": "@Loja"
    },
    {
      "name": "@Clientes"
    },
    {
      "name": "@CadastrarCliente"
    },
    {
      "name": "@JonatasKirsch"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuario acessou a pagina de cadastro",
  "keyword": "Given "
});
formatter.match({
  "location": "Clientes.oUsuarioAcessouAPaginaDeCadastro()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat robo.Robo.acessarPagina(Robo.java:65)\n\tat passos.loja.Clientes.oUsuarioAcessouAPaginaDeCadastro(Clientes.java:36)\n\tat ✽.o usuario acessou a pagina de cadastro(file:src/test/java/casos_de_testes/loja/CadastrarCliente.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "incluir o cliente de primeiro nome \"Teste\" sobrenome \"Jônatas Kirsch\" email \"teste.jonatas2@mailcatch.com\" telefone \"1185859696\" senha \"159753\"",
  "keyword": "When "
});
formatter.match({
  "location": "Clientes.incluirOClienteDePrimeiroNomeSobrenomeEmailTelefoneSenha(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema deve salvar o cliente corretamente",
  "keyword": "Then "
});
formatter.match({
  "location": "Clientes.oSistemaDeveSalvarOClienteCorretamente()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/java/casos_de_testes/loja/Login.feature");
formatter.feature({
  "name": "Logar cliente",
  "description": "  Loga um cliente no sistema",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Automacao"
    },
    {
      "name": "@Loja"
    },
    {
      "name": "@LoginLoja"
    },
    {
      "name": "@JonatasKirsch"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login valido",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "o usuario acessou a pagina de login",
  "keyword": "Given "
});
formatter.step({
  "name": "digitar o email \"\u003cemail\u003e\" e a senha \"\u003csenha\u003e\" no login",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "senha"
      ]
    },
    {
      "cells": [
        "teste.cadastro@mailcatch.com",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login valido",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Automacao"
    },
    {
      "name": "@Loja"
    },
    {
      "name": "@LoginLoja"
    },
    {
      "name": "@JonatasKirsch"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuario acessou a pagina de login",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.oUsuarioAcessouAPaginaDeLogin()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat robo.Robo.acessarPagina(Robo.java:65)\n\tat passos.loja.Login.oUsuarioAcessouAPaginaDeLogin(Login.java:38)\n\tat ✽.o usuario acessou a pagina de login(file:src/test/java/casos_de_testes/loja/Login.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "digitar o email \"teste.cadastro@mailcatch.com\" e a senha \"123456\" no login",
  "keyword": "When "
});
formatter.match({
  "location": "Login.digitarOEmailEASenha(String,String)"
});
formatter.result({
  "status": "skipped"
});
});