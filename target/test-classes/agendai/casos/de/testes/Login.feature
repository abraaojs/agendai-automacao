@Automacao @Agendai @LoginAgendai @AbraaoSilva
Feature: Logar cliente
  Loga um cliente no sistema

  Scenario Outline: Login valido
    Given o usuario acessou a pagina de login
    When digitar o email "<email>" e a senha "<senha>" no login

    Examples:
      | email              | senha  |
      | abraao@agendai.com | 123456 |