import { Utils } from "./src/utils.js";
const utils = new Utils();

Object.values(utils.strings()).forEach((item, index) => {
    let p = document.createElement("p");
    p.innerHTML =
        Object.keys(utils.strings())[index] +
        "::" +
        item("olá mundo, isso é uma frase 999, <div>sem café e tag HTML</div>");
    document.body.appendChild(p);
});

Object.values(utils.links()).forEach((item, index) => {
    let p = document.createElement("p");
    p.innerHTML =
        Object.keys(utils.links())[index] +
        "::" +
        item([
            {
                name: "home",
                lastname: "silva",
                url: "https://fdoze.com.br",
            },
            {
                name: "aurenilson",
                lastname: "silva",
                url: "https://fdoze.com.br",
            },
        ]);
    document.body.appendChild(p);
});
