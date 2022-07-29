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
    const deleteMenu = function (id) {
        const newListMenus = menus.filter(data => data.id !== id);
        while (menus.length > 0) {
            menus.pop();
        }
        for (let i = 0; i < newListMenus.length; i++) {
            menus.push(newListMenus[i])
        }
    }
    return {
        showAll, addNewMenu, deleteMenu
    }
}
