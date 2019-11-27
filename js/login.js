const Up = document.getElementById('signUp');
const In = document.getElementById('signIn');
const container = document.getElementById('container');

Up.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

In.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});