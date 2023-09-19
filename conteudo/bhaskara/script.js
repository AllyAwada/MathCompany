function rpt1() {
    var btn=document.getElementById("resposta1");
    let res=document.getElementById("resp1");
    var btnresposta=document.getElementById("btn1resposta");

    if(btn.style.display === "none") {
        btn.style.display="inline";
        btn.style.display="inline";
        res.style.background="#F0F3FA";
        res.style.padding="1rem";
        res.style.borderRadius="5px";
        res.style.border="1px solid #5168A0";
        btnresposta.innerHTML="Esconder Resposta";
    }
    else {
        btn.style.display="none";
        res.style.background="none";
        res.style.border="none";
        btnresposta.innerHTML="Ver Resposta";
    }
}
