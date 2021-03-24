import { styled, connect } from "frontity";
import Link from "./link";

const MenuModal = ({ state }) => {
	const { menu } = state.theme;
	const isThereLinks = menu != null && menu.length > 0;

	return (
		<>
			<MenuOverlay />
			<MenuContent as="nav">
				{isThereLinks &&
					menu.map(([name, link]) => (
					<MenuLink
						key={name}
						link={link}
						aria-current={state.router.link === link ? "page" : undefined}
					>
						{name}
					</MenuLink>
				))}
			</MenuContent>
		</>
	);
};

const MenuOverlay = styled.div`
	background-color: var(--black);
	width: 100vw;
	height: 100vh;
	// overflow: hidden auto;
	overflow-y: auto;
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
`;

const MenuContent = styled.div`
	z-index: 3;
`;

const MenuLink = styled(Link)`
	width: 100%;
    color: var(--white) !important;
	display: inline-block;
	outline: 0;
	font-size: 20px;
	text-align: center;
	padding: 1.2rem 0;

	&:hover,
	&:focus {
		background-color: var(--red) !important;
        color: var(--white) !important;
	}

	/* styles for active link */
	&[aria-current="page"] {
		background-color: var(--red) !important;
        color: var(--white) !important;
	}
`;

export default connect(MenuModal);
