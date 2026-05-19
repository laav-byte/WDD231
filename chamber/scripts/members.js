const container = document.getElementById("membersContainer");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

let membersData = [];
let currentView = "list";

async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        membersData = await response.json();
        render();
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

function render() {
    container.innerHTML = "";

    if (currentView === "grid") {
        renderGrid();
    } else {
        renderList();
    }
}

function renderGrid() {
    container.className = "grid-view";

    membersData.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.number}</p>
            <p><strong>Website:</strong> <a href="http://${member.url}" target="_blank">${member.url}</a></p>
            <p><strong>Level:</strong> ${member.level}</p>
            <p><strong>Hours:</strong> ${member.open_hours}</p>
        `;

        container.appendChild(card);
    });
}

function renderList() {
    container.className = "list-view";

    const wrapper = document.createElement("div");
    wrapper.classList.add("list-table");

    membersData.forEach(member => {
        const row = document.createElement("div");
        row.classList.add("list-row");

        row.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="list-img">
            <span>${member.name}</span>
            <span>${member.address}</span>
            <span>${member.number}</span>
            <span>${member.level}</span>
            <span>${member.open_hours}</span>
            <span><a href="http://${member.url}" target="_blank">Visit</a></span>
        `;

        wrapper.appendChild(row);
    });

    container.appendChild(wrapper);
}

// TOGGLE
gridBtn.addEventListener("click", () => {
    currentView = "grid";
    render();

    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
    currentView = "list";
    render();

    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});

getMembers();