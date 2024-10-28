describe('Glo Admin Dashboard', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should select "This Week" from the metrics dropdown', () => {
        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').click();

        // Select "This Week" option
        cy.contains('li', 'This Week').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Month" from the metrics dropdown', () => {
        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').click();

        // Select "This Month" option
        cy.contains('li', 'This Month').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Today" from the metrics dropdown', () => {
        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').click();

        // Select "Today" option
        cy.contains('li', 'Today').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Quarter" from the metrics dropdown', () => {
        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').click();

        // Select "This Quarter" option
        cy.contains('li', 'This Quarter').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Custom Date Range" from the metrics dropdown', () => {
        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').click();

        // Select "Custom Date Range" option
        cy.contains('li', 'Custom Date Range').click();

        // Click on the start date
        cy.get('span:contains("Start")').click();
        // Select the start date (e.g., the 18th)
        cy.get('button[data-timestamp="1729234800000"]').click(); // Replace with the actual timestamp for the 18th

        // Click on the end date
        cy.get('span:contains("End")').click();
        // Select the end date (e.g., the 20th)
        cy.get('button[data-timestamp="1730358000000"]').click(); // Replace with the actual timestamp for the 20th
    });

    it('should access "Web Visits" section', () => {
        // Scroll into view and click the "Web Visits" button
        cy.get('button:contains("Web Visits")').scrollIntoView().click();
    });

    it('should access "Subscriptions" under Quick Actions', () => {
        // Scroll into view and click the "Subscriptions" button under Quick Actions
        cy.get('button.text-gray-400:contains("Subscriptions")').first().scrollIntoView().click();
    });

    it('should access "Subscriptions" section', () => {
        // Scroll into view and click the "Subscriptions" button normally
        cy.get('button#subscriptions-styled-tab').scrollIntoView().click();
    });

    it('should access "Revenue" section', () => {
        // Scroll into view and click the "Revenue" button
        cy.get('button:contains("Revenue")').scrollIntoView().click();
    });

    it('should access "Subscribers" section', () => {
        // Scroll into view and click the "Subscribers" button
        cy.get('button:contains("Subscribers")').scrollIntoView().click();
    });

    it('should access "Overall" section', () => {
        // Scroll into view and click the "Overall" button
        cy.get('button#web-visit-styled-tab').scrollIntoView().click();
    });

    it('should access "Free Trial Activation" section', () => {
        // Scroll into view and click the "Free Trial Activation" button
        cy.get('button#subscribers-styled-tab').scrollIntoView().click();
    });
});


describe('Glo Admin Revenue Section', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should access "Revenue" section', () => {
        // Scroll into view and click the "Revenue" submenu item
        cy.get('li:contains("revenue")').scrollIntoView().click();

        // Wait for the revenue metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the revenue page
        cy.url().should('include', '/revenue'); // Ensure the URL is correct
    });

    it('should select "This Week" from the revenue metrics dropdown', () => {
        // Access the Revenue section first
        cy.get('li:contains("revenue")').scrollIntoView().click();
        cy.wait(5000); // Wait for the revenue metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Week" option
        cy.contains('li', 'This Week').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Month" from the revenue metrics dropdown', () => {
        // Access the Revenue section first
        cy.get('li:contains("revenue")').scrollIntoView().click();
        cy.wait(5000); // Wait for the revenue metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Month" option
        cy.contains('li', 'This Month').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Today" from the revenue metrics dropdown', () => {
        // Access the Revenue section first
        cy.get('li:contains("revenue")').scrollIntoView().click();
        cy.wait(5000); // Wait for the revenue metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Today" option
        cy.contains('li', 'Today').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Quarter" from the revenue metrics dropdown', () => {
        // Access the Revenue section first
        cy.get('li:contains("revenue")').scrollIntoView().click();
        cy.wait(5000); // Wait for the revenue metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Quarter" option
        cy.contains('li', 'This Quarter').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Custom Date Range" from the revenue metrics dropdown', () => {
        // Access the Revenue section first
        cy.get('li:contains("revenue")').scrollIntoView().click();
        cy.wait(5000); // Wait for the revenue metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Custom Date Range" option
        cy.contains('li', 'Custom Date Range').click();

        // Click on the start date
        cy.get('span:contains("Start")').click();
        // Select the start date (e.g., the 18th)
        cy.get('button[data-timestamp="1729234800000"]').click(); // Replace with the actual timestamp for the 18th

        // Click on the end date
        cy.get('span:contains("End")').click();
        // Select the end date (e.g., the 20th)
        cy.get('button[data-timestamp="1730358000000"]').click(); // Replace with the actual timestamp for the 20th
    });
});


describe('Glo Admin Subscriptions Section', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should access "Subscriptions" section', () => {
        // Scroll into view and click the "Subscriptions" submenu item
        cy.get('li:contains("subscription")').scrollIntoView().click();

        // Wait for the subscriptions metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the subscriptions page
        cy.url().should('include', '/subscriptions'); // Ensure the URL is correct
    });

    it('should select "This Week" from the subscriptions metrics dropdown', () => {
        // Access the Subscriptions section first
        cy.get('li:contains("subscription")').scrollIntoView().click();
        cy.wait(5000); // Wait for the subscriptions metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Week" option
        cy.contains('li', 'This Week').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Month" from the subscriptions metrics dropdown', () => {
        // Access the Subscriptions section first
        cy.get('li:contains("subscription")').scrollIntoView().click();
        cy.wait(5000); // Wait for the subscriptions metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Month" option
        cy.contains('li', 'This Month').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Today" from the subscriptions metrics dropdown', () => {
        // Access the Subscriptions section first
        cy.get('li:contains("subscription")').scrollIntoView().click();
        cy.wait(5000); // Wait for the subscriptions metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Today" option
        cy.contains('li', 'Today').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Quarter" from the subscriptions metrics dropdown', () => {
        // Access the Subscriptions section first
        cy.get('li:contains("subscription")').scrollIntoView().click();
        cy.wait(5000); // Wait for the subscriptions metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Quarter" option
        cy.contains('li', 'This Quarter').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Custom Date Range" from the subscriptions metrics dropdown', () => {
        // Access the Subscriptions section first
        cy.get('li:contains("subscription")').scrollIntoView().click();
        cy.wait(5000); // Wait for the subscriptions metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Custom Date Range" option
        cy.contains('li', 'Custom Date Range').click();

        // Click on the start date
        cy.get('span:contains("Start")').click();
        // Select the start date (e.g., the 18th)
        cy.get('button[data-timestamp="1729234800000"]').click(); // Replace with the actual timestamp for the 18th

        // Click on the end date
        cy.get('span:contains("End")').click();
        // Select the end date (e.g., the 20th)
        cy.get('button[data-timestamp="1730358000000"]').click(); // Replace with the actual timestamp for the 20th
    });
});


describe('Glo Admin Subscribers Section', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should access "Overall" subscribers section', () => {
        // Scroll into view and click the "Subscribers" dropdown
        cy.get('li:contains("subscribers")').scrollIntoView().click();

        // Wait for the dropdown options to load
        cy.wait(2000); // Adjust wait time as necessary

        // Click on the "Overall" option
        cy.contains('li', 'overall').click();

        // Wait for the overall metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the overall subscribers page
        cy.url().should('include', '/subscribers/overall'); // Ensure the URL is correct
    });

    it('should select "This Week" from the overall subscribers metrics dropdown', () => {
        // Access the Overall subscribers section first
        cy.get('li:contains("subscribers")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'overall').click();
        cy.wait(5000); // Wait for the overall metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Week" option
        cy.contains('li', 'This Week').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Month" from the overall subscribers metrics dropdown', () => {
        // Access the Overall subscribers section first
        cy.get('li:contains("subscribers")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'overall').click();
        cy.wait(5000); // Wait for the overall metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Month" option
        cy.contains('li', 'This Month').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Today" from the overall subscribers metrics dropdown', () => {
        // Access the Overall subscribers section first
        cy.get('li:contains("subscribers")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'overall').click();
        cy.wait(5000); // Wait for the overall metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Today" option
        cy.contains('li', 'Today').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Quarter" from the overall subscribers metrics dropdown', () => {
        // Access the Overall subscribers section first
        cy.get('li:contains("subscribers")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'overall').click();
        cy.wait(5000); // Wait for the overall metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Quarter" option
        cy.contains('li', 'This Quarter').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Custom Date Range" from the overall subscribers metrics dropdown', () => {
        // Access the Overall subscribers section first
        cy.get('li:contains("subscribers")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'overall').click();
        cy.wait(5000); // Wait for the overall metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Custom Date Range" option
        cy.contains('li', 'Custom Date Range').click();

        // Click on the start date
        cy.get('span:contains("Start")').click();
        // Select the start date (e.g., the 18th)
        cy.get('button[data-timestamp="1729234800000"]').click(); // Replace with the actual timestamp for the 18th

        // Click on the end date
        cy.get('span:contains("End")').click();
        // Select the end date (e.g., the 20th)
        cy.get('button[data-timestamp="1730358000000"]').click(); // Replace with the actual timestamp for the 20th
    });

    it('should access "Churn" subscribers section', () => {
        // Scroll into view and click the "Subscribers" dropdown
        cy.get('li:contains("subscribers")').scrollIntoView().click();

        // Wait for the dropdown options to load
        cy.wait(2000); // Adjust wait time as necessary

        // Click on the "Churn" option
        cy.contains('li', 'churn').click();

        // Wait for the churn metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the churn subscribers page
        cy.url().should('include', '/subscribers/churn'); // Ensure the URL is correct
    });

    it('should select "This Week" from the churn subscribers metrics dropdown', () => {
        // Access the Churn subscribers section first
        cy.get('li:contains("subscribers")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'churn').click();
        cy.wait(5000); // Wait for the churn metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Week" option
        cy.contains('li', 'This Week').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Month" from the churn subscribers metrics dropdown', () => {
        // Access the Churn subscribers section first
        cy.get('li:contains("subscribers")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'churn').click();
        cy.wait(5000); // Wait for the churn metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Month" option
        cy.contains('li', 'This Month').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Today" from the churn subscribers metrics dropdown', () => {
        // Access the Churn subscribers section first
        cy.get('li:contains("subscribers")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'churn').click();
        cy.wait(5000); // Wait for the churn metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Today" option
        cy.contains('li', 'Today').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Quarter" from the churn subscribers metrics dropdown', () => {
        // Access the Churn subscribers section first
        cy.get('li:contains("subscribers")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'churn').click();
        cy.wait(5000); // Wait for the churn metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Quarter" option
        cy.contains('li', 'This Quarter').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Custom Date Range" from the churn subscribers metrics dropdown', () => {
        // Access the Churn subscribers section first
        cy.get('li:contains("subscribers")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'churn').click();
        cy.wait(5000); // Wait for the churn metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Custom Date Range" option
        cy.contains('li', 'Custom Date Range').click();

        // Click on the start date
        cy.get('span:contains("Start")').click();
        // Select the start date (e.g., the 18th)
        cy.get('button[data-timestamp="1729234800000"]').click(); // Replace with the actual timestamp for the 18th

        // Click on the end date
        cy.get('span:contains("End")').click();
        // Select the end date (e.g., the 20th)
        cy.get('button[data-timestamp="1730358000000"]').click(); // Replace with the actual timestamp for the 20th
    });
});


describe('Glo Admin Competitions Section', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should access "Competition" section', () => {
        // Scroll into view and click the "Competitions" dropdown
        cy.get('li:contains("competitions")').scrollIntoView().click();

        // Wait for the dropdown options to load
        cy.wait(2000); // Adjust wait time as necessary

        // Click on the "Competition" option with force
        cy.contains('li', 'competition').should('be.visible').click({ force: true });

        // Wait for the competition metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the competition page
        cy.url().should('include', '/competitions/competitions'); // Ensure the URL is correct
    });

    it('should select "This Week" from the competition metrics dropdown', () => {
        // Access the Competition section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'competition').click();
        cy.wait(5000); // Wait for the competition metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Week" option
        cy.contains('li', 'This Week').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Month" from the competition metrics dropdown', () => {
        // Access the Competition section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'competition').click();
        cy.wait(5000); // Wait for the competition metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Month" option
        cy.contains('li', 'This Month').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Today" from the competition metrics dropdown', () => {
        // Access the Competition section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'competition').click();
        cy.wait(5000); // Wait for the competition metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Today" option
        cy.contains('li', 'Today').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Quarter" from the competition metrics dropdown', () => {
        // Access the Competition section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'competition').click();
        cy.wait(5000); // Wait for the competition metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Quarter" option
        cy.contains('li', 'This Quarter').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Custom Date Range" from the competition metrics dropdown', () => {
        // Access the Competition section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'competition').click();
        cy.wait(5000); // Wait for the competition metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Custom Date Range" option
        cy.contains('li', 'Custom Date Range').click();

        // Click on the start date
        cy.get('span:contains("Start")').click();
        // Select the start date (e.g., the 18th)
        cy.get('button[data-timestamp="1729234800000"]').click(); // Replace with the actual timestamp for the 18th

        // Click on the end date
        cy.get('span:contains("End")').click();
        // Select the end date (e.g., the 20th)
        cy.get('button[data-timestamp="1730358000000"]').click(); // Replace with the actual timestamp for the 20th
    });

    it('should access "Quiz" section', () => {
        // Scroll into view and click the "Competitions" dropdown
        cy.get('li:contains("competitions")').scrollIntoView().click();

        // Wait for the dropdown options to load
        cy.wait(2000); // Adjust wait time as necessary

        // Click on the "Quiz" option
        cy.contains('li', 'quiz').click();

        // Wait for the quiz metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the quiz page
        cy.url().should('include', '/competitions/quiz'); // Ensure the URL is correct
    });

    it('should select "This Week" from the quiz metrics dropdown', () => {
        // Access the Quiz section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'quiz').click();
        cy.wait(5000); // Wait for the quiz metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Week" option
        cy.contains('li', 'This Week').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Month" from the quiz metrics dropdown', () => {
        // Access the Quiz section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'quiz').click();
        cy.wait(5000); // Wait for the quiz metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Month" option
        cy.contains('li', 'This Month').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Today" from the quiz metrics dropdown', () => {
        // Access the Quiz section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'quiz').click();
        cy.wait(5000); // Wait for the quiz metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Today" option
        cy.contains('li', 'Today').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Quarter" from the quiz metrics dropdown', () => {
        // Access the Quiz section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'quiz').click();
        cy.wait(5000); // Wait for the quiz metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Quarter" option
        cy.contains('li', 'This Quarter').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Custom Date Range" from the quiz metrics dropdown', () => {
        // Access the Quiz section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'quiz').click();
        cy.wait(5000); // Wait for the quiz metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Custom Date Range" option
        cy.contains('li', 'Custom Date Range').click();

        // Click on the start date
        cy.get('span:contains("Start")').click();
        // Select the start date (e.g., the 18th)
        cy.get('button[data-timestamp="1729234800000"]').click(); // Replace with the actual timestamp for the 18th

        // Click on the end date
        cy.get('span:contains("End")').click();
        // Select the end date (e.g., the 20th)
        cy.get('button[data-timestamp="1730358000000"]').click(); // Replace with the actual timestamp for the 20th
    });

    it('should access "Winners Statistics" section', () => {
        // Scroll into view and click the "Competitions" dropdown
        cy.get('li:contains("competitions")').scrollIntoView().click();

        // Wait for the dropdown options to load
        cy.wait(2000); // Adjust wait time as necessary

        // Click on the "Winners Statistics" option
        cy.contains('li', 'winners-statistic').click();

        // Wait for the winners statistics metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the winners statistics page
        cy.url().should('include', '/competitions/winners-statistic'); // Ensure the URL is correct
    });

    it('should select "This Week" from the winners statistics metrics dropdown', () => {
        // Access the Winners Statistics section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'winners-statistic').click();
        cy.wait(5000); // Wait for the winners statistics metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Week" option
        cy.contains('li', 'This Week').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Month" from the winners statistics metrics dropdown', () => {
        // Access the Winners Statistics section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'winners-statistic').click();
        cy.wait(5000); // Wait for the winners statistics metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Month" option
        cy.contains('li', 'This Month').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Today" from the winners statistics metrics dropdown', () => {
        // Access the Winners Statistics section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'winners-statistic').click();
        cy.wait(5000); // Wait for the winners statistics metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Today" option
        cy.contains('li', 'Today').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Quarter" from the winners statistics metrics dropdown', () => {
        // Access the Winners Statistics section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'winners-statistic').click();
        cy.wait(5000); // Wait for the winners statistics metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Quarter" option
        cy.contains('li', 'This Quarter').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Custom Date Range" from the winners statistics metrics dropdown', () => {
        // Access the Winners Statistics section first
        cy.get('li:contains("competitions")').scrollIntoView().click();
        cy.wait(2000); // Wait for the dropdown options to load
        cy.contains('li', 'winners-statistic').click();
        cy.wait(5000); // Wait for the winners statistics metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Custom Date Range" option
        cy.contains('li', 'Custom Date Range').click();

        // Click on the start date
        cy.get('span:contains("Start")').click();
        // Select the start date (e.g., the 18th)
        cy.get('button[data-timestamp="1729234800000"]').click(); // Replace with the actual timestamp for the 18th

        // Click on the end date
     //   cy.get('span:contains("End")').click();
        // Select the end date (e.g., the 20th)
     //   cy.get('button[data-timestamp="1730358000000"]').click(); // Replace with the actual timestamp for the 20th
    });
});


describe('Glo Admin Plans Section', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should access "Plans" section', () => {
        // Scroll into view and click the "Plans" submenu item
        cy.get('li:contains("plans")').scrollIntoView().click();

        // Wait for the plans metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the plans page
        cy.url().should('include', '/plans'); // Ensure the URL is correct
    });

    it('should select "This Week" from the plans metrics dropdown', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Week" option
        cy.contains('li', 'This Week').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Month" from the plans metrics dropdown', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Month" option
        cy.contains('li', 'This Month').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Today" from the plans metrics dropdown', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Today" option
        cy.contains('li', 'Today').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "This Quarter" from the plans metrics dropdown', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "This Quarter" option
        cy.contains('li', 'This Quarter').click();

        // Click the Apply button
        cy.get('button.min-w-full').contains('Apply').click();
    });

    it('should select "Custom Date Range" from the plans metrics dropdown', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        // Open the metrics dropdown
        cy.get('button.capitalize.justify-between').should('be.visible').click();

        // Select "Custom Date Range" option
        cy.contains('li', 'Custom Date Range').click();

        // Click on the start date
        cy.get('span:contains("Start")').click();
        // Select the start date (e.g., the 18th)
        cy.get('button[data-timestamp="1729234800000"]').click(); // Replace with the actual timestamp for the 18th

        // Click on the end date
        cy.get('span:contains("End")').click();
        // Select the end date (e.g., the 20th)
        cy.get('button[data-timestamp="1730358000000"]').click(); // Replace with the actual timestamp for the 20th
    });
});


describe('Glo Admin Plans Section', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should access "Plans" section', () => {
        // Scroll into view and click the "Plans" submenu item
        cy.get('li:contains("plans")').scrollIntoView().click();

        // Wait for the plans metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the plans page
        cy.url().should('include', '/plans'); // Ensure the URL is correct
    });

    it('should create a new plan', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        cy.contains('button', 'Create Plan').scrollIntoView().click({ force: true });
        // Wait for the popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Fill out the form
        cy.get('input[name="service_name"]').type('Test Plan'); // Enter Plan Name
        cy.get('input[name="product_id"]').type('TP123'); // Enter Plan Code

        // Select Duration
        cy.get('select[name="role"]').select('weekly'); // Select Duration

        // Enter Amount
        cy.get('input[name="price"]').type('100'); // Enter Amount

        // Select After Plan Expire
        cy.get('select[name="type"]').select('auto'); // Select After Plan Expire

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').click();

        // Wait for the plans page to reload
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are back on the plans page
        cy.url().should('include', '/plans'); // Ensure the URL is correct
    });
});


describe('Glo Admin Plans Section - Search and Delete Functionality', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should search for a plan by name', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        // Scroll into view and type in the search box
        cy.get('input[type="text"][placeholder="Search by name, email, role"]').scrollIntoView().type('Test Plan'); // Replace with actual plan name

        // Scroll into view and click the search button
        cy.get('svg[width="16"][height="16"]').scrollIntoView().click(); // Click the search button
    });

    it('should download plans', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        // Scroll into view and click the download button
        cy.get('svg path[d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"]')
            .scrollIntoView()
            .click(); // Click the download button
    });

    it('should delete a plan', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        // Scroll into view and click the delete button for the specific plan
        cy.contains('Test Plan') // Replace with the actual plan name
            .parents('tr') // Assuming the plan is in a table row
            .find('button.btn.btn-outline.bg-red-600') // Find the delete button
            .scrollIntoView()
            .click(); // Click the delete button

        // Wait for the confirmation popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Scroll into view and click the "Yes" button in the confirmation popup
        cy.get('button.swal2-confirm.order-2.swal2-styled').scrollIntoView().click(); // Click "Yes"

        // Wait for the acknowledgment popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Scroll into view and click the "OK" button in the acknowledgment popup
        cy.get('button.swal2-confirm.swal2-styled').scrollIntoView().click(); // Click "OK"
    });
});


describe('Glo Admin Plans Section - Negative and Edge Case Tests', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should not create a plan with an empty name', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        cy.contains('button', 'Create Plan').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Leave the plan name empty
        cy.get('input[name="service_name"]').clear(); // Clear the input field
        cy.get('input[name="product_id"]').type('TP123'); // Enter Plan Code
        cy.get('select[name="role"]').select('weekly'); // Select Duration
        cy.get('input[name="price"]').type('100'); // Enter Amount
        cy.get('select[name="type"]').select('auto'); // Select After Plan Expire

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').click();

        // Wait for the plans page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the plans page
        cy.url().should('include', '/plans'); // Ensure the URL is correct
    });

    it('should not create a plan with an empty product ID', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        cy.contains('button', 'Create Plan').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Enter Plan Name
        cy.get('input[name="service_name"]').type('Test Plan'); // Enter Plan Name
        // Leave the product ID empty
        cy.get('input[name="product_id"]').clear(); // Clear the input field
        cy.get('select[name="role"]').select('weekly'); // Select Duration
        cy.get('input[name="price"]').type('100'); // Enter Amount
        cy.get('select[name="type"]').select('auto'); // Select After Plan Expire

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').click();

        // Wait for the plans page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the plans page
        cy.url().should('include', '/plans'); // Ensure the URL is correct
    });

    it('should not create a plan with a negative price', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        cy.contains('button', 'Create Plan').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Fill out the form
        cy.get('input[name="service_name"]').type('Test Plan'); // Enter Plan Name
        cy.get('input[name="product_id"]').type('TP123'); // Enter Plan Code
        cy.get('select[name="role"]').select('weekly'); // Select Duration
        cy.get('input[name="price"]').type('-100'); // Enter Negative Amount
        cy.get('select[name="type"]').select('auto'); // Select After Plan Expire

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').click();

        // Wait for the plans page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the plans page
        cy.url().should('include', '/plans'); // Ensure the URL is correct
    });

    it('should not create a plan with a name that is too long', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        cy.contains('button', 'Create Plan').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Fill out the form with a long plan name
        const longPlanName = 'A'.repeat(256); // Assuming the max length is 255 characters
        cy.get('input[name="service_name"]').type(longPlanName); // Enter long Plan Name
        cy.get('input[name="product_id"]').type('TP123'); // Enter Plan Code
        cy.get('select[name="role"]').select('weekly'); // Select Duration
        cy.get('input[name="price"]').type('100'); // Enter Amount
        cy.get('select[name="type"]').select('auto'); // Select After Plan Expire

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').click();

        // Wait for the plans page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the plans page
        cy.url().should('include', '/plans'); // Ensure the URL is correct
    });

    it('should not create a plan with an invalid price format', () => {
        // Access the Plans section first
        cy.get('li:contains("plans")').scrollIntoView().click();
        cy.wait(5000); // Wait for the plans metrics to load

        cy.contains('button', 'Create Plan').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Fill out the form
        cy.get('input[name="service_name"]').type('Test Plan'); // Enter Plan Name
        cy.get('input[name="product_id"]').type('TP123'); // Enter Plan Code
        cy.get('select[name="role"]').select('weekly'); // Select Duration
        cy.get('input[name="price"]').type('invalid_price'); // Enter Invalid Price
        cy.get('select[name="type"]').select('auto'); // Select After Plan Expire

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').click();

        // Wait for the plans page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the plans page
        cy.url().should('include', '/plans'); // Ensure the URL is correct
    });
});


describe('Glo Admin Sources Section', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });
    
        it('should access "Sources" section and perform normal metrics', () => {
            // Scroll into view and click the "Sources" submenu item
            cy.get('li:contains("sources")').scrollIntoView().click();
    
            // Wait for the sources metrics to load
            cy.wait(5000); // Adjust wait time as necessary
    
            // Verify that we are on the sources page
            cy.url().should('include', '/sources'); // Ensure the URL is correct
    
            // Perform normal metrics checks (e.g., This Week, This Month, Today, etc.)
            // Example for "This Week"
            cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
            cy.contains('li', 'This Week').click(); // Select "This Week"
            cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
            cy.get('#sources-results').should('contain', 'Expected Result for This Week'); // Replace with actual assertion
    
            // Example for "This Month"
            cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
            cy.contains('li', 'This Month').click(); // Select "This Month"
            cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
            cy.get('#sources-results').should('contain', 'Expected Result for This Month'); // Replace with actual assertion
    
            // Example for "Today"
            cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
            cy.contains('li', 'Today').click(); // Select "Today"
            cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
            cy.get('#sources-results').should('contain', 'Expected Result for Today'); // Replace with actual assertion
    
            // Example for "This Quarter"
            cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
            cy.contains('li', 'This Quarter').click(); // Select "This Quarter"
            cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
            cy.get('#sources-results').should('contain', 'Expected Result for This Quarter'); // Replace with actual assertion
    
            // Example for "Custom Date Range"
            cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
            cy.contains('li', 'Custom Date Range').click(); // Select "Custom Date Range"
            cy.get('span:contains("Start")').click(); // Click on start date
            cy.get('button[data-timestamp="1729234800000"]').click(); // Select start date (replace with actual timestamp)
            cy.get('span:contains("End")').click(); // Click on end date
            cy.get('button[data-timestamp="1730358000000"]').click(); // Select end date (replace with actual timestamp)
            cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
            cy.get('#sources-results').should('contain', 'Expected Result for Custom Date Range'); // Replace with actual assertion
        });
    
    it('should access "Sources" section', () => {
        // Scroll into view and click the "Sources" submenu item
        cy.get('li:contains("sources")').scrollIntoView().click();

        // Wait for the sources metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the sources page
        cy.url().should('include', '/sources'); // Ensure the URL is correct
    });

    it('should create a new service', () => {
        // Access the Sources section first
        cy.get('li:contains("sources")').scrollIntoView().click();
        cy.wait(5000); // Wait for the sources metrics to load

        // Click on the "Service" tab
        cy.contains('button', 'Service').click();

        // Wait for the Create Service button to appear
        cy.wait(2000); // Adjust wait time as necessary

        cy.contains('button', 'Create Service').scrollIntoView().click({ force: true });
        // Wait for the popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Fill out the form for creating a service
        cy.get('input[name="serviceName"]').type('Test Service'); // Enter Service Name
        cy.get('input[name="serviceCode"]').type('TS123'); // Enter Service Code

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the sources page to reload
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are back on the sources page
        cy.url().should('include', '/sources'); // Ensure the URL is correct
    });

    it('should create a new source', () => {
        // Access the Sources section first
        cy.get('li:contains("sources")').scrollIntoView().click();
        cy.wait(5000); // Wait for the sources metrics to load

        // Click on the "Sources" tab
        cy.contains('button', 'Sources').click();

        // Wait for the Create Source button to appear
        cy.wait(2000); // Adjust wait time as necessary

        cy.contains('button', 'Create Source').scrollIntoView().click({ force: true });
        // Wait for the popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Fill out the form for creating a source
        cy.get('input[name="name"]').type('Test Source'); // Enter Source Name
        cy.get('input[name="unique_code"]').type('US123'); // Enter Unique Code
        cy.get('input[name="post_back_url"]').type('https://example.com/postback'); // Enter Post Back URL

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the sources page to reload
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are back on the sources page
        cy.url().should('include', '/sources'); // Ensure the URL is correct
    });
});


describe('Glo Admin Sources Section - Negative and Edge Case Tests', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should not create a service with an empty name', () => {
        // Access the Sources section first
        cy.get('li:contains("sources")').scrollIntoView().click();
        cy.wait(5000); // Wait for the sources metrics to load

        // Click on the "Service" tab
        cy.contains('button', 'Service').click();
        cy.wait(2000); // Wait for the Create Service button to appear

        cy.contains('button', 'Create Service').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Leave the service name empty
        cy.get('input[name="serviceName"]').clear(); // Clear the input field
        cy.get('input[name="serviceCode"]').type('TS123'); // Enter Service Code

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the sources page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the sources page
        cy.url().should('include', '/sources'); // Ensure the URL is correct
    });

    it('should not create a service with an empty code', () => {
        // Access the Sources section first
        cy.get('li:contains("sources")').scrollIntoView().click();
        cy.wait(5000); // Wait for the sources metrics to load

        // Click on the "Service" tab
        cy.contains('button', 'Service').click();
        cy.wait(2000); // Wait for the Create Service button to appear

        cy.contains('button', 'Create Service').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Enter Service Name
        cy.get('input[name="serviceName"]').type('Test Service'); // Enter Service Name
        // Leave the service code empty
        cy.get('input[name="serviceCode"]').clear(); // Clear the input field

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the sources page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the sources page
        cy.url().should('include', '/sources'); // Ensure the URL is correct
    });

    it('should not create a service with a name that is too long', () => {
        // Access the Sources section first
        cy.get('li:contains("sources")').scrollIntoView().click();
        cy.wait(5000); // Wait for the sources metrics to load

        // Click on the "Service" tab
        cy.contains('button', 'Service').click();
        cy.wait(2000); // Wait for the Create Service button to appear

        cy.contains('button', 'Create Service').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Fill out the form with a long service name
        const longServiceName = 'A'.repeat(256); // Assuming the max length is 255 characters
        cy.get('input[name="serviceName"]').type(longServiceName); // Enter long Service Name
        cy.get('input[name="serviceCode"]').type('TS123'); // Enter Service Code

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the sources page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the sources page
        cy.url().should('include', '/sources'); // Ensure the URL is correct
    });

    it('should not create a source with an empty name', () => {
        // Access the Sources section first
        cy.get('li:contains("sources")').scrollIntoView().click();
        cy.wait(5000); // Wait for the sources metrics to load

        // Click on the "Sources" tab
        cy.contains('button', 'Sources').click();
        cy.wait(2000); // Wait for the Create Source button to appear

        cy.contains('button', 'Create Source').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Leave the source name empty
        cy.get('input[name="name"]').clear(); // Clear the input field
        cy.get('input[name="unique_code"]').type('US123'); // Enter Unique Code
        cy.get('input[name="post_back_url"]').type('https://example.com/postback'); // Enter Post Back URL

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the sources page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the sources page
        cy.url().should('include', '/sources'); // Ensure the URL is correct
    });

    it('should not create a source with an empty unique code', () => {
        // Access the Sources section first
        cy.get('li:contains("sources")').scrollIntoView().click();
        cy.wait(5000); // Wait for the sources metrics to load

        // Click on the "Sources" tab
        cy.contains('button', 'Sources').click();
        cy.wait(2000); // Wait for the Create Source button to appear

        cy.contains('button', 'Create Source').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Fill out the form for creating a source
        cy.get('input[name="name"]').type('Test Source'); // Enter Source Name
        // Leave the unique code empty
        cy.get('input[name="unique_code"]').clear(); // Clear the input field
        cy.get('input[name="post_back_url"]').type('https://example.com/postback'); // Enter Post Back URL

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the sources page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the sources page
        cy.url().should('include', '/sources'); // Ensure the URL is correct
    });

    it('should not create a source with a name that is too long', () => {
        // Access the Sources section first
        cy.get('li:contains("sources")').scrollIntoView().click();
        cy.wait(5000); // Wait for the sources metrics to load

        // Click on the "Sources" tab
        cy.contains('button', 'Sources').click();
        cy.wait(2000); // Wait for the Create Source button to appear

        cy.contains('button', 'Create Source').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Fill out the form with a long source name
        const longSourceName = 'A'.repeat(256); // Assuming the max length is 255 characters
        cy.get('input[name="name"]').type(longSourceName); // Enter long Source Name
        cy.get('input[name="unique_code"]').type('US123'); // Enter Unique Code
        cy.get('input[name="post_back_url"]').type('https://example.com/postback'); // Enter Post Back URL

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the sources page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the sources page
        cy.url().should('include', '/sources'); // Ensure the URL is correct
    });
});


describe('Glo Admin Users Section', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(30000); // Wait for 15 seconds
    });

    it('should access "Users" section and perform normal metrics', () => {
        // Scroll into view and click the "Users" submenu item
        cy.get('li:contains("users")').scrollIntoView().should('be.visible').click({ force: true });
        cy.contains('li', 'Users').click(); 

        // Wait for the users metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the users page
        cy.url().should('include', '/users/users'); // Ensure the URL is correct

        // Perform normal metrics checks (e.g., This Week, This Month, Today, etc.)
        // Example for "This Week"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'This Week').click(); // Select "This Week"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#users-results').should('contain', 'Expected Result for This Week'); // Replace with actual assertion

        // Example for "This Month"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'This Month').click(); // Select "This Month"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#users-results').should('contain', 'Expected Result for This Month'); // Replace with actual assertion

        // Example for "Today"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'Today').click(); // Select "Today"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#users-results').should('contain', 'Expected Result for Today'); // Replace with actual assertion

        // Example for "This Quarter"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'This Quarter').click(); // Select "This Quarter"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#users-results').should('contain', 'Expected Result for This Quarter'); // Replace with actual assertion

        // Example for "Custom Date Range"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'Custom Date Range').click(); // Select "Custom Date Range"
        cy.get('span:contains("Start")').click(); // Click on start date
        cy.get('button[data-timestamp="1729234800000"]').click(); // Select start date (replace with actual timestamp)
        cy.get('span:contains("End")').click(); // Click on end date
        cy.get('button[data-timestamp="1730358000000"]').click(); // Select end date (replace with actual timestamp)
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#users-results').should('contain', 'Expected Result for Custom Date Range'); // Replace with actual assertion
    });

    it('should add a new user', () => {
        // Access the Users section first
        cy.get('li:contains("users")').scrollIntoView().click();
        cy.contains('li', 'Users').click(); // Click on Users button
        cy.wait(5000); // Wait for the users metrics to load

        cy.contains('button', 'Add User').scrollIntoView().click({ force: true });
        
        // Wait for the popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Fill out the form for adding a user
        cy.get('input[name="fullname"]').type('John Doe'); // Enter Full Name
        cy.get('input[name="email"]').type('john.doe@example.com'); // Enter Email

        // Select Role from dropdown
        cy.get('select[name="role"]').select('Player'); // Select Role (replace with actual role)

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the users page to reload
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are back on the users page
        cy.url().should('include', '/users/users'); // Ensure the URL is correct
    });
});


describe('Glo Admin Users Section - Search, Download, and Delete Functionality', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 30 seconds to allow the dashboard to load
        cy.wait(30000); // Wait for 30 seconds
    });

    it('should search for a user by name', () => {
        // Access the Users section first
        cy.get('li:contains("users")').scrollIntoView().click();
        cy.contains('li', 'Users').click(); // Click on Users button
        cy.wait(5000); // Wait for the users metrics to load

        // Scroll into view and type in the search box
        cy.get('input[type="text"][placeholder="Search by name, email, role"]').scrollIntoView().type('John Doe'); // Replace with actual user name
    });

    it('should download users', () => {
        // Access the Users section first
        cy.get('li:contains("users")').scrollIntoView().click();
        cy.contains('li', 'Users').click(); // Click on Users button
        cy.wait(5000); // Wait for the users metrics to load

        // Scroll into view and click the download button
        cy.get('svg[stroke="currentColor"][fill="currentColor"]').scrollIntoView().click(); // Click the download button
    });

    it('should delete a user', () => {
        // Access the Users section first
        cy.get('li:contains("users")').scrollIntoView().click();
        cy.contains('li', 'Users').click(); // Click on Users button
        cy.wait(5000); // Wait for the users metrics to load

        // Scroll into view and click the delete button for the specific user
        cy.contains('John Doe') // Replace with the actual user name
            .parents('tr') // Assuming the user is in a table row
            .find('p.text-red-500') // Find the delete button
            .scrollIntoView()
            .click(); // Click the delete button

        // Wait for the confirmation popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Scroll into view and click the "Yes" button in the confirmation popup
        cy.get('button.swal2-confirm').scrollIntoView().click(); // Click "Yes"

        // Wait for the acknowledgment popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Scroll into view and click the "OK" button in the acknowledgment popup
        cy.get('button.swal2-confirm').scrollIntoView().click(); // Click "OK"
    });
});


describe('Glo Admin Users Section - Negative and Edge Case Tests', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 30 seconds to allow the dashboard to load
        cy.wait(30000); // Wait for 30 seconds
    });

    it('should not add a user that already exists', () => {
        // Access the Users section first
        cy.get('li:contains("users")').scrollIntoView().click();
        cy.contains('li', 'Users').click(); // Click on Users button
        cy.wait(5000); // Wait for the users metrics to load

        // Click the "Add User" button
        cy.contains('button', 'Add User').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Fill out the form for adding a user
        cy.get('input[name="fullname"]').type('John Doe'); // Enter Full Name
        cy.get('input[name="email"]').type('john.doe@example.com'); // Enter Email

        // Select Role from dropdown
        cy.get('select[name="role"]').select('Player'); // Select Role

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });
    });

    it('should not add a user with an empty full name', () => {
        // Access the Users section first
        cy.get('li:contains("users")').scrollIntoView().click();
        cy.contains('li', 'Users').click(); // Click on Users button
        cy.wait(5000); // Wait for the users metrics to load

        // Click the "Add User" button
        cy.contains('button', 'Add User').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Leave the full name empty
        cy.get('input[name="fullname"]').clear(); // Clear Full Name
        cy.get('input[name="email"]').type('john.doe@example.com'); // Enter Email

        // Select Role from dropdown
        cy.get('select[name="role"]').select('Player'); // Select Role

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });
    });

    it('should not add a user with an empty email', () => {
        // Access the Users section first
        cy.get('li:contains("users")').scrollIntoView().click();
        cy.contains('li', 'Users').click(); // Click on Users button
        cy.wait(5000); // Wait for the users metrics 

        // Click the "Add User" button
        cy.contains('button', 'Add User').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Fill out the form for adding a user
        cy.get('input[name="fullname"]').type('John Doe'); // Enter Full Name
        cy.get('input[name="email"]').clear(); // Leave Email empty

        // Select Role from dropdown
        cy.get('select[name="role"]').select('Player'); // Select Role

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });
    });

    it('should add a user with an invalid email (which is not supposed to', () => {
        // Access the Users section first
        cy.get('li:contains("users")').scrollIntoView().click();
        cy.contains('li', 'Users').click(); // Click on Users button
        cy.wait(5000); // Wait for the users metrics to load

        // Click the "Add User" button
        cy.contains('button', 'Add User').scrollIntoView().click({ force: true });
        cy.wait(2000); // Wait for the popup to appear

        // Fill out the form for adding a user
        cy.get('input[name="fullname"]').type('John Doe'); // Enter Full Name
        cy.get('input[name="email"]').type('invalid-email'); // Enter Invalid Email

        // Select Role from dropdown
        cy.get('select[name="role"]').select('Player'); // Select Role

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });
    });
});


describe('Glo Admin Roles Section', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(25000); // Wait for 15 seconds
    });

    it('should access "Roles" section and perform normal metrics', () => {
        // Scroll into view and click the "Roles" submenu item
        cy.get('li:contains("users")').scrollIntoView().click(); // Click on Users dropdown
        cy.contains('li', 'Roles').click(); // Click on Roles option

        // Wait for the roles metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the roles page
        cy.url().should('include', '/users/roles'); // Ensure the URL is correct

        // Perform normal metrics checks (e.g., This Week, This Month, Today, etc.)
        // Example for "This Week"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'This Week').click(); // Select "This Week"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#roles-results').should('contain', 'Expected Result for This Week'); // Replace with actual assertion

        // Example for "This Month"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'This Month').click(); // Select "This Month"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#roles-results').should('contain', 'Expected Result for This Month'); // Replace with actual assertion

        // Example for "Today"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'Today').click(); // Select "Today"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#roles-results').should('contain', 'Expected Result for Today'); // Replace with actual assertion

        // Example for "This Quarter"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'This Quarter').click(); // Select "This Quarter"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#roles-results').should('contain', 'Expected Result for This Quarter'); // Replace with actual assertion

        // Example for "Custom Date Range"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'Custom Date Range').click(); // Select "Custom Date Range"
        cy.get('span:contains("Start")').click(); // Click on start date
        cy.get('button[data-timestamp="1729234800000"]').click(); // Select start date (replace with actual timestamp)
        cy.get('span:contains("End")').click(); // Click on end date
        cy.get('button[data-timestamp="1730358000000"]').click(); // Select end date (replace with actual timestamp)
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#roles-results').should('contain', 'Expected Result for Custom Date Range'); // Replace with actual assertion
    });

    it('should create a new role', () => {
        // Access the Roles section first
        cy.get('li:contains("users")').scrollIntoView().click(); // Click on Users dropdown
        cy.contains('li', 'Roles').click(); // Click on Roles option
        cy.wait(5000); // Wait for the roles metrics to load

        // Click the "Create Role" button
        cy.contains('button', 'Create Role').scrollIntoView().click({ force: true });
        
        // Wait for the popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Fill out the form for creating a role
        cy.get('input[name="rolename"]').type('Test Role'); // Enter Role Name

        // Select Category from dropdown
        cy.get('select[name="category.[0].name"]').select('Analytics'); // Select Category (replace with actual category)

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the roles page to reload
        cy.wait(5000); // Adjust wait time as necessary
    });
});


describe('Glo Admin Roles Section - Search and Download Functionality', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 25 seconds to allow the dashboard to load
        cy.wait(25000); // Wait for 25 seconds
    });

    it('should search for a role by name', () => {
        // Access the Roles section first
        cy.get('li:contains("users")').scrollIntoView().click(); // Click on Users dropdown
        cy.contains('li', 'Roles').click(); // Click on Roles option
        cy.wait(5000); // Wait for the roles metrics to load

        // Scroll into view and type in the search box
        cy.get('input[type="text"][placeholder="Search role"]').scrollIntoView().type('Test Role'); // Replace with actual role name
    });

    it('should download roles', () => {
        // Access the Roles section first
        cy.get('li:contains("users")').scrollIntoView().click(); // Click on Users dropdown
        cy.contains('li', 'Roles').click(); // Click on Roles option
        cy.wait(5000); // Wait for the roles metrics to load

        // Scroll into view and click the download button
        cy.get('button.btn.btn-sm.btn-outline').scrollIntoView().click(); // Click the download button
    });
});

describe('Glo Admin Roles Section - Negative and Edge Case Tests', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Wait for the application to load after login
        cy.wait(5000); // Adjust wait time as necessary

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');
    });

    it('should not create a role with an empty name', () => {
        // Access the Roles section first
        cy.get('li:contains("users")').scrollIntoView().click(); // Click on Users dropdown
        cy.contains('li', 'Roles').click(); // Click on Roles option
        cy.wait(5000); // Wait for the roles metrics to load

        // Click the "Create Role" button
        cy.contains('button', 'Create Role').scrollIntoView().click({ force: true });

        // Wait for the popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Leave the role name empty
        cy.get('input[name="rolename"]').clear(); // Clear the input field

        // Select a category from dropdown
        cy.get('select[name="category.[0].name"]').select('Analytics'); // Select Category

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the roles page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the roles page
        cy.url().should('include', '/users/roles'); // Ensure the URL is correct
    });

    it('should not create a role with a name that is too long', () => {
        // Access the Roles section first
        cy.get('li:contains("users")').scrollIntoView().click(); // Click on Users dropdown
        cy.contains('li', 'Roles').click(); // Click on Roles option
        cy.wait(5000); // Wait for the roles metrics to load

        // Click the "Create Role" button
        cy.contains('button', 'Create Role').scrollIntoView().click({ force: true });

        // Wait for the popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Fill out the form with a long role name
        const longRoleName = 'A'.repeat(256); // Assuming the max length is 255 characters
        cy.get('input[name="rolename"]').clear().type(longRoleName); // Enter long Role Name

        // Select a category from dropdown
        cy.get('select[name="category.[0].name"]').select('Analytics'); // Select Category

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the roles page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the roles page
        cy.url().should('include', '/users/roles'); // Ensure the URL is correct
    });
});


describe('Glo Admin Permissions Section', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should access "Permissions" section and perform normal metrics', () => {
        // Scroll into view and click the "Permissions" submenu item
        cy.get('li:contains("users")').scrollIntoView().click(); // Click on Users dropdown
        cy.contains('li', 'Permissions').click(); // Click on Permissions option

        // Wait for the permissions metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the permissions page
        cy.url().should('include', '/users/permissions'); // Ensure the URL is correct

        // Perform normal metrics checks (e.g., This Week, This Month, Today, etc.)
        // Example for "This Week"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'This Week').click(); // Select "This Week"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#permissions-results').should('contain', 'Expected Result for This Week'); // Replace with actual assertion

        // Example for "This Month"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'This Month').click(); // Select "This Month"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#permissions-results').should('contain', 'Expected Result for This Month'); // Replace with actual assertion

        // Example for "Today"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'Today').click(); // Select "Today"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#permissions-results').should('contain', 'Expected Result for Today'); // Replace with actual assertion

        // Example for "This Quarter"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'This Quarter').click(); // Select "This Quarter"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#permissions-results').should('contain', 'Expected Result for This Quarter'); // Replace with actual assertion

        // Example for "Custom Date Range"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'Custom Date Range').click(); // Select "Custom Date Range"
        cy.get('span:contains("Start")').click(); // Click on start date
        cy.get('button[data-timestamp="1729234800000"]').click(); // Select start date (replace with actual timestamp)
        cy.get('span:contains("End")').click(); // Click on end date
        cy.get('button[data-timestamp="1730358000000"]').click(); // Select end date (replace with actual timestamp)
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#permissions-results').should('contain', 'Expected Result for Custom Date Range'); // Replace with actual assertion
    });

    it('should create a new permission', () => {
        // Access the Permissions section first
        cy.get('li:contains("users")').scrollIntoView().click(); // Click on Users dropdown
        cy.contains('li', 'Permissions').click(); // Click on Permissions option
        cy.wait(5000); // Wait for the permissions metrics to load

        // Click the "Create Permission" button
        cy.contains('button', 'Create Permission').scrollIntoView().click({ force: true });
        
        // Wait for the popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Fill out the form for creating a permission
        cy.get('input[name="name"]').type('Test Permission'); // Enter Permission Name

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the permissions page to reload
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are back on the permissions page
        cy.url().should('include', '/users/permissions'); // Ensure the URL is correct
    });
});


describe('Glo Admin Permissions Section - Search and Download Functionality', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should search for a permission by name', () => {
        // Access the Permissions section first
        cy.get('li:contains("users")').scrollIntoView().click(); // Click on Users dropdown
        cy.contains('li', 'Permissions').click(); // Click on Permissions option
        cy.wait(5000); // Wait for the permissions metrics to load

        // Scroll into view and type in the search box
        cy.get('input[type="text"][placeholder="Search Permission"]').scrollIntoView().type('Test Permission'); // Replace with actual permission name
    });

    it('should download permissions', () => {
        // Access the Permissions section first
        cy.get('li:contains("users")').scrollIntoView().click(); // Click on Users dropdown
        cy.contains('li', 'Permissions').click(); // Click on Permissions option
        cy.wait(5000); // Wait for the permissions metrics to load

        // Scroll into view and click the download button
        cy.get('svg[stroke="currentColor"][fill="currentColor"]').scrollIntoView().click(); // Click the download button
    });
});

describe('Glo Admin Permissions Section - Negative and Edge Case Tests', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        
        // Wait for the application to load after login
        cy.wait(35000); // Adjust wait time as necessary

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should not create a permission with an empty name', () => {
        // Access the Permissions section first
        cy.get('li:contains("users")').scrollIntoView().click(); // Click on Users dropdown
        cy.contains('li', 'Permissions').click(); // Click on Permissions option
        cy.wait(5000); // Wait for the permissions metrics to load

        // Click the "Create Permission" button
        cy.contains('button', 'Create Permission').scrollIntoView().click({ force: true });

        // Wait for the popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Leave the permission name empty
        cy.get('input[name="name"]').clear(); // Clear the input field

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the permissions page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the permissions page
        cy.url().should('include', '/users/permissions'); // Ensure the URL is correct
    });

    it('should not create a permission with a name that is too long', () => {
        // Access the Permissions section first
        cy.get('li:contains("users")').scrollIntoView().click(); // Click on Users dropdown
        cy.contains('li', 'Permissions').click(); // Click on Permissions option
        cy.wait(5000); // Wait for the permissions metrics to load

        // Click the "Create Permission" button
        cy.contains('button', 'Create Permission').scrollIntoView().click({ force: true });

        // Wait for the popup to appear
        cy.wait(2000); // Adjust wait time as necessary

        // Fill out the form with a long permission name
        const longPermissionName = 'A'.repeat(256); // Assuming the max length is 255 characters
        cy.get('input[name="name"]').clear().type(longPermissionName); // Enter long Permission Name

        // Click the Save button
        cy.get('button.btn.btn-outlined[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the permissions page to reload
        cy.wait(2000); // Adjust wait time as necessary

        // Verify that we are still on the permissions page
        cy.url().should('include', '/users/permissions'); // Ensure the URL is correct
    });
});


describe('Glo Admin Analytics and Reports Section', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it.only('should access "Analytics and Reports" section and perform normal metrics', () => {
        // Scroll into view and click the "Analytics and Reports" submenu item
        cy.get('li:contains("analytics and reports")').scrollIntoView().click();

        // Wait for the analytics and reports metrics to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the analytics and reports page
        cy.url().should('include', '/report'); // Ensure the URL is correct

        // Perform normal metrics checks (e.g., This Week, This Month, Today, etc.)
        // Example for "This Week"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'This Week').click(); // Select "This Week"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#analytics-results').should('contain', 'Expected Result for This Week'); // Replace with actual assertion

        // Example for "This Month"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'This Month').click(); // Select "This Month"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#analytics-results').should('contain', 'Expected Result for This Month'); // Replace with actual assertion

        // Example for "Today"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'Today').click(); // Select "Today"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#analytics-results').should('contain', 'Expected Result for Today'); // Replace with actual assertion

        // Example for "This Quarter"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'This Quarter').click(); // Select "This Quarter"
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#analytics-results').should('contain', 'Expected Result for This Quarter'); // Replace with actual assertion

        // Example for "Custom Date Range"
        cy.get('button.capitalize.justify-between').click(); // Open metrics dropdown
        cy.contains('li', 'Custom Date Range').click(); // Select "Custom Date Range"
        cy.get('span:contains("Start")').click(); // Click on start date
        cy.get('button[data-timestamp="1729234800000"]').click(); // Select start date (replace with actual timestamp)
        cy.get('span:contains("End")').click(); // Click on end date
        cy.get('button[data-timestamp="1730358000000"]').click(); // Select end date (replace with actual timestamp)
        cy.get('button.min-w-full').contains('Apply').click(); // Apply selection
        cy.get('#analytics-results').should('contain', 'Expected Result for Custom Date Range'); // Replace with actual assertion
    });
});


describe('Glo Admin Settings Section', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should access "Settings" section and update settings', () => {
        // Scroll into view and click the "Settings" submenu item
        cy.get('li:contains("Settings")').scrollIntoView().click();

        // Wait for the settings page to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the settings page
        cy.url().should('include', '/settings'); // Ensure the URL is correct

        // Fill out the settings form
        cy.get('input[name="cat_no"]').clear().type('5'); // Fill number of categories
        cy.get('input[name="topic_no"]').clear().type('10'); // Fill topic per category
        cy.get('input[name="question_no"]').clear().type('20'); // Fill questions by category
        cy.get('input[name="lives_per_game"]').clear().type('3'); // Fill lives per game
        cy.get('input[name="timer"]').clear().type('60'); // Fill timer
        cy.get('input[name="scoring_system"]').clear().type('100'); // Fill scoring system
        cy.get('input[name="free_trial_duration"]').clear().type('7'); // Fill free trials duration
        cy.get('input[name="gameplay_cost"]').clear().type('10'); // Fill gameplay cost
        cy.get('input[name="daily_play_limit"]').clear().type('5'); // Fill daily play limit

        // Click the "Update Settings" button
        cy.get('button.btn').scrollIntoView().click({ force: true });

        // Wait for the settings update to process
        cy.wait(5000); // Adjust wait time as necessary

        // Optionally, verify that the settings were updated successfully
        // This could be a success message or a check that the values are saved
      //  cy.get('.notification').should('contain', 'Settings updated successfully'); // Replace with actual assertion
    });
});


describe('Glo Admin Logout Functionality', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should log out successfully', () => {
        // Scroll into view and click the "Log out" submenu item
        cy.get('li:contains("Log out")').scrollIntoView().click();

        // Wait for the logout process to complete
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are redirected to the login page
        cy.url().should('include', '/login'); // Ensure the URL is correct
    });
});


describe('Glo Admin Profile Edit Functionality', () => {
    beforeEach(() => {
        // Visit the login page
        cy.visit('https://mtn-glo-dashboard.qwizfun.com/login');

        // Input email
        cy.get('input[name="email"]').type('admin@qwiz.ng');

        // Input password
        cy.get('input[name="password"]').type('R#k7P!2z9@q8');

        // Submit the form
        cy.get('button.bg-primary').click();

        // Ensure we are on the dashboard
        cy.url().should('include', '/dashboard');

        // Wait for 15 seconds to allow the dashboard to load
        cy.wait(15000); // Wait for 15 seconds
    });

    it('should edit the profile successfully', () => {
        // Click on the profile image to navigate to the profile page
        cy.get('img[src="/logo/default_pic.jpeg"]').scrollIntoView().click(); // Click on the profile image

        // Wait for the profile page to load
        cy.wait(5000); // Adjust wait time as necessary

        // Verify that we are on the profile page
        cy.url().should('include', '/profile'); // Ensure the URL is correct

        // Fill out the profile form
        cy.get('input[name="name"]').clear().type('Super Admin'); // Fill name
        cy.get('select[name="role_id"]').select('TEst Role4'); // Select last name (role)

        // Fill password
        cy.get('input[name="password"]').clear().type('R#k7P!2z9@q8'); // Fill new password

        // Click the "Save Changes" button
        cy.get('button[type="submit"]').scrollIntoView().click({ force: true });

        // Wait for the profile update to process
        cy.wait(5000); // Adjust wait time as necessary
    });
});