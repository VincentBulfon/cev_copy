import { AssStatus, Cot1Status, Cot2Status } from 'alltypes';

export interface Users {
  users: User[];
}

export type User = {
  lastname: string;
  firstname: string;
  phone: string;
  coti1: Cot1Status;
  coti2: Cot2Status;
  ass: AssStatus;
};
