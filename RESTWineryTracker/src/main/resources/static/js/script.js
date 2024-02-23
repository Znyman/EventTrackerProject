window.addEventListener("load", function(event) {
	init();
});

function init() {
	loadAllWineries();
	document.createWineryForm.createWineryButton.addEventListener("click", function(event) {
		event.preventDefault();
		let winery = {
			name: document.createWineryForm.inputWineryName.value,
			street: document.createWineryForm.inputStreet.value,
			city: document.createWineryForm.inputCity.value,
			state: document.createWineryForm.inputState.value
		};
		
		postWinery(winery);
	});
}

function loadAllWineries() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/wineries");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
				let wineries = JSON.parse(xhr.responseText);
				displayWineries(wineries);
			} else {

			}
		}
	}
	xhr.send();
}

function displayWineries(wineries) {
	if (wineries && Array.isArray(wineries) && wineries.length > 0) {
		let tableBody = document.getElementById("wineryTable");
		tableBody.textContent = "";
		for (let winery of wineries) {
			let tableRow = document.createElement("tr");
			tableBody.appendChild(tableRow);
			Object.entries(winery).forEach(([key, value]) => {
				if (`${key}` !== "id") {
					let tableData = document.createElement("td");
					tableData.textContent = `${value}`;
					tableRow.appendChild(tableData);
				}
			});

			let editButtonTableData = document.createElement("td");
			let editButton = document.createElement("button");
			editButton.textContent = "Edit Winery";
			editButton.classList.add("btn", "btn-primary");
			editButton.addEventListener("click", function(event) {
				editWinery(winery.id);
			});
			editButtonTableData.appendChild(editButton);
			tableRow.appendChild(editButtonTableData);
			
			let deleteButtonTableData = document.createElement("td");
			let deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete Winery";
			deleteButton.classList.add("btn", "btn-danger");
			deleteButton.addEventListener("click", function(event) {
				deleteWinery(winery.id);
			});
			deleteButtonTableData.appendChild(deleteButton);
			tableRow.appendChild(deleteButtonTableData);

		}
	}
}

function editWinery(wineryId) {
	console.log(wineryId);
}

function deleteWinery(wineryId) {
	console.log(wineryId);
}

function postWinery(winery) {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "http://localhost:8083/api/wineries");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status >= 200 && xhr.status <= 300) {
				loadAllWineries();
			} else {
				let errorHeader = document.getElementById("errorHeader");
				errorHeader.textContent = "Error trying to create the winery";
			}
		}
	};

	xhr.send(JSON.stringify(winery));
}















