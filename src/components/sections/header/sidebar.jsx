import "./sidebar.scss";
// import Logo from "../../common/logo/logo";
import NavItem from "../../common/nav-item/nav-item";

const Sidebar = ({
	isOpen,
	toggleSidebar
}) => {

	return (
		<div className={`sidebar-container ${isOpen ? "sidebar-open" : "sidebar-close"}`} >
			<div className="sidebar-overlay" onClick={() => toggleSidebar()} />
			<div
				className={`noPrint sidebar-custom sidebar-nav`}
			>
				<NavItem />
			</div>
		</div>
	)
}

export default Sidebar;