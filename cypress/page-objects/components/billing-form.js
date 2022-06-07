export class BillingDetails {
    elements = {
        getFirstName: () => cy.get('#billing_first_name'),
        getLastName: () => cy.get('#billing_last_name'),
        getCountry: () => cy.get('#billing_country'),
        getStreet: () => cy.get('#billing_address_1'),
        getCity: () => cy.get('#billing_city'),
        getState: () => cy.get('#billing_state'),
        getPostcode: () => cy.get('#billing_postcode'),
        getPhone: () => cy.get('#billing_phone'),
        getEmail: () => cy.get('#billing_email'),
    }

    fillBillingAddress(firstname, lastname, country, street, city, state, zipcode, phone, email) {
        this.typeFirstName(firstname);
        this.typeLastName(lastname);
        this.selectCountry(country);
        this.typeStreetAddress(street);
        this.typeCityName(city);
        this.typeStateName(state);
        this.typeZipcode(zipcode);
        this.typePhoneNumber(phone);
        this.typeEmailAddress(email);
    }

    typeFirstName(firstname = 'Luis'){
        this.elements.getFirstName().clear().type(firstname);
    }

    typeLastName(lastname = 'Urena'){
        this.elements.getLastName().clear().type(lastname);
    }

    selectCountry(country = 'United States (US)'){
        this.elements.getCountry().select(country, { force: true });
    }

    typeStreetAddress(street = '14020 N HIGHWAY 183'){
        this.elements.getStreet().clear().type(street);
    }

    typeCityName(city = 'AUSTIN'){
        this.elements.getCity().clear().type(city);
    }

    typeStateName(state = 'Texas'){
        this.elements.getState().clear().type(state);
    }

    typeZipcode(zipcode = '78717-5903'){
        this.elements.getPostcode().clear().type(zipcode);
    }

    typePhoneNumber(phone = '5122190267'){
        this.elements.getPhone().clear().type(phone);
    }

    typeEmailAddress(email = 'dummy@email.com'){
        this.elements.getEmail().clear().type(email);
    }

}

export const billingDetailsForm = new BillingDetails();