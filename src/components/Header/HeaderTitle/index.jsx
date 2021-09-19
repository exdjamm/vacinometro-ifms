import "bootstrap-icons/font/bootstrap-icons.css"

import "./index.css";

function HeaderTitle(props){

	return (
		<div className="header-title">
			<i className="bi bi-bar-chart-fill site-icon"></i>
			<span className="site-name ubuntu-font">Vacinometro IFMS</span>
		</div>	
	);
}

export default HeaderTitle;