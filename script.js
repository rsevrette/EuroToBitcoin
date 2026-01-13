function convertir() {
    let euro = parseFloat(document.getElementById("euro").value);

    // Taux au 10/01/2026 : 1BTC = 77 600€
    let taux = 77600;

    //BUG: la formule est incorrecte
    let bitcoin = euro / taux;

    document.getElementById("resultat").textContent = 
        euro + " € = " + bitcoin + " BTC";
}