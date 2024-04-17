
type HeaderType = {
  titleHeader: string
}

export const Header = (props: HeaderType) => {
  return (
    <div>
      <h1>{props.titleHeader}</h1>
    </div>
  );
};