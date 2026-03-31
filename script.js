function showPage(pageId) {
    let sections = document.querySelectorAll("section");
    sections.forEach(sec => sec.style.display = "none");
    document.getElementById(pageId).style.display = "flex";
}

window.onload = function() {
    showPage('home');
};

function loginUser(){
    let name = document.getElementById("loginName").value;
    let email = document.getElementById("loginEmail").value;
    let result = document.getElementById("loginResult");

    let namePattern = /^[A-Za-z]+$/;
    let emailPattern = /^[A-Za-z]+@gmail\.com$/;

    if(!namePattern.test(name)){
        result.innerHTML = "❌ Name should contain only alphabets";
        return;
    }

    if(!emailPattern.test(email)){
        result.innerHTML = "❌ Email must be abc@gmail.com";
        return;
    }

    result.innerHTML = "✅ Welcome " + name + "<br>Email: " + email;

    setTimeout(() => {
        showPage('destinations');
    }, 1000);
}

function getRecommendation() {
    let type = document.getElementById("type").value;
    let budget = document.getElementById("budget").value;
    let season = document.getElementById("season").value;
    let result = document.getElementById("result");

    if (!type || !budget || !season) {
        result.innerHTML = "⚠️ Please select all options!";
        return;
    }

    let place = "";

    if (type === "beach") {
        if (budget === "low") {
            place = (season === "summer") ? "Goa 🏖️ / Pondicherry 🌊" : "Gokarna 🌴 / Varkala 🏝️";
        } else if (budget === "medium") {
            place = (season === "summer") ? "Andaman & Nicobar 🐚" : "Lakshadweep 🐠";
        } else {
            place = (season === "summer") ? "Bali ✈️" : "Maldives 🌊";
        }
    }
    else if (type === "mountain") {
        if (season === "winter") {
            place = (budget === "low") ? "Manali ❄️ / Shimla ⛄" :
                    (budget === "medium") ? "Auli 🎿" : "Switzerland 🏔️";
        } else {
            place = (budget === "low") ? "Ooty 🌄 / Kodaikanal 🌿" :
                    (budget === "medium") ? "Coorg ☕" : "New Zealand 🌏";
        }
    }
    else if (type === "historical") {
        if (budget === "low") {
            place = "Hampi 🏛️ / Warangal Fort 🏰";
        } else if (budget === "medium") {
            place = "Jaipur 🐘 / Red Fort 🇮🇳";
        } else {
            place = "Rome 🇮🇹 / Athens 🇬🇷";
        }
    }
    else if (type === "adventure") {
        if (budget === "low") {
            place = "Rishikesh 🚣 / Dandeli 🛶";
        } else if (budget === "medium") {
            place = "Leh-Ladakh 🏍️ / Spiti Valley 🌄";
        } else {
            place = "Dubai Desert Safari 🐫 / Skydiving 🪂";
        }
    }

    result.innerHTML = "✨ Recommended Destinations: " + place;
}

function resetForm() {
    document.getElementById("type").value = "";
    document.getElementById("budget").value = "";
    document.getElementById("season").value = "";
    document.getElementById("result").innerHTML = "";
}

function submitForm() {
    let name = document.getElementById("name").value;
    alert("✅ Thank you " + name + "! Your message has been sent.");
    return false;
} JS