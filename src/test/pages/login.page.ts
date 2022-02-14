import { Selector } from 'testcafe';

class LoginPage {
    /**
    *
    */
    public get inputUsername() {
        return Selector('#username');
    }

    public get inputPassword() {
        return Selector('#password');
    }

    public get btnSubmit() {
        return Selector('button[type="submit"]');
    }
}

export default new LoginPage();
