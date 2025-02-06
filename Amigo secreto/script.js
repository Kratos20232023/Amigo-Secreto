let participants = [];

function addName() {
    let nameInput = document.getElementById("nameInput");
    let name = nameInput.value.trim();

    if (name !== "" && !participants.includes(name)) {
        participants.push(name);
        updateNameList();
        nameInput.value = "";
    } else {
        alert("Nombre vacío o ya agregado.");
    }
}

function updateNameList() {
    let nameList = document.getElementById("nameList");
    nameList.innerHTML = "";
    participants.forEach(name => {
        let li = document.createElement("li");
        li.textContent = name;
        nameList.appendChild(li);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function assignSecretFriend() {
    if (participants.length < 2) {
        alert("Debe haber al menos 2 participantes.");
        return;
    }

    let shuffled = [...participants];
    
    do {
        shuffleArray(shuffled);
    } while (hasDuplicates(participants, shuffled));

    let resultText = "<h2>Resultados</h2><ul>";
    for (let i = 0; i < participants.length; i++) {
        resultText += <li>${participants[i]} → ${shuffled[i]}</li>;
    }
    resultText += "</ul>";

    document.getElementById("result").innerHTML = resultText;
}

// Verifica si alguien se asignó a sí mismo
function hasDuplicates(original, shuffled) {
    return original.some((name, index) => name === shuffled[index]);
}
