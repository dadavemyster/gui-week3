// JavaScript Document

/* Multiplication Table Form submit button clicked. */
document.getElementById("multiplicationForm").addEventListener("submit", function(event) {
	event.preventDefault();

	// Declare variables
	let x_min = document.getElementById("x_min").value;
	let x_max = document.getElementById("x_max").value;
	let y_min = document.getElementById("y_min").value;
	let y_max = document.getElementById("y_max").value;
	let table = document.getElementById("multiplicationTable");
	document.getElementById("output").textContent = `You entered: ${x_min}, ${x_max}, ${y_min}, ${y_max}`;

	// Clear old table.
	table.innerHTML = "";

	// Validate input
	if (x_min < -50 || x_max > 50 || y_min < -50 || y_max > 50) {
		document.getElementById("output").textContent = `Invalid. Please enter values between -50 and 50.`;
		return;
	}
	if (x_max - x_min < 1 || y_max - y_min < 1) {
		document.getElementById("output").textContent = `Invalid. Please enter values that allow for at least 1 column per axis.`;
		return;
	}

	// Create first row (header/labels)
	let thead = document.createElement("thead");
	thead.classList.add("bg-primary", "text-white");
	
	let firstRow = document.createElement("tr");
	firstRow.appendChild(document.createElement("th"));

	for (let counter = x_min; counter <= x_max; counter++) {
		let entry = document.createElement("th");
		entry.textContent = counter;
		firstRow.appendChild(entry);
	}
	thead.appendChild(firstRow)
	table.appendChild(thead);

	// Generate rest of table
	let tbody = document.createElement("tbody");

	// Build table row by row (y-axis)
	for (let y = y_min; y <= y_max; y++) {
		let row = document.createElement("tr");
		let th = document.createElement("th");
		th.textContent = y;
		row.appendChild(th);

		// Fill row with each entry/column (x-axis)
		for (let x = x_min; x <= x_max; x++) {
			let td = document.createElement("td");
			td.textContent = x * y;
			row.appendChild(td);
		}

		// Add row to table
		tbody.appendChild(row);
	}
	table.appendChild(tbody);
});