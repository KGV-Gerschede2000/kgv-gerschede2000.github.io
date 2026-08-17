function zeigeSeite(seitenId) {
    // 1. Alle Inhaltsbereiche ausblenden
    const inhalte = document.querySelectorAll('.seite-inhalt');
    inhalte.forEach(inhalt => inhalt.classList.remove('aktiv'));

    // 2. Alle Knöpfe als "inaktiv" markieren
    const knoepfe = document.querySelectorAll('.menue-knopf');
    knoepfe.forEach(knopf => knopf.classList.remove('aktiv'));

    // 3. Den ausgewählten Inhalt einblenden
    document.getElementById(seitenId).classList.add('aktiv');

    // 4. Den angeklickten Knopf optisch hervorheben
    event.currentTarget.classList.add('aktiv');
}
