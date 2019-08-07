@Automacao @Agendai @Clientes @CadastrarCliente @AbraaoSilva
Feature: Cadastrar cliente
  Cadastrar um cliente no sistema

  Scenario Outline: Usuário cadastrado com sucesso
    Given o usuario acessou a pagina de cadastro
    When incluir os dados nome "<nome>" email "<email>" aniversario "<aniversario>" telefone "<telefone>" senha "<senha>"
    Then o sistema deve salvar o cliente corretamente

    Examples:
      | nome                | email                     | aniversario  | telefone    | senha
      | Renato Augusto Gama | teste.renato2@hotmail.com | 06/03/1993   | 11982946271 | 12345
      
      