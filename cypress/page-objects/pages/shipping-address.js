export class ShippingAddress {
    elements = {
        getFirstNameField: () => cy.get('#shipping_first_name'),
        getLastNameField: () => cy.get('#shipping_last_name'),
        getStreetAddressField: () => cy.get('#shipping_address_1'),
        getCityField: () => cy.get('#shipping_city'),
        getStateField: () => cy.get('#shipping_state'),
    };

    setFirstName(firstName) {
        this.elements.getFirstNameField().clear().type(firstName);
    }

    setLastName(lastName) {
        this.elements.getLastNameField().clear().type(lastName);
    }

    setStreetAddress(streetAddress) {
        this.elements.getStreetAddressField().clear().type(streetAddress);
    }

    setCity(city) {
        this.elements.getCityField().clear().type(city);
    }

    setState(state) {
        this.elements.getStateField().clear().type(state)
    }
}

export const ShippingAddressPage = new ShippingAddress();