const toggleBtn = document.querySelectorAll("button");
toggleBtn.forEach(button => {
    button.addEventListener("click", function() {
        this.classList.toggle("active");
        const answer = this.nextElementSibling;

        if(answer.style.display === "block") {
            answer.style.display = "none";

            const img = this.querySelector("img");
            img.src = "./images/icon-plus.svg";
        } 
        else {
            answer.style.display = "block";
            const img = this.querySelector("img");
            img.src = "./images/icon-minus.svg";
        }
    });
});