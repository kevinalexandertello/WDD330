let display = document.getElementById("display");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

function getJSON(url) {
    const result = fetch(url).then((response) => response.json());
    console.log(result);
    return result;
}

function createShipList(ships) {
    const list = display.children[1];
    list.innerHTML = "";
    ships.forEach(ship => {
        let tableItem = document.createElement("tr");
        tableItem.innerHTML = `<td>${ship.name}</td><td>${ship.model}</td><td>${ship.cost_in_credits}</td>`;
        list.appendChild(tableItem);
    });
}

function displayShips(url = "https://swapi.dev/api/starships/") {
    getJSON(url).then(function(data) {
        const ships = data.results;
        createShipList(ships);
        if (data.next) {
            next.onclick = () => {
                displayShips(data.next);
            };
        }
        if (data.previous) {
            prev.onclick = () => {
                displayShips(data.previous);
            };
        }
    });
}

displayShips();