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
	document.searchWineryForm.searchCityButton.addEventListener("click", function(event) {
		event.preventDefault();
		let city = document.searchWineryForm.searchCity.value;
		let xhr = new XMLHttpRequest();
		xhr.open("GET", "api/wineries/search/" + city);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200) {
					let wineries = JSON.parse(xhr.responseText);
					displaySearchWineries(wineries);
				} else {

				}
			}
		}
		xhr.send();
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
					tableData.name = `${key}`
					tableData.setAttribute("contenteditable", "true");
					tableRow.appendChild(tableData);
				}
			});

			let editButtonTableData = document.createElement("td");
			let editButton = document.createElement("button");
			editButton.textContent = "Edit Winery";
			editButton.classList.add("btn", "btn-primary");
			editButton.addEventListener("click", function(event) {
				let wineryNameCol = tableRow.firstElementChild;
				let wineryStreetCol = wineryNameCol.nextElementSibling;
				let wineryCityCol = wineryStreetCol.nextElementSibling;
				let wineryStateCol = wineryCityCol.nextElementSibling;
				let updatedWinery = {
					name: wineryNameCol.textContent,
					street: wineryStreetCol.textContent,
					city: wineryCityCol.textContent,
					state: wineryStateCol.textContent
				}
				editWinery(updatedWinery, winery.id);
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

function editWinery(winery, wineryId) {
	let xhr = new XMLHttpRequest();
	xhr.open("PUT", "api/wineries/" + wineryId);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status >= 200 && xhr.status <= 300) {
				loadAllWineries();
			} else {
				let errorHeader = document.getElementById("errorHeader");
				errorHeader.textContent = "Error trying to edit the winery";
			}
		}
	};

	xhr.send(JSON.stringify(winery));
}

function deleteWinery(wineryId) {
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", "api/wineries/" + wineryId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status >= 200 && xhr.status <= 300) {
				loadAllWineries();
			} else {
				let errorHeader = document.getElementById("errorHeader");
				errorHeader.textContent = "Error trying to delete the winery";
			}
		}
	};

	xhr.send();
}

function postWinery(winery) {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "api/wineries");
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

function displaySearchWineries(wineries) {
	let tableHead = document.getElementById("winerySearchTableHead");
	if (tableHead.hasChildNodes()) {
		tableHead.removeChild(tableHead.firstChild);
	}
	let headRow = document.createElement("tr");
	for (let i = 0; i < 4; i++) {
		let tableHeader = document.createElement("th");
		if (i === 0) {
			tableHeader.textContent = "Name";
		} else if (i === 1) {
			tableHeader.textContent = "Street";
		} else if (i === 2) {
			tableHeader.textContent = "City";
		} else {
			tableHeader.textContent = "State";
		}
		headRow.appendChild(tableHeader);
	}
	tableHead.appendChild(headRow);
	
	let tableBody = document.getElementById("winerySearchTable");
	tableBody.textContent = "";
	for (let winery of wineries) {
		let tableRow = document.createElement("tr");
		tableBody.appendChild(tableRow);
		Object.entries(winery).forEach(([key, value]) => {
			if (`${key}` !== "id") {
				let tableData = document.createElement("td");
				tableData.textContent = `${value}`;
				tableData.name = `${key}`
				tableData.setAttribute("contenteditable", "true");
				tableRow.appendChild(tableData);
			}
		});
	}
}












