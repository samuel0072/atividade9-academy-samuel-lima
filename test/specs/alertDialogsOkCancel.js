
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

    it("Verificar se textos do modal aparecem corretamente", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        await btnApp.click();
        //botão de AlertDialogs 
        const alertDialog = await $("~Alert Dialogs");
        await alertDialog.click();

        //botão Ok Cancel Dialog With a Message
        const okCancel = await $("~OK Cancel dialog with a message");
        await okCancel.click();
       
        //texto ok
        var seletor = 'new UiSelector().text("OK").className("android.widget.Button")';
        const okText = await $(`android=${seletor}`);
        var text  =  await okText.getText();
        var visibilidade = await okText.isDisplayed();
        var habilitado = await okText.isEnabled();

        expect(text).toBe("OK");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);

        //texto cancel
        var seletor = 'new UiSelector().text("CANCEL").className("android.widget.Button")';
        const cancelText = await $(`android=${seletor}`);
        var text  =  await cancelText.getText();
        var visibilidade = await cancelText.isDisplayed();
        var habilitado = await cancelText.isEnabled();

        expect(text).toBe("CANCEL");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);
        
        //texto lorem ipsum
        var texto = "Lorem ipsum dolor sit aie consectetur adipiscing\nPlloaso mako nuto siwuf cakso dodtos anr koop.";
        var seletor = `new UiSelector().resourceId("android:id/alertTitle")`;
        const loremText = await $(`android=${seletor}`);
        var text  =  await loremText.getText();
        var visibilidade = await loremText.isDisplayed();
        var habilitado = await loremText.isEnabled();

        expect(text).toBe(texto);
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);
    });
});