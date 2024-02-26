import StyledTitleBanner from './StyledTitleBanner';

/**
 * Title Banner component
 * @param {string} props.title - pass the desired title to the banner
 */
export const TitleBanner = (title: string) => {
  return (
    <>
      <StyledTitleBanner>
        <h2 className="title">{title}</h2>
        <h5 className="user">username</h5>
      </StyledTitleBanner>
    </>
  );
};
