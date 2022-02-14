import LoginPage from './pages/login.page';
import SecurePage from './pages/secure.page';

const loginData = require('./data/loginData.json');

fixture`Login`
    .page`https://the-internet.herokuapp.com/login`;

/**
 * Example without any pattern
 */
test('As a user, I can log into the secure area', async t => {
    await t
        .typeText('#username', 'tomsmith')
        .typeText('#password', 'SuperSecretPassword!')
        .click('button[type="submit"]');
});

/**
 * Example with Page Object Model
 */
test('As a user, I can log into the secure area - pom', async t => {
    await t
        .expect(LoginPage.inputUsername.value).eql('','Username is empty')
        .typeText(LoginPage.inputUsername, 'tomsmith')
        .expect(LoginPage.inputUsername.value).eql('tomsmith','Username is correct')
        .expect(LoginPage.inputPassword.value).eql('','Password is empty')
        .typeText(LoginPage.inputPassword, 'SuperSecretPassword!')
        .click(LoginPage.btnSubmit)
        .expect(SecurePage.flashAlert.innerText).contains('You logged into a secure area!', 'Flash message is correct');
});

/**
 * DDT Example with POM
 * and data from JSON file
 */
loginData.forEach(data => {
    test(`As '${data.username}', I can log into the secure area`, async t => {
        await t
        .expect(LoginPage.inputUsername.value).eql('','Username is empty')
        .typeText(LoginPage.inputUsername, data.username)
        .expect(LoginPage.inputUsername.value).eql(data.username,'Username is correct')
        .expect(LoginPage.inputPassword.value).eql('','Password is empty')
        .typeText(LoginPage.inputPassword, data.password)
        .click(LoginPage.btnSubmit)
        .expect(SecurePage.flashAlert.innerText).contains(data.message, 'Flash message is correct');
    });
});
