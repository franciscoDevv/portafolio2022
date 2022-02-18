const all = document.getElementById('all');
const clients = document.getElementById('clients');
const nonclients = document.getElementById('non-clients');
const allcontainer = document.getElementById('allcontainer');
const clientscontainer = document.getElementById('clientscontainer');
const nonclientscontainer = document.getElementById('nonclientscontainer');
const allcontainer2 = document.getElementById('allcontainer2');
const nonclientscontainer2 = document.getElementById('nonclientscontainer2');

all.addEventListener('click', () => {
    allcontainer2.classList.remove('none');
    all.classList.add('activebutton');
    allcontainer.classList.remove('none');
    clients.classList.remove('activebutton');
    nonclients.classList.remove('activebutton');
    clientscontainer.classList.add('none');
    nonclientscontainer.classList.add('none');
    nonclientscontainer2.classList.add('none');
})

clients.addEventListener('click', () => {
    allcontainer2.classList.add('none');
    clientscontainer.classList.remove('none');
    all.classList.remove('activebutton');
    clients.classList.add('activebutton');
    nonclients.classList.remove('activebutton');
    allcontainer.classList.add('none');
    nonclientscontainer.classList.add('none');
    nonclientscontainer2.classList.add('none');
})

nonclients.addEventListener('click', () => {
    allcontainer2.classList.add('none');
    nonclientscontainer.classList.remove('none');
    all.classList.remove('activebutton');
    clients.classList.remove('activebutton');
    nonclients.classList.add('activebutton');
    allcontainer.classList.add('none');
    clientscontainer.classList.add('none');
    nonclientscontainer2.classList.remove('none');
})

