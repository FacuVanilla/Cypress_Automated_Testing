describe('Test Signup Process and Data Tracking', () => {
    it('Ensure accuracy of data tracking and cross-verify signup completions', () => {
        // Visit the signup page
        cy.visit('https://stemafrica2025.qwizfun.com/');

        // Define expected data
        const firstName = 'Emeka';
        const lastName = 'Ahmed';
        const phoneNumber = '2348098221421';
        const email = 'sent190079212@gmail.com';

        // Interact directly with the form
        cy.get('input[name="first_name"]').type(firstName);
        cy.get('input[name="last_name"]').type(lastName);
        cy.get('input[name="phone_number"]').type(phoneNumber);
        cy.get('input[name="email"]').type(email);
        
        // Intercept the signup API call
        cy.intercept('POST', '/user/register-wait-list').as('signupRequest');

        // Ensure the form submits
        cy.get('button').contains('Click to submit').click();

        // Wait for the signup API call to finish and verify the request payload
        cy.wait('@signupRequest').then((interception) => {
            const requestBody = interception.request.body;
            cy.log('Signup Request Payload:', requestBody);

            // Verify that the request payload matches the expected data
            expect(requestBody).to.have.property('email', email);
            expect(requestBody).to.have.property('first_name', firstName);
            expect(requestBody).to.have.property('last_name', lastName);
            expect(requestBody).to.have.property('phone_number', phoneNumber);

            // Verify the response status
            expect(interception.response.statusCode).to.equal(200);
        });

        // Check for confirmation messages with retry
        cy.contains('Hurray.', { timeout: 10000 }).should('be.visible');
        cy.contains('Thank You for joining the waitlist.', { timeout: 10000 }).should('be.visible');
        cy.contains('Kindly Check your mail for the next step to take', { timeout: 10000 }).should('be.visible');

        // Simulate storing data in local storage (as a proxy for analytics tracking)
        cy.window().then((win) => {
            const trackedData = {
                firstName: firstName,
                lastName: lastName,
                phone: phoneNumber,
                email: email,
                signupTimestamp: new Date().toISOString()
            };
            win.localStorage.setItem('signupTracking', JSON.stringify(trackedData));
            cy.log('Tracked Data:', trackedData);
        });

        // Verify the tracked data in local storage
        cy.window().then((win) => {
            const storedData = JSON.parse(win.localStorage.getItem('signupTracking'));
            cy.log('Stored Tracking Data:', storedData);

            // Verify that the stored data matches the expected data
            expect(storedData).to.include({
                firstName: firstName,
                lastName: lastName,
                phone: phoneNumber,
                email: email
            });
            expect(storedData).to.have.property('signupTimestamp');
        });
    });
});