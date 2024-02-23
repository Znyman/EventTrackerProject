console.log("script.js loaded");

window.addEventListener("load", function(event) {
	console.log("page loaded");
	
	loadAllWineries();
});

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
		//TODO: Build an html table
		for (let winery of wineries) {
			let tableRow = document.createElement("tr");
			tableBody.appendChild(tableRow);
			let tableData = document.createElement("td");
			tableData.textContent = winery.id
			tableRow.appendChild(tableData);
			tableData = document.createElement("td");
			tableData.textContent = winery.name;
			tableRow.appendChild(tableData);
			tableRow.wineryId = winery.id;
			
			tableRow.addEventListener("click", function(event) {
//				console.log(event.target);
//				let wineryId = event.target.parentElement.firstElementChild.textContent;
				let wineryId = event.target.parentElement.wineryId;
				console.log(wineryId);
			});
		}
	}
}





















