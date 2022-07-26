import {menu} from "../model/menu";

const menus = [
    menu('001', 'Ayam Geprek', 23000),
    menu('002', 'Ayam Bakar', 22000),
    menu('003', 'Ayam Goreng', 20000),
];

export function menuService() {
    const showAll = function () {
        return menus;
    }
    const addNewMenu = function (newMenu) {
        menus.push(newMenu);
    }
    return {
        showAll, addNewMenu
    }
}
