export class ShippingForm {
    elements = {
        getFirstName: () => cy.get('#shipping_first_name'),
        getLastName: () => cy.get('#shipping_last_name'),
        getCountry: () => cy.get('#shipping_country'),
        getStreet: () => cy.get('#shipping_address_1'),
        getCity: () => cy.get('#shipping_city'),
        getState: () => cy.get('#shipping_state'),
        getPostcode: () => cy.get('#shipping_postcode'),
    }

    fillShippingAddress(firstname, lastname, country, street, city, state, zipcode) {
        this.typeFirstName(firstname);
        this.typeLastName(lastname);
        this.selectCountry(country);
        this.typeStreetAddress(street);
        this.typeCityName(city);
        this.typeStateName(state);
        this.typeZipcode(zipcode);
    }

    typeFirstName(firstname = 'Luis Fernando'){
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
}

export const shippingForm = new ShippingForm();