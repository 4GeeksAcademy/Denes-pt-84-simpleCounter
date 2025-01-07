import React from "react";
import Digito from "./Digito";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = ({seconds}) => {
	return(
		<div>
			
			<Digito seconds = {seconds} />
		</div>
	)
}
	

export default Home;
