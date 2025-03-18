import style from "./train.module.css"
export const Card=(props)=>{
	return(
		
		   <article className={style.article}>
		       <img src= {props.imageUrl} alt="logo"
			   className={style.img} />
               <h3>{props.title}</h3>
			   <h4>{props.headline}</h4>
			   <p>{props.content}</p>
		   </article>
	     
		
	)
}