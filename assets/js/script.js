function showForm(formType) {
    const formContainer = document.getElementById('formContainer');
    
    fetch(`/booking/${formType}Form`)
      .then(response => response.text())
      .then(html => {
        formContainer.innerHTML = html;

        // Re-initialize event listeners for dynamically loaded content
        initializeDynamicFormFeatures();
      })
      .catch(error => {
        console.error('Error loading form:', error);
        formContainer.innerHTML = '<h2>Failed to load form. Please try again later.</h2>';
      });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeDynamicFormFeatures();
});

function initializeDynamicFormFeatures() {
    // Function to add new snack input field
    function addSnack() {
        const snackList = document.getElementById('snacks-list');
        const newSnack = document.createElement('div');
        newSnack.classList.add('item');
        newSnack.innerHTML = `
            <input type="text" name="snacks[]" placeholder="Enter snack" required>
            <button type="button" class="remove-snack delete-button">&times;</button>
        `;
        snackList.appendChild(newSnack);

        // Add event listener to remove button
        newSnack.querySelector('.remove-snack').addEventListener('click', function() {
            newSnack.remove();
        });
    }

    // Function to add new high tea input field
    function addHighTea() {
        const highTeaList = document.getElementById('high-tea-list');
        const newHighTea = document.createElement('div');
        newHighTea.classList.add('item');
        newHighTea.innerHTML = `
            <input type="text" name="highTea[]" placeholder="Enter high tea item" required>
            <button type="button" class="remove-snack delete-button">&times;</button>
        `;
        highTeaList.appendChild(newHighTea);

        // Add event listener to remove button
        newHighTea.querySelector('.remove-snack').addEventListener('click', function() {
            newHighTea.remove();
        });
    }

    // Function to add new lunch input field
    function addLunch() {
        const lunchList = document.getElementById('lunch-list');
        const newLunch = document.createElement('div');
        newLunch.classList.add('item');
        newLunch.innerHTML = `
            <input type="text" name="lunch[]" placeholder="Enter lunch item" required>
            <button type="button" class="remove-snack delete-button">&times;</button>
        `;
        lunchList.appendChild(newLunch);

        // Add event listener to remove button
        newLunch.querySelector('.remove-snack').addEventListener('click', function() {
            newLunch.remove();
        });
    }

    // Add event listeners to the "Add" buttons
    const addSnackButton = document.querySelector('.add-snack');
    const addHighTeaButton = document.querySelector('.add-high-tea');
    const addLunchButton = document.querySelector('.add-lunch');

    if (addSnackButton) addSnackButton.addEventListener('click', addSnack);
    if (addHighTeaButton) addHighTeaButton.addEventListener('click', addHighTea);
    if (addLunchButton) addLunchButton.addEventListener('click', addLunch);
}
