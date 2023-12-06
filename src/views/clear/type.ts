interface IState {
  state: number;
}
interface IAction {
  type: "DEC" | "INC";
}

export type { IState, IAction };
