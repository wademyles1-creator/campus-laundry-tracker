let machines = [
    { name: "Washer 1", status: "Running", time: 15 },
    { name: "Dryer 1", status: "Available", time: 0 },
    { name: "Washer 2", status: "Finished", time: 0 }
];

function displayMachines() {
    let container = document.getElementById("machines");
    container.innerHTML = "";

    machines.forEach(machine => {
        let div = document.createElement("div");
        div.className = "machine";

        div.innerHTML = `
            <h3>${machine.name}</h3>
            <p>Status: ${machine.status}</p>
            <p>Time Left: ${machine.time} min</p>
        `;

        container.appendChild(div);
    });
}

function updateMachines() {
    machines.forEach(machine => {
        if (machine.status === "Running" && machine.time > 0) {
            machine.time -= 5;
            if (machine.time <= 0) {
                machine.status = "Finished";
                machine.time = 0;
            }
        }
    });

    displayMachines();
}

displayMachines();