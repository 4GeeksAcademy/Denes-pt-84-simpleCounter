import React from "react";

const Digito = ({seconds}) => {
	const digit = seconds.toString().padStart(6, "0") //los segundos lo transf en un string con 6 espacios que empiezan todos en cero

	return (
		<div className="text-center">
			<div className="clock"><i class="fa-solid fa-clock"></i></div>
			{
			digit.split("").map( (digits ,index ) =>(
				<div key={index}>
					<h1 className="digito">{digits}</h1>
				</div>
			)
		 )
		}
		</div>
		
	);
};

export default Digito