//Uue 'suiti' kirjeldamine
describe('Address Book', function () {
    //spetsifikatsioon
    it('should be able to add a contact', function () {
        //Uus objekt AddressBook
        let addressBook = new AddressBook(),
            //Uus objekt Contact
            thisContact = new Contact();
//addContact meetodi lisamine
        addressBook.addContact(thisContact);

        //Kontrollimine, et thisContact on lisatud addressBookile
        expect(addressBook.getContact(0)).toBe(thisContact);

    });
});