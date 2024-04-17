
type BodyType = {
  titleBody: string
}


export const Body = (props: BodyType) => {
  return (
    <div>
      <h2>{props.titleBody}</h2>
    </div>
  );
};
