import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component - It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
	const author = state.source.author[item.author];
	const date = new Date(item.date);

	return (
		<article>
			<Link link={item.link}>
				<Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
			</Link>

			<div>
				{/* If the post has an author, we render a clickable author text. */}
				{author && (
					<StyledLink link={author.link}>
					<AuthorName>
						By <b>{author.name}</b>
					</AuthorName>
					</StyledLink>
				)}
				<PublishDate>
					{" "} on <b>{date.toDateString()}</b>
				</PublishDate>
			</div>

			{/*
			* If the want to show featured media in the list of featured posts, we render the media.
			*/}
			{state.theme.featured.showOnList && (
				<FeaturedMedia id={item.featured_media} />
			)}

			{/* If the post has an excerpt (short summary text), we render it */}
			{item.excerpt && (
				<Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
			)}
		</article>
	);
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
	font-size: 1.5rem;
	color: var(--red);
	margin: 0;
	padding-top: 24px;
	padding-bottom: 8px;
	box-sizing: border-box;
	transition: var(--transition);

	&:hover {
		color: var(--white);
	}
`;

const AuthorName = styled.span`
	color: var(--white);
	font-size: 0.9em;
	transition: var(--transition);

	&:hover {
		color: var(--red);
	}
`;

const StyledLink = styled(Link)`
	padding: 15px 0;
`;

const PublishDate = styled.span`
	color: var(--white);
	font-size: 0.9em;
`;

const Excerpt = styled.div`
	line-height: 1.6em;
	color: var(--white);
`;
