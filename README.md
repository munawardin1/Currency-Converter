Currency Converter

A real-time currency converter built with HTML, CSS, and JavaScript that allows users to convert any amount from one currency to another using a live API. Flags are displayed dynamically for selected currencies.

🔹 Features

Real-time currency conversion while typing the amount

Automatically updates conversion when the From or To currency is changed

Shows currency flags next to selected currencies

Two decimal precision for conversion results

Default amount = 1 and default conversion on page load

Error handling if API fails or network is unavailable

Responsive and user-friendly interface

🔹 Technologies Used

HTML5 – Structure of the converter

CSS3 – Styling and layout

JavaScript (ES6) – Logic for conversion and DOM manipulation

Currency API – Latest Currency API

Flags API – FlagsAPI

🔹 How It Works

Populate Dropdowns:
On page load, all available currencies are added to the From and To dropdowns. Default selection is USD → PKR.

Update Flags:
Flags update dynamically whenever a currency is selected from the dropdown.

Live Conversion:

User types an amount → conversion result updates instantly.

Currency is changed → conversion result updates automatically.

API Call:
The app fetches conversion rates from the Latest Currency API and calculates the result with two decimal precision.

Live Demo ---->  https://munawardin1.github.io/Currency-Converter/
