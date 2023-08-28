export default function Header({ logo, alt, title }) {
  return (
    <>
      <img className="img" src={logo} alt={alt} />
      <h1 className="title">{title}</h1>
    </>
  );
}
