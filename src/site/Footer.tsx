type FooterType = {
  titleFooter: string
}
export const Footer = (props: FooterType) => {
  return (
    <div>
      <h3>{props.titleFooter}</h3>
    </div>
  );
};