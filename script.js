let body = document.getElementsByTagName("body");
let main = document.getElementById("main");
let allbox = document.querySelectorAll(".clickbox");
let clickbox1 = document.querySelector(".clickbox1 > img");
let clickbox2 = document.querySelector(".clickbox2 > img");
let clickbox3 = document.querySelector(".clickbox3 > img");
let clickbox4 = document.querySelector(".clickbox4 > img");
let clickbox5 = document.querySelector(".clickbox5 > img");
let clickbox6 = document.querySelector(".clickbox6 > img");
let clickbox7 = document.querySelector(".clickbox7 > img");
let clickbox8 = document.querySelector(".clickbox8 > img");
let clickbox9 = document.querySelector(".clickbox9 > img");
let x_o = document.querySelectorAll(".x_o");
let imgx = document.getElementById("imgx");
let imgo = document.getElementById("imgo");
let win = document.querySelector(".win");
let textwin = document.querySelector(".textwin");
let newgame = document.getElementById("newgame");
let btnnew = document.querySelector(".btnnew");

let checkxo = 0;
let checrowx1 = 0;
let checrowo1 = 0;
let checrowx2 = 0;
let checrowo2 = 0;
let checrowx3 = 0;
let checrowo3 = 0;
let checkcolumnx1 = 0;
let checkcolumno1 = 0;
let checkcolumnx2 = 0;
let checkcolumno2 = 0;
let checkcolumnx3 = 0;
let checkcolumno3 = 0;
let checkobliquex1 = 0;
let checkobliqueo1 = 0;
let checkobliquex2 = 0;
let checkobliqueo2 = 0;

if (window.innerWidth < 600) {
    body[0].style.padding = "50px 0";
    main.style.width = `${window.innerWidth}px`;
    main.style.height = `${window.innerWidth}px`;
}

clickbox1.addEventListener("click",() => {
    if (checkxo == 0) {
        x_o[0].src = "https://media.istockphoto.com/id/1300683401/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87-x-%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=m3uri9MiWJ7ItENx_u2l_4CWgFxdhnYoCL8k4z-GeUg=";
        checrowx1 += 1;
        checkcolumnx1 += 1;
        checkobliquex1 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[0].appendChild(shield);
    }
    else if (checkxo == 1) {
        x_o[0].src = "https://media.istockphoto.com/id/980110030/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3-o-%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87-clipping.jpg?s=612x612&w=0&k=20&c=5vg-EX_OsIheqHOlpd7ul64LbGHGPTDlvlyfxJWf38c=";
        checrowo1 += 1;
        checkcolumno1 += 1;
        checkobliqueo1 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[0].appendChild(shield);
    }

    if (checkxo == 0) {
        checkxo = 1;
    }
    else if (checkxo == 1) {
        checkxo = 0;
    }

    winrow1();
    wincolumn1();
    winoblique1();
});

clickbox2.addEventListener("click",() => {
    if (checkxo == 0) {
        x_o[1].src = "https://media.istockphoto.com/id/1300683401/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87-x-%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=m3uri9MiWJ7ItENx_u2l_4CWgFxdhnYoCL8k4z-GeUg=";
        checrowx1 += 1;
        checkcolumnx2 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[1].appendChild(shield);
    }
    else if (checkxo == 1) {
        x_o[1].src = "https://media.istockphoto.com/id/980110030/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3-o-%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87-clipping.jpg?s=612x612&w=0&k=20&c=5vg-EX_OsIheqHOlpd7ul64LbGHGPTDlvlyfxJWf38c=";
        checrowo1 += 1;
        checkcolumno2 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[1].appendChild(shield);
    }

    if (checkxo == 0) {
        checkxo = 1;
    }
    else if (checkxo == 1) {
        checkxo = 0;
    }

    winrow1();
    wincolumn2();
});

clickbox3.addEventListener("click",() => {
    if (checkxo == 0) {
        x_o[2].src = "https://media.istockphoto.com/id/1300683401/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87-x-%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=m3uri9MiWJ7ItENx_u2l_4CWgFxdhnYoCL8k4z-GeUg=";
        checrowx1 += 1;
        checkcolumnx3 += 1;
        checkobliquex2 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[2].appendChild(shield);
    }
    else if (checkxo == 1) {
        x_o[2].src = "https://media.istockphoto.com/id/980110030/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3-o-%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87-clipping.jpg?s=612x612&w=0&k=20&c=5vg-EX_OsIheqHOlpd7ul64LbGHGPTDlvlyfxJWf38c=";
        checrowo1 += 1;
        checkcolumno3 += 1;
        checkobliqueo2 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[2].appendChild(shield);
    }

    if (checkxo == 0) {
        checkxo = 1;
    }
    else if (checkxo == 1) {
        checkxo = 0;
    }

    winrow1();
    wincolumn3();
    winoblique2();
});

clickbox4.addEventListener("click",() => {
    if (checkxo == 0) {
        x_o[3].src = "https://media.istockphoto.com/id/1300683401/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87-x-%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=m3uri9MiWJ7ItENx_u2l_4CWgFxdhnYoCL8k4z-GeUg=";
        checrowx2 += 1;
        checkcolumnx1 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[3].appendChild(shield);
    }
    else if (checkxo == 1) {
        x_o[3].src = "https://media.istockphoto.com/id/980110030/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3-o-%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87-clipping.jpg?s=612x612&w=0&k=20&c=5vg-EX_OsIheqHOlpd7ul64LbGHGPTDlvlyfxJWf38c=";
        checrowo2 += 1;
        checkcolumno1 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[3].appendChild(shield);
    }

    if (checkxo == 0) {
        checkxo = 1;
    }
    else if (checkxo == 1) {
        checkxo = 0;
    }

    winrow2();
    wincolumn1();
});

clickbox5.addEventListener("click",() => {
    if (checkxo == 0) {
        x_o[4].src = "https://media.istockphoto.com/id/1300683401/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87-x-%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=m3uri9MiWJ7ItENx_u2l_4CWgFxdhnYoCL8k4z-GeUg=";
        checrowx2 += 1;
        checkcolumnx2 += 1;
        checkobliquex1 += 1;
        checkobliquex2 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[4].appendChild(shield);
    }
    else if (checkxo == 1) {
        x_o[4].src = "https://media.istockphoto.com/id/980110030/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3-o-%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87-clipping.jpg?s=612x612&w=0&k=20&c=5vg-EX_OsIheqHOlpd7ul64LbGHGPTDlvlyfxJWf38c=";
        checrowo2 += 1;
        checkcolumno2 += 1;
        checkobliqueo1 += 1;
        checkobliqueo2 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[4].appendChild(shield);
    }

    if (checkxo == 0) {
        checkxo = 1;
    }
    else if (checkxo == 1) {
        checkxo = 0;
    }

    winrow2();
    wincolumn2();
    winoblique1();
    winoblique2();
});

clickbox6.addEventListener("click",() => {
    if (checkxo == 0) {
        x_o[5].src = "https://media.istockphoto.com/id/1300683401/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87-x-%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=m3uri9MiWJ7ItENx_u2l_4CWgFxdhnYoCL8k4z-GeUg=";
        checrowx2 += 1;
        checkcolumnx3 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[5].appendChild(shield);
    }
    else if (checkxo == 1) {
        x_o[5].src = "https://media.istockphoto.com/id/980110030/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3-o-%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87-clipping.jpg?s=612x612&w=0&k=20&c=5vg-EX_OsIheqHOlpd7ul64LbGHGPTDlvlyfxJWf38c=";
        checrowo2 += 1;
        checkcolumno3 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[5].appendChild(shield);
    }

    if (checkxo == 0) {
        checkxo = 1;
    }
    else if (checkxo == 1) {
        checkxo = 0;
    }

    winrow2();
    wincolumn3();
});

clickbox7.addEventListener("click",() => {
    if (checkxo == 0) {
        x_o[6].src = "https://media.istockphoto.com/id/1300683401/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87-x-%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=m3uri9MiWJ7ItENx_u2l_4CWgFxdhnYoCL8k4z-GeUg=";
        checrowx3 += 1;
        checkcolumnx1 += 1;
        checkobliquex2 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[6].appendChild(shield);
    }
    else if (checkxo == 1) {
        x_o[6].src = "https://media.istockphoto.com/id/980110030/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3-o-%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87-clipping.jpg?s=612x612&w=0&k=20&c=5vg-EX_OsIheqHOlpd7ul64LbGHGPTDlvlyfxJWf38c=";
        checrowo3 += 1;
        checkcolumno1 += 1;
        checkobliqueo2 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[6].appendChild(shield);
    }

    if (checkxo == 0) {
        checkxo = 1;
    }
    else if (checkxo == 1) {
        checkxo = 0;
    }

    winrow3();
    wincolumn1();
    winoblique2();
});

clickbox8.addEventListener("click",() => {
    if (checkxo == 0) {
        x_o[7].src = "https://media.istockphoto.com/id/1300683401/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87-x-%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=m3uri9MiWJ7ItENx_u2l_4CWgFxdhnYoCL8k4z-GeUg=";
        checrowx3 += 1;
        checkcolumnx2 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[7].appendChild(shield);
    }
    else if (checkxo == 1) {
        x_o[7].src = "https://media.istockphoto.com/id/980110030/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3-o-%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87-clipping.jpg?s=612x612&w=0&k=20&c=5vg-EX_OsIheqHOlpd7ul64LbGHGPTDlvlyfxJWf38c=";
        checrowo3 += 1;
        checkcolumno2 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[7].appendChild(shield);
    }

    if (checkxo == 0) {
        checkxo = 1;
    }
    else if (checkxo == 1) {
        checkxo = 0;
    }

    winrow3();
    wincolumn2();
});

clickbox9.addEventListener("click",() => {
    if (checkxo == 0) {
        x_o[8].src = "https://media.istockphoto.com/id/1300683401/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B5%E0%B9%81%E0%B8%94%E0%B8%87-x-%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=m3uri9MiWJ7ItENx_u2l_4CWgFxdhnYoCL8k4z-GeUg=";
        checrowx3 += 1;
        checkcolumnx3 += 1;
        checkobliquex1 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[8].appendChild(shield);
    }
    else if (checkxo == 1) {
        x_o[8].src = "https://media.istockphoto.com/id/980110030/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3-o-%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87-clipping.jpg?s=612x612&w=0&k=20&c=5vg-EX_OsIheqHOlpd7ul64LbGHGPTDlvlyfxJWf38c=";
        checrowo3 += 1;
        checkcolumno3 += 1;
        checkobliqueo1 += 1;

        let shield = document.createElement("div");
        shield.classList.add("addshield");
        allbox[8].appendChild(shield);
    }

    if (checkxo == 0) {
        checkxo = 1;
    }
    else if (checkxo == 1) {
        checkxo = 0;
    }

    winrow3();
    wincolumn3();
    winoblique1();
});

newgame.addEventListener("click",() => {
    checkxo = 0;
    checrowx1 = 0;
    checrowo1 = 0;
    checrowx2 = 0;
    checrowo2 = 0;
    checrowx3 = 0;
    checrowo3 = 0;
    checkcolumnx1 = 0;
    checkcolumno1 = 0;
    checkcolumnx2 = 0;
    checkcolumno2 = 0;
    checkcolumnx3 = 0;
    checkcolumno3 = 0;
    checkobliquex1 = 0;
    checkobliqueo1 = 0;
    checkobliquex2 = 0;
    checkobliqueo2 = 0;
    win.classList.remove("addwin");
    let shield = document.querySelectorAll(".clickbox > div");
    for (let i = 0 ; i < x_o.length ; i++) {
        x_o[i].src = "";
    }
    for (let i = 0 ; i < shield.length ; i++) {
        shield[i].remove();
    }
});

btnnew.addEventListener("click",() => {
    checkxo = 0;
    checrowx1 = 0;
    checrowo1 = 0;
    checrowx2 = 0;
    checrowo2 = 0;
    checrowx3 = 0;
    checrowo3 = 0;
    checkcolumnx1 = 0;
    checkcolumno1 = 0;
    checkcolumnx2 = 0;
    checkcolumno2 = 0;
    checkcolumnx3 = 0;
    checkcolumno3 = 0;
    checkobliquex1 = 0;
    checkobliqueo1 = 0;
    checkobliquex2 = 0;
    checkobliqueo2 = 0;
    win.classList.remove("addwin");
    for (let i = 0 ; i < x_o.length ; i++) {
        x_o[i].src = "";
    }
    let shield = document.querySelectorAll(".clickbox > div");
    for (let i = 0 ; i < shield.length ; i++) {
        shield[i].remove();
    }
});

function winrow1() {
    if (checrowx1 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "X WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
    else if (checrowo1 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "O WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
}

function winrow2() {
    if (checrowx2 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "X WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
    else if (checrowo2 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "O WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
}

function winrow3() {
    if (checrowx3 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "X WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
    else if (checrowo3 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "O WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
}

function wincolumn1() {
    if (checkcolumnx1 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "X WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
    else if (checkcolumno1 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "O WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
}

function wincolumn2() {
    if (checkcolumnx2 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "X WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
    else if (checkcolumno2 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "O WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
}

function wincolumn3() {
    if (checkcolumnx3 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "X WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
    else if (checkcolumno3 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "O WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
}

function winoblique1() {
    if (checkobliquex1 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "X WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
    else if (checkobliqueo1 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "O WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
}

function winoblique2() {
    if (checkobliquex2 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "X WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
    else if (checkobliqueo2 == 3) {
        win.classList.add("addwin");
        textwin.innerHTML = "O WIN";

        for (let i = 0 ; i < allbox.length ; i++) {
            let shield = document.createElement("div");
            shield.classList.add("addshield");
            allbox[i].appendChild(shield);
        }
    }
}