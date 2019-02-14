//Konstruktor-funktsioon AddressBook
function AddressBook() {
    //Uue omaduse lisamine. Tegemist on massiiviga
    this.contacts = [];
    this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb) {
    let self = this;
//Et muuta getInitalContacts funktsioon asünkroonseks
    setTimeout(function () {
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
}
//Uue funktsiooni addContact lisamine, mis aktsepteerib contacti kui parameetrit
//ning lükkab selle kontakti massiivi
AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
}

//Uus funktsioon, mis aktsepteerib indeksit ning tagastab massiivi elemendi selle indeksiga
AddressBook.prototype.getContact = function (index) {
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function (index) {
    //Splice meetodi kasutamine, et elementi eemaldada
    this.contacts.splice(index, 1);
}