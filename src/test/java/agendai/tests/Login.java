package agendai.tests;

import org.openqa.selenium.support.PageFactory;

import agendai.paginas.PaginaLogin;
import agendai.selenium.Robo;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Login extends Robo {

    private PaginaLogin paginaLogin;
    protected Scenario cenario;


    public void carregarPagina() {
        this.paginaLogin = new PaginaLogin();
        PageFactory.initElements(driver, this.paginaLogin);
    }

    @Before(value = "@LoginAgendai")
    public void before(Scenario scenario){
        this.cenario = scenario;
    }

    @Given("o usuario acessou a pagina de login")
    public void oUsuarioAcessouAPaginaDeLogin() {
        acessarPagina("/login");
    }

    @When("digitar o email {string} e a senha {string} no login")
    public void digitarOEmailEASenha(String email, String senha) {
        carregarPagina();
        digitar(paginaLogin.getEmail(), email);
        digitar(paginaLogin.getPassword(), senha);
        clicar(paginaLogin.getEntrar());
    }
}
