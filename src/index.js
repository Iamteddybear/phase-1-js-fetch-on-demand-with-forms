const init = () => {

    const formElement = document.querySelector("form")
    formElement.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchByIDField = document.getElementById("searchByID");
        const id = searchByIDField.value;

        fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
            .then((movie) => {
                const titleElement = document.querySelector("h4");
                const summaryElement = document.querySelector("p");

                titleElement.innerHTML = movie.title;
                summaryElement.innerHTML = movie.summary;
            });
    });

};

document.addEventListener('DOMContentLoaded', init);