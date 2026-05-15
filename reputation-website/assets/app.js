const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.addEventListener("click", (event) => {
        if (event.target.matches("a")) {
            siteNav.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        }
    });
}

const tabButtons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll("[data-dashboard-panel]");

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const panelName = button.dataset.panel;

        tabButtons.forEach((item) => item.classList.remove("is-active"));
        panels.forEach((panel) => panel.classList.remove("is-active"));

        button.classList.add("is-active");
        document.querySelector(`[data-dashboard-panel="${panelName}"]`)?.classList.add("is-active");
    });
});

const billingButtons = document.querySelectorAll(".billing-btn");
const priceNodes = document.querySelectorAll("[data-price]");

billingButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const billing = button.dataset.billing;

        billingButtons.forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");

        priceNodes.forEach((node) => {
            const monthly = Number(node.dataset.price);
            const annual = Math.round(monthly * 0.82);
            node.textContent = `$${billing === "annual" ? annual : monthly}`;
        });
    });
});

const form = document.querySelector(".contact-form");
const formNote = document.querySelector(".form-note");

if (form && formNote) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            formNote.textContent = "Please complete the required fields first.";
            formNote.style.color = "#d84f4f";
            form.reportValidity();
            return;
        }

        formNote.textContent = "Thanks. Your reputation audit request is ready to connect to a backend.";
        formNote.style.color = "#24b47e";
        form.reset();
    });
}
