
describe("Testes da funcionalidade App/Alert Dialogs/LIST DIALOG", () => {

    beforeEach( async () => {
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

    it("List dialog está vísivel e com texto correto", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        await btnApp.click();
        //botão de AlertDialogs 
        const alertDialog = await $("~Alert Dialogs");
        await alertDialog.click();

        //botão Ok Cancel Dialog With a Message
        const listDialog = await $("~List dialog");
        const textoList = await listDialog.getText();
        const visibilidade = await listDialog.isDisplayed();
        const habilitado = await listDialog.isEnabled();

        expect(textoList).toBe("LIST DIALOG");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);
    });

    it("Verifica titulo e itens da lista", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        await btnApp.click();
        //botão de AlertDialogs 
        const alertDialog = await $("~Alert Dialogs");
        await alertDialog.click();

        //botão Ok Cancel Dialog With a Message
        const listDialog = await $("~List dialog");
        await listDialog.click();
       
        //texto cabeçalho
        var seletor = 'new UiSelector().resourceId("android:id/alertTitle")';
        const cabecalho = await $(`android=${seletor}`);
        var text  =  await cabecalho.getText();
        var visibilidade = await cabecalho.isDisplayed();
        var habilitado = await cabecalho.isEnabled();

        expect(text).toBe("Header title");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);

        //textos na lista
        //comand one
        var seletor = 'new UiSelector().text("Command one").className("android.widget.TextView")';
        const commandOne = await $(`android=${seletor}`);
        var text  =  await commandOne.getText();
        var visibilidade = await commandOne.isDisplayed();
        var habilitado = await commandOne.isEnabled();

        expect(text).toBe("Command one");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);


        //comand two
        var seletor = 'new UiSelector().text("Command two").className("android.widget.TextView")';
        const commandTwo = await $(`android=${seletor}`);
        var text  =  await commandTwo.getText();
        var visibilidade = await commandTwo.isDisplayed();
        var habilitado = await commandTwo.isEnabled();

        expect(text).toBe("Command two");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);

        //comand three
        var seletor = 'new UiSelector().text("Command three").className("android.widget.TextView")';
        const commandThree = await $(`android=${seletor}`);
        var text  =  await commandThree.getText();
        var visibilidade = await commandThree.isDisplayed();
        var habilitado = await commandThree.isEnabled();

        expect(text).toBe("Command three");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);

        //comand four
        var seletor = 'new UiSelector().text("Command four").className("android.widget.TextView")';
        const commandFour = await $(`android=${seletor}`);
        var text  =  await commandFour.getText();
        var visibilidade = await commandFour.isDisplayed();
        var habilitado = await commandFour.isEnabled();

        expect(text).toBe("Command four");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);


    });
});