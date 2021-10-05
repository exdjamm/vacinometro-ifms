import PopupHint from './PopupHint'
import PopupWarn from './PopupWarn'

import "./index.css";

function RenameThis({ button: Component, mainIcon = "shield-lock", warnText = "", hintText = "", showWarn = false, closeButton }) {
	return (
		<div id="background-popup">
			<section className="popup-box">
				<header className="pp-header">
					<i className={`bi bi-${mainIcon} pp-main-icon`}/>
					<button onClick={closeButton} className="pp-btn-close">
						<i className="bi bi-x-circle"/>
					</button>
				</header>

				<div className="pp-content">
					<div className="pp-text">
						<PopupWarn warnText={warnText} hidden={showWarn} />
						<PopupHint hintText={hintText} />	
					</div>
					
					<div className="pp-button">
						<Component />
					</div>
				</div>
			</section>
		</div>
	);
}

export default RenameThis;