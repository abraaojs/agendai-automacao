package agendai.tests;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;

import agendai.paginas.PaginaCadastroCliente;
import agendai.selenium.Robo;

public class Clientes extends Robo {

    private PaginaCadastroCliente paginaCadastro;
    protected Scenario cenario;

    public void carregarPaginaCadastroCliente() {
        this.paginaCadastro = new PaginaCadastroCliente();
        PageFactory.initElements(driver, this.paginaCadastro);
    }

    @Before(value = "@Clientes")
    public void before(Scenario scenario){
        this.cenario = scenario;
    }

    @Given("o usuario acessou a pagina de cadastro")
    public void oUsuarioAcessouAPaginaDeCadastro() {
        acessarPagina("/cadastro");
    }

    @When("incluir os dados nome {string} email {string} aniversario {string} telefone {string} senha {string}")
    public void cadastrarCliente(String nome, String email, String aniversario, String telefone, String senha) {
        carregarPaginaCadastroCliente();
        digitar(paginaCadastro.getNome(), nome);
        digitar(paginaCadastro.getEmail(), email);
        digitar(paginaCadastro.getAniversario(), aniversario);
        digitar(paginaCadastro.getWhatsapp(), telefone);
        digitar(paginaCadastro.getSenha(), senha);
        digitar(paginaCadastro.getConfirmarSenha(), senha);
        clicar(paginaCadastro.getLibras());
        clicar(paginaCadastro.getContinuar());
    }

    @Then("o sistema deve salvar o cliente corretamente")
    public void oSistemaDeveSalvarOClienteCorretamente() {
        aguardar();
        verificaConteudo(paginaCadastro.getSnackbar(), "Usuário cadastrado com sucesso! :)");
    }
}
