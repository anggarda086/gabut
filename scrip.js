const romanticQuotes = [
    "Harus semangat terus apapun yang akan di hadapi kedepannya",
    "Jangan malas malasan lagi buat sholat",
    "Jangan pernah takut dengan apapun",
    "Semua masalah pasti ada jalan keluarnya",
    "Ga boleh melakukan hal yang menyakiti diri sendiri",
    "Jangan mudah menyerah",
    "SEMANGATTT :) ",
];

function showRomanticQuote() {
    const randomIndex = Math.floor(Math.random() * romanticQuotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = romanticQuotes[randomIndex];
}
