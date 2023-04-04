class Contact {
  constructor(name, phoneNumber, id) {
    if (name.length < 3 || name.length > 8) {
      throw new Error('No name given');
    }
    this.name = name;
    if (phoneNumber.toString().length !== 9) {
      throw new Error('Incorrect number of digits');
    }
    this.phoneNumber = phoneNumber;
    this.id = id;
  }
}

class PhoneBook {
  constructor(bookName) {
    (this.name = bookName), (this.contactArray = []);
  }
  addUserToBook(contact) {
    return this.contactArray.push(contact);
  }
  removeUserFromBook(contact) {
    const index = this.contactArray.indexOf(contact);
    if (index > -1) {
      return this.contactArray.splice(index, 1);
    }
  }
  displayTheNumberOfContacts() {
    console.log(this.contactArray.length);
  }
  sortByNames() {
    return this.contactArray.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }
  editPhoneNumber(contact, newNumber) {
    contact.phoneNumber = newNumber;
  }
}

const newUser = new Contact('John', 111444777, 1);
const newUser2 = new Contact('Tom', 555666999, 2);
const newUser3 = new Contact('Wong', 555666999, 3);
const newUser4 = new Contact('Alice', 555666999, 4);
console.log(newUser);
console.log(newUser2);
console.log(newUser3);
console.log(newUser4);

const newPhoneBook = new PhoneBook('Książka telefoniczna');
newPhoneBook.addUserToBook(newUser);
newPhoneBook.addUserToBook(newUser2);
newPhoneBook.addUserToBook(newUser3);
newPhoneBook.addUserToBook(newUser4);

console.log(newPhoneBook);

newPhoneBook.removeUserFromBook(newUser);
newPhoneBook.displayTheNumberOfContacts();
newPhoneBook.sortByNames();
newPhoneBook.editPhoneNumber(newUser2, 123456789);
