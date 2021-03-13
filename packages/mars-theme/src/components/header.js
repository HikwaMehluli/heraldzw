import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
	return (
		<>
			<Container>
				<StyledLink link="/">
					<Title>{state.frontity.title}</Title>
				</StyledLink>
				<Description>{state.frontity.description}</Description>
				<MobileMenu />
			</Container>
			<Nav />
		</>
	);
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
	box-sizing: border-box;
	padding: 24px;
	width: 848px;
	max-width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const Title = styled.h1`
	color: var(--red);
	font-family: TimesNewRoman, "Times New Roman", Times;
	font-size: 4.5rem;
	margin: 0;
	transition: var(--transition);

	&:hover {
		color: var(--white);
	}

	@media screen and (max-width: 560px) {
		font-size: 2.5rem;
	}
`;

const Description = styled.h4`
	color: var(--white);
	margin: 0;
	font-style: oblique;
	font-weight: 500;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;