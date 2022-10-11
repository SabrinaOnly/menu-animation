const sidebar = document.querySelector('.sidebar');

const button = document.querySelector('.toggle-btn');
button.addEventListener('click',()=>{
    sidebar.classList.toggle('active');
})
