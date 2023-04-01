import cardStyle from "./Card.module.scss";
import data from "../../helpers/data";
function Card() {
    return (
        <div className={cardStyle.container}>
            {data.map((item) => {
                const { id, title, date, desc, image } = item;

                return (
                    <div key={id} className={cardStyle.card}>
                        <div className={cardStyle.title}><h1 >{title}</h1></div>
                        <div className={cardStyle.date}><h1>{date}</h1></div>
                        <img className={cardStyle.image} src={image} alt={title} />
                        <div className={cardStyle.cardOver}><p>{desc}</p></div>



                    </div>
                )
            })}
        </div>
    )
}
export default Card;