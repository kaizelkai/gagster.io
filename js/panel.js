document.addEventListener('DOMContentLoaded', () => {
    const panel1 = document.querySelector('.panel1');
    const panel2 = document.querySelector('.panel2');
    const panel3 = document.querySelector('.panel3');
    const panel4 = document.querySelector('.panel4');
    const panel5 = document.querySelector('.panel5');
    const panel6 = document.querySelector('.panel6');
    const panel7 = document.querySelector('.panel7');

    const aboutPanel = document.querySelector('.aboutPanel');
    const workPanel = document.querySelector('.workPanel');
    const acte1Panel = document.querySelector('.acte1Panel');
    const acte2Panel = document.querySelector('.acte2Panel');
    const acte3Panel = document.querySelector('.acte3Panel');
    const acte4Panel = document.querySelector('.acte4Panel');
    const acte5Panel = document.querySelector('.acte5Panel');


    panel1.addEventListener('click', (event) => {
        event.preventDefault();
        aboutPanel.style.display = "block";
        workPanel.style.display = "none";
        acte1Panel.style.display = "none";
        acte2Panel.style.display = "none";
        acte3Panel.style.display = "none";
        acte4Panel.style.display = "none";
        acte5Panel.style.display = "none";
        
    })
    panel2.addEventListener('click', (event) => {
        event.preventDefault();
        aboutPanel.style.display = "none";
        workPanel.style.display = "block";
        acte1Panel.style.display = "none";
        acte2Panel.style.display = "none";
        acte3Panel.style.display = "none";
        acte4Panel.style.display = "none";
        acte5Panel.style.display = "none";
        
    })

    panel3.addEventListener('click', (event) => {
        event.preventDefault();
        aboutPanel.style.display = "none";
        workPanel.style.display = "none";
        acte1Panel.style.display = "block";
        acte2Panel.style.display = "none";
        acte3Panel.style.display = "none";
        acte4Panel.style.display = "none";
        acte5Panel.style.display = "none";
        
    })

    panel4.addEventListener('click', (event) => {
        event.preventDefault();
        aboutPanel.style.display = "none";
        workPanel.style.display = "none";
        acte1Panel.style.display = "none";
        acte2Panel.style.display = "block";
        acte3Panel.style.display = "none";
        acte4Panel.style.display = "none";
        acte5Panel.style.display = "none";
        
    })
    panel5.addEventListener('click', (event) => {
        event.preventDefault();
        aboutPanel.style.display = "none";
        workPanel.style.display = "none";
        acte1Panel.style.display = "none";
        acte2Panel.style.display = "none";
        acte3Panel.style.display = "block";
        acte4Panel.style.display = "none";
        acte5Panel.style.display = "none";
        
    })

    panel6.addEventListener('click', (event) => {
        event.preventDefault();
        aboutPanel.style.display = "none";
        workPanel.style.display = "none";
        acte1Panel.style.display = "none";
        acte2Panel.style.display = "none";
        acte3Panel.style.display = "none";
        acte4Panel.style.display = "block";
        acte5Panel.style.display = "none";
        
    })
    panel7.addEventListener('click', (event) => {
        event.preventDefault();
        aboutPanel.style.display = "none";
        workPanel.style.display = "none";
        acte1Panel.style.display = "none";
        acte2Panel.style.display = "none";
        acte3Panel.style.display = "none";
        acte4Panel.style.display = "none";
        acte5Panel.style.display = "block";
        
    })
})