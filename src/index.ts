import ActionInterface from "./ActionInterface";
import PageInterface from "./PageInterface";

interface AbleAction {
  name: String;
  alias?: String | String[];
  id: String;
  run(action: ActionInterface, page: PageInterface): Promise<any> | any;
}

export default function able(actions: AbleAction[]) {
  return actions;
}
