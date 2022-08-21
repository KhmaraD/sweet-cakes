import strawberry from "../assets/images/strawberry.jpg";
import cherry from "../assets/images/choco_cherry.jpg";
import velvet from "../assets/images/red_velvet.jpg";
import snickers from "../assets/images/snickers.jpg";

let state = {
    language: 'ua',
    owner: {nameUA: "Олена Хмара", nameEng: "Olena Khmara"},
    links: [
        {link: "/main", linkNameEng: "Main", linkNameUa: "Головна"},
        {link: "/price", linkNameEng: "Price", linkNameUa: "Ціни"},
        {link: "/contacts", linkNameEng: "Contacts", linkNameUa: "Контакти"},
        {link: "/order", linkNameEng: "Order", linkNameUa: "Як замовити"},
    ],
    priceItem: [
        {id: 1, price: 550, img: strawberry, title: "Полуниця-персик",
            description: "Молочний шифоновий бісквіт, ніжний крем на основі крем-сиру та збитих вершків, зі шматочками персика та полуничним конфі."},
        {id: 2, price: 550, img: cherry, title: "Шоколадний з вишнею",
            description: "Шоколадний бісквіт, крем на основі крем-сиру та збитих вершків або вершковий італійський сир Mascarpone, та яскрава вишня в прослойці."},
        {id: 3, price: 600, img: velvet, title: "Червоний оксамит класичний",
            description: "Ніжні оксамитові коржі з вишнею або полуничним конфітюром, крем-сир - американська класика."},
        {id: 4, price: 600, img: snickers, title: "Снікерс з арахісом і соленою карамеллю",
            description: "Насичений шоколадний бісквіт з арахісом та соленою карамеллю, карамельний крем-сир з молочним шоколадом."},
        {id: 5, price: "", img: "", title: "", description: ""},
    ],
}

//if LS lang => state.lang=ls.lang

export default state;