//Uue 'suiti' kirjeldamine
describe('Address Book', function () {
    let addressBook = new AddressBook(),
        thisContact = new Contact();

    beforeEach(function () {
        let addressBook = new AddressBook(),
            thisContact = new Contact();
    });

    it('should be able to add a contact', function () {

        //addContact meetodi lisamine
        addressBook.addContact(thisContact);

        //Kontrollimine, et thisContact on lisatud addressBookile
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    //Uus spetsifikatsioon it-meetodiga
    it('should be able to delete a contact', function () {

        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

//beforeEach kasutamine, et test saaks läbitud
describe('Async Address Book', function () {
    let addressBook = new AddressBook();
//Uue funktsiooni nimega "done" rakendamine, mis annab teada, kui asünkroonne
    //funktsioon on lõpetanud ning on võimalik test käivitada
    beforeEach(function (done) {
        addressBook.getInitialContacts(function () {
            done();
        });
    });

    it('should grab initial contacts', function (done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});