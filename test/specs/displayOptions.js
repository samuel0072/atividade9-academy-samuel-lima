
describe("Testes da funcionalidade App/Action Bar/Display options", () => {

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

    it("Botão Action Bar está visivel com texto correto", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        await btnApp.click();
        //botão de Action Bar 
        const actionBar = await $("~Action Bar");
        const textoActionBar = await actionBar.getText();
        const visibilidade = await actionBar.isDisplayed();
        const habilitado = await actionBar.isEnabled();

        expect(textoActionBar).toBe("Action Bar");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);
    });

    it("Display Options está vísivel e com texto correto", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        await btnApp.click();
        //botão de Action Bar 
        const actionBar = await $("~Action Bar");
        await actionBar.click();

        //botão Display Options
        const displayOptions = await $("~Display Options");
        const textoDisplay = await displayOptions.getText();
        const visibilidade = await displayOptions.isDisplayed();
        const habilitado = await displayOptions.isEnabled();

        expect(textoDisplay).toBe("Display Options");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);
    });

    it("Verifica botão DISPLAY_HOME_AS_UP", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        await btnApp.click();
        
        //botão de Action Bar 
        const actionBar = await $("~Action Bar");
        await actionBar.click();

        //botão Display Options
        const displayOptions = await $("~Display Options");
        await displayOptions.click();
       
        //Botão Display Home as Up
        const btnHomeUp = await $("~DISPLAY_HOME_AS_UP");
        var text  =  await btnHomeUp.getText();
        var visibilidade = await btnHomeUp.isDisplayed();
        var habilitado = await btnHomeUp.isEnabled();

        expect(text).toBe("DISPLAY_HOME_AS_UP");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);

        //aperta no botão e verifica se aparece o botão de voltar
        btnHomeUp.click();
        var setaTopo = $("~Navegar para cima");
        var visibilidade = await setaTopo.isDisplayed();
        var habilitado = await setaTopo.isEnabled();
        
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);
    });

    it("Verifica botão DISPLAY_SHOW_TITLE", async () => {
        //botão de App na tela inicial
        const btnApp = await $("~App");
        await btnApp.click();
        
        //botão de Action Bar 
        const actionBar = await $("~Action Bar");
        await actionBar.click();

        //botão Display Options
        const displayOptions = await $("~Display Options");
        await displayOptions.click();
       
        //Botão Display Home as Up
        const btnShowTitle = await $("~DISPLAY_SHOW_TITLE");
        var text  =  await btnShowTitle.getText();
        var visibilidade = await btnShowTitle.isDisplayed();
        var habilitado = await btnShowTitle.isEnabled();

        expect(text).toBe("DISPLAY_SHOW_TITLE");
        expect(visibilidade).toBe(true);
        expect(habilitado).toBe(true);

        //aperta no botão e verifica se o titulo desaparece
        var seletor = 'new UiSelector().text("App/Action Bar/Display Options")';
        var textoTopo = $(`android=${seletor}`);
        btnShowTitle.click();
        
        var visibilidade = await textoTopo.isDisplayed();
        
        expect(visibilidade).toBe(false);
    });
});