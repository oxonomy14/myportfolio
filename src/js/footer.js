import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const commentsInput = document.getElementById("comments");
    const sendButton = document.querySelector(".footer-send-btn");
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalClose = document.querySelector(".modal-close");
    const modalTitle = document.querySelector(".modal-title");
    const modalMessage = document.querySelector(".modal-description");
    const successMessage = document.createElement("p");

    successMessage.classList.add("success-message");


    function openModal(title, message) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modalOverlay.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modalOverlay.classList.remove("is-open");
        document.body.style.overflow = "";
    }

    modalClose.addEventListener("click", closeModal);

    modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    function truncateInput(inputElement, maxLength) {
        if (inputElement.value.length > maxLength) {
            inputElement.value = inputElement.value.substring(0, maxLength) + "...";
        }
    }

    commentsInput.addEventListener("input", function () {
        truncateInput(commentsInput, 100);
    });


    emailInput.addEventListener("input", function () {
        const email = emailInput.value.trim();
        const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

         if (emailPattern.test(email)) {
            successMessage.textContent = "Success!";
            successMessage.style.display = "block"; 

           
            if (!emailInput.nextElementSibling || emailInput.nextElementSibling !== successMessage) {
                emailInput.insertAdjacentElement('afterend', successMessage);
            }
        } else {
            successMessage.style.opacity = "0"; 

            if (emailInput.nextElementSibling === successMessage) {
                emailInput.nextElementSibling.remove();
            }
        }
    });

    sendButton.addEventListener("click", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const comments = commentsInput.value.trim();

        const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!emailPattern.test(email)) {
            iziToast.error({
                title: 'Error',
                message: 'Please enter a valid email address!',
                position: 'bottomRight'
            });
            return;
        }

        if (comments.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'The comments field cannot be empty!',
                position: 'bottomRight'
            });
            return;
        }

        fetch("https://portfolio-js.b.goit.study/api/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, comment: comments }),
        })
            .then((response) => response.json())
            .then((data) => {

                openModal(data.title, data.message);
                form.reset();

                iziToast.success({
                    title: 'Success',
                    message: 'Your request has been sent successfully!',
                    position: 'bottomRight'
                });

                if (emailInput.nextElementSibling === successMessage) {
                    emailInput.nextElementSibling.remove();
                }
            })
            .catch((error) => {
                iziToast.error({
                    title: 'Error',
                    message: 'An error occurred, please try again!',
                    position: 'bottomRight'
                });
                console.error("Error:", error);
            });
    });
});