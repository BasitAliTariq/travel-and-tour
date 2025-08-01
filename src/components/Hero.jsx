import "./HeroStyle.css";
export default function Hero(props) {
  return (
    <div className={props.cName}>
      <img alt="HeroImg" src={props.heroImage} />

      <div className="HeroText">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}
