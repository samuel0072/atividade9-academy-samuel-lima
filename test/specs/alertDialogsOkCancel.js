
describe("Testes da funcionalidade App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", () => {

    before("Vai para a tela inicial", async () => {
        await driver.reset();
    });
    
    it("Botão de App está visível e com texto correto", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        const textoBtn = await btnApp.getText();
        const visibilidade = await btnApp.isDisplayed();
        const habilitado = await btnApp.isEnabled();

        expect(textoBtn).toBe("App");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);

    });

    it("Botão Alert Dialogs está visivel com texto correto", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        await btnApp.click();
        //botão de AlertDialogs 
        const alertDialog = await $("~Alert Dialogs");
        const textoAlert = await alertDialog.getText();
        const visibilidade = await alertDialog.isDisplayed();
        const habilitado = await alertDialog.isEnabled();

        expect(textoAlert).toBe("Alert Dialogs");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);
    });
});