document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const plans = document.querySelectorAll(".plan");
    const prices = {
        monthly: [10, 20, 30, 50],
        yearly: [100, 200, 300, 500]
    };

    
    function updatePrices() {
        const type = toggle.checked ? "yearly" : "monthly";
        plans.forEach((plan, index) => {
            const priceElement = plan.querySelector(".price");
            const period = toggle.checked ? "/year" : "/month";
            priceElement.innerHTML = `$${prices[type][index]}<span class="period">${period}</span>`;
        });
    }

    
    toggle.addEventListener("change", () => {
        updatePrices();
        animatePrices();
    });

    
    function animatePrices() {
        plans.forEach((plan) => {
            plan.style.transition = "transform 0.3s";
            plan.style.transform = "scale(1.1)";
            setTimeout(() => {
                plan.style.transform = "scale(1)";
            }, 300);
        });
    }

    
    const selectButtons = document.querySelectorAll(".select-btn");
    selectButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            
            plans.forEach((plan) => plan.classList.remove("selected"));

            
            const selectedPlan = e.target.closest(".plan");
            selectedPlan.classList.add("selected");

            
            const planName = selectedPlan.querySelector("h2").textContent;
            const planPrice = selectedPlan.querySelector(".price").textContent;
            alert(`You selected the ${planName} plan with a price of ${planPrice}!`);
        });
    });

    
    updatePrices();
});
