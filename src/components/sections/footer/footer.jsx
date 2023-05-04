import SocialContact from "../../common/social-contacts/social-contacts";
import "./footer.scss";
import NavItem from "../../common/nav-item/nav-item";
import Logo from "../../common/logo/logo";
import { useMemo } from "react";

export default function Footer({
	description = "",
	isFootNavigation = true,
	copyrightInfo = "",
	isSocial = true,
	isSubFooter = true,
	isCredits = true,
	creditInfo = <>Made with ❤️ <br /> using React Components</>,
	bgColor = "#fff",
	textColor = "#000",
	borderColor = "#f2f2f2",
	border = "",
	minHeight = 180,
	subFooterBgColor = "#fff",
	subFooterTextColor = "#000",
	social=[],
	socialLinksConfig={}
}) {

	const style = useMemo(() => {
		let s = {
			backgroundColor: bgColor,
			color: textColor,
			minHeight: minHeight,
			borderTop: border || `solid 1px ${borderColor}`,
		};

		return s;
	}, [bgColor, textColor, minHeight]);

	return (
		<footer className="footer" style={style}>
			<section className="container">
				<div className="main-footer">
					<div className="brand-content">
						<Logo />
						<p>{description}</p>
					</div>
					{isFootNavigation &&
						<div className="nav">
							<NavItem />
						</div>
					}
					{isSocial &&
						<div className="social">
							<SocialContact  
								social={social}
								title={"Follow Us"}
								{...socialLinksConfig}
							/>
						</div>
					}
				</div>
			</section>
			{isSubFooter &&
				<section className="bottom-bar flex justify-center align-center" style={{
					backgroundColor: subFooterBgColor,
					color: subFooterTextColor
				}}>
					{copyrightInfo &&
						<div className="copyright-content">
							&copy; {copyrightInfo}
						</div>
					}
					{isCredits &&
						<div className="credits">
							{creditInfo}
						</div>
					}
				</section>
			}
		</footer>
	);
}
