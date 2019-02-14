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

//Uus suite
describe('Async Address Book', function () {
    //Uus spec
    it('should grab initial contacts', function () {
        let addressBook = new AddressBook();
//Uue meetodi lisamine, tegemist on asünkroonse funktsiooniga
        addressBook.getInitialContacts();
        expect(addressBook.initialComplete).toBe(true);
    });
});