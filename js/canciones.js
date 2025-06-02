const canciones = [
    {
        "titulo": "Chiwawa",
        "artista": "Wanko Ni Mero Mero",
        "dificultad": "Oni: 10",
        "version": "OpenTaiko",
        "imagen": "https://i.scdn.co/image/ab67616d0000b273811f92e54cd83399387eb6f4"
    },
    {
        "titulo": "Severlá",
        "artista": "Los Sarcofágos del ritmo",
        "dificultad": "Oni: 7",
        "version": "OpenTaiko",
        "imagen": "https://i.scdn.co/image/ab67616d00001e0257a135750ea626f9a699641e"
    },
    {
        "titulo": "TRAUMATIC",
        "artista": "Utsu-P",
        "dificultad": "Oni: 10",
        "version": "Taiko San Daijiiro 2",
        "imagen": "https://static.wikia.nocookie.net/vocaloid/images/0/0b/TRAUMATIC.jpg/revision/latest?cb=20120103013456&path-prefix=es"
    },
    {
        "titulo": "Sayonara",
        "artista": "Wanko Ni Mero Mero",
        "dificultad": "Oni: 10",
        "version": "OpenTaiko",
        "imagen": "https://zenius-i-vanisher.com/simfiles/DDR%20MAX%205%20simfiles/SAYONARA/SAYONARA-jacket.png"
    },
    {
        "titulo": "Pilates (Cover) Kasane Teto & GUMI",
        "artista": "Kasane Teto & GUMI",
        "dificultad": "Oni: 10",
        "version": "OpenTaiko",
        "imagen": "https://i.scdn.co/image/ab67616d0000b27367f024ed900c7b029364f4db"
    },
    {
        "titulo": "Pico Pico 2000",
        "artista": "Hechizeros Band",
        "dificultad": "Oni: ??",
        "version": "Taiko San Daijiiro 2",
        "imagen": "https://i.scdn.co/image/ab67616d0000b2730e277009eea6f09ac2c56c23"
    },
    {
        "titulo": "Nonai Carnival Da DON",
        "artista": "LindaAI-CUE",
        "dificultad": "Oni: 13",
        "version": "Taiko San Daijiiro 2",
        "imagen": "https://i.scdn.co/image/ab67616d00001e027c23138d0345879bce7dac3f"
    },
    {
        "titulo": "Interlude 2000",
        "artista": "MUSE",
        "dificultad": "Oni: 3",
        "version": "Taiko San Daijiiro 2",
        "imagen": "https://i.scdn.co/image/ab67616d00001e023303a842ee1bc0b23204333d"
    },
    {
        "titulo": "Daten Route",
        "artista": "Aiobahn",
        "dificultad": "Oni: 9",
        "version": "TjaPlayer3",
        "imagen": "https://media.tenor.com/IARMZIeVFgsAAAAe/daten-route-anime.png"
    }
];

mostrarCanciones(canciones);

function mostrarCanciones(canciones) {
    const ul = document.getElementById('lista-canciones');
    ul.innerHTML = '';
    canciones.forEach(cancion => {
        ul.innerHTML += `
            <li>
                <img src="${cancion.imagen}" alt="${cancion.titulo}" style="max-width:200px;"><br>
                <span class="titulo">${cancion.titulo}</span><br>
                <span class="artista">${cancion.artista}</span><br>
                <span class="info">Dificultad: ${cancion.dificultad} | Versión: ${cancion.version}</span>
            </li>
        `;
    });
}