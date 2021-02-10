import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";

/**
 * Theme is the root React component of our theme. The one we will export in roots.
 */
const Theme = ({ state }) => {
	// Get information about the current URL.
	const data = state.source.get(state.router.link);

	return (
		<>
			{/* Add some metatags to the <head> of the HTML. */}
			<Title />
			<Head>
				<meta name="description" content={state.frontity.description} />
				<html lang="en" />
			</Head>

			{/* Add some global styles for the whole site, like body or a's. 
			Not classes here because we use CSS-in-JS. Only global HTML tags. */}
			<Global styles={globalStyles} />

			{/* Add the header of the site. */}
			<HeadContainer>
				<Header />
			</HeadContainer>

			{/* Add the main section. It renders a different component depending
			on the type of URL we are in. */}
			<Main>
				<Switch>
					<Loading when={data.isFetching} />
					<List when={data.isArchive} />
					<Post when={data.isPostType} />
					<PageError when={data.isError} />
				</Switch>
			</Main>
		</>
	);

};

export default connect(Theme);

const globalStyles = css`
	// @media (prefers-color-scheme: light) {
		:root {
			--black: black;
			--white: #fafafa;
			--red: #F51827;
			--grey: #f6f6f6;
			--transition: all .5s;
		}
	// }

	// @media (prefers-color-scheme: dark) {
	// 	:root {
	// 		--black: #fafafa;
	// 		--white: black;
	// 		--red: #F51827;
	// 		--grey: #f6f6f6;
	// 		--transition: all .5s;
	// 	}
	// }

	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
		background-color: var(--white);
	}

	a,
	a:visited {
		color: inherit;
		text-decoration: none;
	}
`;

const HeadContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: var(--grey);
`;

const Main = styled.div`
	display: flex;
	justify-content: center;
	background-color: var(--white);
`;


console.log("The Hearld - NewsApp");