import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList = atom<ITodo[]>({
  key: "TodoList",
  default: [],
  effects_UNSTABLE: [persistAtom],
})