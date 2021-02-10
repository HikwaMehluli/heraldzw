import { styled, connect } from "frontity";
import Link from "./link";

import React, { useState } from "react";
import Toggle from "react-toggle";
// import { useMediaQuery } from "react-responsive";

const MenuModal = ({ state }) => {
	const { menu } = state.theme;
	const isThereLinks = menu != null && menu.length > 0;

	return (
		<>
			<MenuOverlay />
			
			<Toggle
            className="DarkToggle"
            checked={isDark}
            onChange={event => setIsDark(event.target.checked)}
            icons={{ checked: "🌙", unchecked: "🔆" }}
            aria-label="Dark mode"
        	/>

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
	background-color: var(--white);
	width: 100vw;
	height: 100vh;
	overflow: hidden auto;
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
	display: inline-block;
	outline: 0;
	font-size: 20px;
	text-align: center;
	padding: 1.2rem 0;

	&:hover,
	&:focus {
		background-color: var(--red);
	}

	/* styles for active link */
	&[aria-current="page"] {
		color: var(--red);
		font-weight: bold;
	}
`;

/***************************************************
    Create A Dark/Light Mode Switch with CSS Variables
    Source: https://dev.to/nw/adding-dark-mode-to-your-react-app-with-hooks-media-queries-and-css-variables-50h0
***************************************************/
export const DarkToggle = () => {
    const [isDark, setIsDark] = useState(true);

    return (
        <Toggle
            className="DarkToggle"
            checked={isDark}
            onChange={event => setIsDark(event.target.checked)}
            icons={{ checked: "🌙", unchecked: "🔆" }}
            aria-label="Dark mode"
        />
    );
};

// export const DarkToggle = () => {
// 	const systemPrefersDark = useMediaQuery(
// 		{
// 			query: "(prefers-color-scheme: dark)"
// 		},
// 		undefined,
// 		prefersDark => {
// 			setIsDark(prefersDark);
// 		}
// 	);

// 	const [isDark, setIsDark] = useState(systemPrefersDark);
// };

export default connect(MenuModal);
