
document.addEventListener("DOMContentLoaded", () => {

//vamos conversar
    const dispararEmail = () => {
        window.location.href = "mailto:milena.araujo@cesar.school?subject=Contato%20via%20Portfólio";
    };

    const botoesContato = ['btn-header-contato', 'btn-sobre-contato', 'btn-projetos-contato'];
    botoesContato.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', dispararEmail);
    });

    const btnTema = document.getElementById('btn-tema');
    const body = document.body;

    const temaSalvo = localStorage.getItem('modo-escuro');

    if (temaSalvo === 'ativo') {
        body.classList.add('dark-mode');
        if (btnTema) btnTema.textContent = "☀︎"; 
    }
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('modo-escuro', 'ativo');
                btnTema.textContent = "☀︎"; 
            } else {
                localStorage.setItem('modo-escuro', 'inativo');
                btnTema.textContent = "⏾"; 
            }
        });
    }

    const elementoData = document.getElementById('data-atual');
    
    if (elementoData) {
        const dataHoje = new Date();
        const dia = String(dataHoje.getDate()).padStart(2, '0');
        const mes = String(dataHoje.getMonth() + 1).padStart(2, '0');
        const ano = dataHoje.getFullYear();
        elementoData.textContent = `${dia}/${mes}/${ano}`;
    }
});

