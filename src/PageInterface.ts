import UserInterface from "./UserInterface";

export default interface PageInterface {
  redirect(to: string): PageInterface;
  message(msg: string): PageInterface;
  querySelector(
    query: string,
    after?: (value: string | string[]) => any
  ): PageInterface;
  input(value: string): PageInterface;
  click(query: string): PageInterface;

  user: UserInterface & { [key: string]: any };
}
