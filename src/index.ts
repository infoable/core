import ActionInterface from "./ActionInterface";
import PageInterface from "./PageInterface";

interface AbleAction {
  name: String;
  alias?: String | String[];
  id: String;
  option?: OptionInterface;
  run(action: ActionInterface, page: PageInterface): Promise<any> | any;
}
interface OptionInterface {
  getHTML?: boolean;
}
export default function able(actions: AbleAction[]) {
  return actions;
}
