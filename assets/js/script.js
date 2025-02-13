document.addEventListener("DOMContentLoaded", function () {
    const foodWasteBtn = document.getElementById("food-waste-btn");
    const foodWasteSection = document.getElementById("food-waste-analysis");

    foodWasteBtn.addEventListener("click", function () {
        foodWasteSection.classList.remove("hidden");
        foodWasteSection.scrollIntoView({ behavior: "smooth" });
    });
});
