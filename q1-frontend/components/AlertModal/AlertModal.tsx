import { SetStateAction, Dispatch, FormEvent } from 'react';
import { TableContents } from '../Table/Table';

interface AlertModalProps {
  useContents: Dispatch<SetStateAction<TableContents>>;
  contents: TableContents;
}

export default function AlertModal({ useContents, contents }: AlertModalProps) {
  function OnSubmitEvent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // hint: the alert given is at (e.target as any).elements[0].value - ignore typescript being annoying
    useContents({
      ...contents,
      rowContents: [
        ...contents.rowContents,
        { alert: (e.target as any).elements[0].value, status: '', updates: [] },
      ],
    });
  }

  return (
    <form data-testid="form" onSubmit={OnSubmitEvent}>
      <label> Add new alert: </label>
      <input type="text" id="alert" name="alert" />
      <button type="submit"> Add </button>
    </form>
  );
}
