package agendai.paginas;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PaginaCadastroCliente {

    @FindBy(css = "input[name=\"name\"]")
    private WebElement nome;

    @FindBy(css = "input[name=\"email\"]")
    private WebElement email;

    @FindBy(css = "input[name=\"birthday\"]")
    private WebElement aniversario;

    @FindBy(css = "input[name=\"whatsapp\"]")
    private WebElement whatsapp;

    @FindBy(css= "input[name=\"password\"]")
    private WebElement senha;

    @FindBy(css = "input[name=\"confirmPassword\"]")
    private WebElement confirmarSenha;

    @FindBy(css = "input[name=\"libras\"]")
    private WebElement libras;

    @FindBy(css = "button[type=\"submit\"]")
    private WebElement continuar;

    @FindBy(css = "div[role=\"alertdialog\"] > div")
    private WebElement snackbar;

    public WebElement getNome() {
        return nome;
    }

    public WebElement getEmail() {
        return email;
    }

    public WebElement getAniversario() {
        return aniversario;
    }

    public WebElement getWhatsapp() {
        return whatsapp;
    }

    public WebElement getSenha() {
        return senha;
    }

    public WebElement getConfirmarSenha() {
        return confirmarSenha;
    }

    public WebElement getContinuar() {
        return continuar;
    }

    public WebElement getSnackbar() {
        return snackbar;
    }

    public WebElement getLibras() {
        return libras;
    }
}
