//Arquivo para Rodar o projeto
console.log("Projeto Iniciado! ");
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

menuToggle.addEventListener('click', () => {
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '55px';
        content.style.marginLeft = '0px';
    } else {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
    }
});

if (document.body.id === 'page-form') {
    //Mascara para Telefone especifico para a pagina de Formulario
    const telefoneInput = document.getElementById('telefone');
    const phoneMaskOptions = {
        mask: '(00) 00000-0000'
    };
    const phoneMask = IMask(telefoneInput, phoneMaskOptions);

    //Mascara Para CFP especifico para a pagina de Formulario
    const cpfInput = document.getElementById('cpf');
    const cpfMaskOptions = {
        mask: '000.000.000-00'
    }
    const cpfMask = IMask(cpfInput, cpfMaskOptions);
}