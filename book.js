var form = document.getElementById('bookForm');
var fields = form.elements;
var params = new URLSearchParams(location.search);

// Select service and package from the link (services page buttons)
fields.service.value = params.get('service') || '';
fields.package.value = params.get('package') || '';

// Earliest booking date = tomorrow
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
fields.date.min = tomorrow.toLocaleDateString('en-CA');

// Show confirmation message (browser already checks the required fields)
form.addEventListener('submit', function (event) {
    event.preventDefault();

    var message = document.getElementById('sent');
    message.textContent = 'Booking request received! ' +
        fields.service.value + ' session (' + fields.package.value +
        ' package) on ' + fields.date.value + ', ' + fields.slot.value +
        '. We will confirm by email soon.';
    message.classList.add('show');
    message.scrollIntoView({ behavior: 'smooth', block: 'center' });
    form.reset();
});
