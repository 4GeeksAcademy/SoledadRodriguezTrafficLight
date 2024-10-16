import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("red")

	return (
		<div className=" container trafficLight ">
			<div 
				className= {`red ${selected == "red" ? "lightOn" : ""}`}
				onClick={()=>setSelected("red")}
			></div>
			<div className= {`yellow ${selected == "yellow" ? "lightOn" : ""}`}
				onClick={()=>setSelected("yellow")}></div>
			<div className={`green ${selected == "green" ? "lightOn" : ""}`}
				onClick={()=>setSelected("green")} ></div>
		</div >
	
	);
};

export default Home;
