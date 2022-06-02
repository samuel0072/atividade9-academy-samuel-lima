
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

    it("Botão Fragment está visivel com texto correto", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        await btnApp.click();

        //botão de Fragment 
        const fragment = await $("~Fragment");
        const textoAlert = await fragment.getText();
        const visibilidade = await fragment.isDisplayed();
        const habilitado = await fragment.isEnabled();

        expect(textoAlert).toBe("Fragment");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);
    });

    it("Hide and Show está vísivel e com texto correto", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        await btnApp.click();
        
        //botão de Fragment 
        const fragment = await $("~Fragment");
        await fragment.click();

        //botão hide and show
        const hideShow = await $("~Hide and Show");
        const texto = await hideShow.getText();
        const visibilidade = await hideShow.isDisplayed();
        const habilitado = await hideShow.isEnabled();

        expect(texto).toBe("Hide and Show");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);
    });

    xit("Botões e textos estão presentes", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        await btnApp.click();
       
        //botão de Fragment 
        const fragment = await $("~Fragment");
        await fragment.click();

        //botão hide and show
        const hideShow = await $("~Hide and Show");
        await hideShow.click();
       
        //botões de hide
        var seletor = 'new UiSelector().resourceId("io.appium.android.apis:id/frag1hide")';
        var btnHide1 = await $(`android=${seletor}`);

        var text  =  await btnHide1.getText();
        var visibilidade = await btnHide1.isDisplayed();
        var habilitado = await btnHide1.isEnabled();

        expect(text).toBe("HIDE");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);

        var seletor2 = 'new UiSelector().resourceId("io.appium.android.apis:id/frag2hide")';
        var btnHide2 = await $(`android=${seletor2}`);

        text  =  await btnHide2.getText();
        visibilidade = await btnHide2.isDisplayed();
        habilitado = await btnHide2.isEnabled();

        expect(text).toBe("HIDE");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);

        //textos
        var seletorPai = 'new UiSelector().resourceId("io.appium.android.apis:id/fragment1")';
        seletor = `new UiSelector().fromParent(${seletorPai}).resourceId("io.appium.android.apis:id/saved")` ;
        var texto1 = await $(`android=${seletor}`);
        
        //text  =  await texto1.getText();
        visibilidade = await texto1.isDisplayed();
        habilitado = await texto1.isEnabled();

        expect(text).toBe("Initial text.");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);

        //textos
        seletorPai = `new UiSelector().resourceId('io.appium.android.apis:id/fragment2')`;
        var seletor = `new UiSelector().fromParent(${seletorPai}).className("android.widget.EditText")` ;
        var texto2 = await $(`android=${seletor}`);
        text  =  await texto2.getText();
        visibilidade = await texto2.isDisplayed();
        habilitado = await texto2.isEnabled();

        expect(text).toBe("Initial text.");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);

        //clica nos botões e verifica se os textos somem
        btnHide1.click();
        btnHide2.click();

        visibilidade = await texto2.isDisplayed();
        expect(visibilidade).toBe(false);

        visibilidade = await texto2.isDisplayed();
        expect(visibilidade).toBe(false);

        //clica nos botões e verifica se os textos aparecem
        btnHide1.click();
        btnHide2.click();

        visibilidade = await texto2.isDisplayed();
        expect(visibilidade).toBe(true);

        visibilidade = await texto2.isDisplayed();
        expect(visibilidade).toBe(true);

    });
});