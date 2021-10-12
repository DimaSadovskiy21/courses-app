import IconCourse from "./icons/course.svg";
import IconService from "./icons/service.svg";
import IconBook from "./icons/book.svg";
import IconProduct from "./icons/product.svg";
import { FirstLevelMenuType } from "../interface/menu.interface";
import { TopLevelCategory } from "../interface/page.interface";

export const firstLevelMenu: FirstLevelMenuType[] = [
    { route: 'course', name: 'Курсы', icon: <IconCourse />, id: TopLevelCategory.Courses },
    { route: 'service', name: 'Сервисы', icon: <IconService />, id: TopLevelCategory.Services },
    { route: 'book', name: 'Книги', icon: <IconBook />, id: TopLevelCategory.Books },
    { route: 'product', name: 'Продукты', icon: <IconProduct />, id: TopLevelCategory.Products },
];

export const priceRu = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽')
};

export const declOfNum = (number: number, titles: [string, string, string]): string => {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};