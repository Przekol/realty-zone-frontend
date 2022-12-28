interface Props {
  name: string;
  count: number;
}

export const App = (props: Props) => (
  <>
    <div>
      {props.name} {props.count}
    </div>
  </>
);
