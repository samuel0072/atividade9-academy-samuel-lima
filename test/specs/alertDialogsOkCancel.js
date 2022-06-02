
describe("Testes da funcionalidade App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", () => {
    
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

    it("Ok Cancel Dialog With a Message está vísivel e com texto correto", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        await btnApp.click();
        //botão de AlertDialogs 
        const alertDialog = await $("~Alert Dialogs");
        await alertDialog.click();

        //botão Ok Cancel Dialog With a Message
        const okCancel = await $("~OK Cancel dialog with a message");
        const textoOkCancel = await okCancel.getText();
        const visibilidade = await okCancel.isDisplayed();
        const habilitado = await okCancel.isEnabled();

        expect(textoOkCancel).toBe("OK CANCEL DIALOG WITH A MESSAGE");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);
    });
});