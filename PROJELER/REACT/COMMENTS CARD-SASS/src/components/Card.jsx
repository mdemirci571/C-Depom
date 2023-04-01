import cardstyle from "../scss/card.module.scss"
import data from "../data.js"
 const Card= ()=>{

    return(
        <div className={cardstyle.container}>
{data.map((item)=>{
const{id, name, comment, job, img}=item;
return(
    <div key={id} className={cardstyle.card}>
<h1>{name}</h1>
<h3>{job}</h3>
<p>{comment}</p>
<img src={img} alt={name} />
<div className={cardstyle.buttons}>
    
<button className={cardstyle.small}>Small</button>
<button className={cardstyle.large}>Large</button>
</div>
    </div>
)


})}
        </div>
    )
 }


export default Card;