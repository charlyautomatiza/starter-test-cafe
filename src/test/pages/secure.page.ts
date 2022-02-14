import { Selector } from 'testcafe';

class SecurePage {

    public get flashAlert() {
        return Selector('#flash');
    }
}

export default new SecurePage();
