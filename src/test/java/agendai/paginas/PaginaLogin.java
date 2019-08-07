package agendai.paginas;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PaginaLogin {

    @FindBy(css = "input[name=\"email\"]")
    private WebElement email;

    @FindBy(css = "input[name=\"password\"]")
    private WebElement password;

    @FindBy(css = "button[type=\"submit\"]")
    private WebElement entrar;

    public WebElement getEmail() {
        return email;
    }

    public WebElement getPassword() {
        return password;
    }

    public WebElement getEntrar() {
        return entrar;
    }
}
