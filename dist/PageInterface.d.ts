/// <reference types="cheerio" />
import UserInterface from "./UserInterface";
export default interface PageInterface {
    redirect(to: string): PageInterface;
    message(msg: string): PageInterface;
    $: CheerioStatic;
    input(value: string): PageInterface;
    click(query: string): PageInterface;
    user: UserInterface & {
        [key: string]: any;
    };
}
