function modoNoturno() {
    /*Pegando todas as tags que tem o atributo personalizado(modoDark) e jogando para dentro de um node list.*/
    let tags = document.querySelectorAll('[modoDark]');

    /*Removendo classes e ids dessas tags.*/
    tags[0].removeAttribute('class');
    tags[3].removeAttribute('id');
    tags[4].removeAttribute('id');
   /*tags[25].removeAttribute('class');*/
    tags[26].removeAttribute('class');

    /*Atribuindo classes e ids com estilo de modo Dark.*/
    tags[0].setAttribute('class', 'dark01');
    tags[1].setAttribute('class', 'dark02');
    tags[2].setAttribute('class', 'dark03');
    tags[3].setAttribute('id', 'dark04');
    tags[4].setAttribute('id', 'dark05');
    tags[5].setAttribute('class', 'dark06');
    tags[6].setAttribute('class', 'dark07');
    tags[7].setAttribute('class', 'dark08');
    tags[8].setAttribute('class', 'dark07');
    tags[9].setAttribute('class', 'dark07');
    tags[10].setAttribute('class', 'dark07');
    tags[11].setAttribute('class', 'dark07');
    tags[13].setAttribute('class', 'dark08');
    tags[14].setAttribute('class', 'dark07');
    tags[15].setAttribute('class', 'dark07');
    tags[16].setAttribute('class', 'dark07');
    tags[17].setAttribute('class', 'dark07');
    tags[19].setAttribute('class', 'dark08');
    tags[20].setAttribute('class', 'dark07');
    tags[21].setAttribute('class', 'dark07');
    tags[22].setAttribute('class', 'dark07');
    tags[23].setAttribute('class', 'dark07');
    tags[25].setAttribute('class', 'dark08'); /* Historia */
    tags[26].setAttribute('class', 'dark07');
    tags[27].setAttribute('class', 'dark07');
    tags[28].setAttribute('class', 'dark07');
    tags[29].setAttribute('class', 'dark07');
    tags[30].setAttribute('class', 'dark02'); /* ======= */
    tags[31].setAttribute('class', 'dark09');
    tags[32].setAttribute('class', 'dark10');
    tags[33].setAttribute('class', 'dark02');
    tags[34].setAttribute('class', 'dark11');
    tags[35].setAttribute('class', 'dark12');
    tags[36].setAttribute('class', 'dark02');
    tags[37].setAttribute('class', 'dark13');
    tags[38].setAttribute('class', 'dark13');

    console.log(tags);
}

function modoClaro() {
    let tags = document.querySelectorAll('[modoDark]');

    tags[0].removeAttribute('class');
    tags[1].removeAttribute('class');
    tags[2].removeAttribute('class');
    tags[3].removeAttribute('id');
    tags[4].removeAttribute('id');
    tags[5].removeAttribute('class');
    tags[6].removeAttribute('class');
    tags[7].removeAttribute('class');
    tags[8].removeAttribute('class');
    tags[9].removeAttribute('class');
    tags[10].removeAttribute('class');
    tags[11].removeAttribute('class');
    tags[13].removeAttribute('class');
    tags[14].removeAttribute('class');
    tags[15].removeAttribute('class');
    tags[16].removeAttribute('class');
    tags[17].removeAttribute('class');
    tags[19].removeAttribute('class');
    tags[20].removeAttribute('class');
    tags[21].removeAttribute('class');
    tags[22].removeAttribute('class');
    tags[23].removeAttribute('class');
    tags[25].removeAttribute('class');
    tags[26].removeAttribute('class');
    tags[27].removeAttribute('class');
    tags[28].removeAttribute('class');
    tags[29].removeAttribute('class');
    tags[30].removeAttribute('class');
    tags[31].removeAttribute('class');
    tags[32].removeAttribute('class');
    tags[33].removeAttribute('class');
    tags[34].removeAttribute('class');
    tags[35].removeAttribute('class');
    tags[35].removeAttribute('class');
    tags[36].removeAttribute('class');
    tags[37].removeAttribute('class');
    tags[38].removeAttribute('class');

    tags[3].setAttribute('id', 'Claro');
    tags[4].setAttribute('id', 'Noturno');
}

function resultadoFinal() {
    let aluno = document.querySelector('input#aluno').value; /*Variável que recebe o nome do aluno.*/
    let mediaPortugues = document.querySelector('output#isoma').value; /*Variável que recebe a média de português.*/
    let mediaMatematica = document.querySelector('output#isomaMatematica').value; /*Variável que recebe a média de matematica.*/
    let mediaBiologia = document.querySelector('output#isomaBiologia').value; /*Variável que recebe a média de biologia*/
    let mediaHistoria = document.querySelector('output#isomaHistoria').value /*Variável que recebe a média de historia*/

    let img = document.querySelector('img.fotoresultado') // Tag imagem vazia.
    let p = document.querySelector('p.sit'); // Campo de texto da situação do aluno.

    if(mediaPortugues > 10 || mediaMatematica > 10 || mediaBiologia > 10 || mediaHistoria > 10) {
        img.removeAttribute('src');
        p.removeAttribute('id');
        p.setAttribute('id', 'aviso');
        p.innerHTML = '';
        p.innerHTML = `Medias não podem ser maior que 10!.`
    }
    
    else if(mediaPortugues >= 5 && mediaPortugues < 7 && mediaMatematica >= 7 && mediaMatematica <= 10 && mediaBiologia >= 7 && mediaBiologia <= 10 && mediaHistoria >= 7 && mediaHistoria <= 10 || mediaPortugues >= 7 && mediaPortugues <= 10 && mediaMatematica >= 5 && mediaMatematica < 7 && mediaBiologia >= 7 && mediaBiologia <= 10 && mediaHistoria >= 7 && mediaHistoria <= 10|| mediaPortugues >= 7 && mediaPortugues <= 10 && mediaMatematica >= 7 && mediaMatematica <= 10 && mediaBiologia >= 5 && mediaBiologia < 7 && mediaHistoria >= 7 && mediaHistoria <= 10 || mediaPortugues >= 7 && mediaPortugues <= 10 && mediaMatematica >= 7 && mediaMatematica <= 10 && mediaBiologia >= 7 && mediaBiologia <= 10 && mediaHistoria >= 5 && mediaHistoria < 7) {
        img.removeAttribute('src');
        img.setAttribute('src', 'imagens/recuperacao.png');
        p.removeAttribute('id');
        p.setAttribute('id', 'rec');
        p.innerHTML = '';
        p.innerHTML = `Aluno(a) ${aluno} em <p>RECUPERAÇÃO</p>.`
    }

    else if(mediaPortugues >= 7 && mediaPortugues <= 10 && mediaMatematica < 7 && mediaBiologia < 7 && mediaHistoria < 7 || mediaPortugues < 7 && mediaMatematica >= 7 && mediaMatematica <= 10 && mediaBiologia < 7 && mediaHistoria < 7 || mediaPortugues < 7 && mediaMatematica < 7 && mediaBiologia >= 7 && mediaBiologia <= 10 && mediaHistoria < 7 || mediaPortugues < 7 && mediaMatematica < 7 && mediaBiologia < 7 && mediaHistoria >= 7 && mediaHistoria <= 10 || mediaPortugues < 7 && mediaMatematica < 7 && mediaBiologia < 7 && mediaHistoria < 7|| mediaPortugues < 5 || mediaMatematica < 5 || mediaBiologia < 5 || mediaHistoria < 5) {
        img.removeAttribute('src');
        img.setAttribute('src', 'imagens/reprovado.png');
        p.removeAttribute('id');
        p.setAttribute('id', 'rep');
        p.innerHTML = '';
        p.innerHTML = `Aluno(a) ${aluno} <p>REPROVADO</p>.`
    }

    else if(mediaPortugues >= 7 && mediaPortugues <= 10 && mediaMatematica >= 7 && mediaMatematica <= 10 && mediaBiologia >= 7 && mediaBiologia <= 10 && mediaHistoria >= 7 && mediaHistoria <= 10) {
        img.removeAttribute('src');
        img.setAttribute('src', 'imagens/aprovado.png');
        p.removeAttribute('id');
        p.setAttribute('id', 'apv');
        p.innerHTML = '';
        p.innerHTML = `Aluno(a) ${aluno} <p>APROVADO</p>.`
    }

    p.appendChild(img);
}