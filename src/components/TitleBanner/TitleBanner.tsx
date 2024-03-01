import StyledTitleBanner from './StyledTitleBanner';
import userIcon from '../../assets/UserIcon.svg';

/**
 * Title Banner component
 * @param {string} props.title - pass the desired title to the banner
 */

type BannerProps = { title: string };
export const TitleBanner = (props: BannerProps) => {
  return (
      <StyledTitleBanner>
        <h2 className="title">{props.title}</h2>
        <div className="user-container">
          <h5 className="user">username</h5>
          <img src={userIcon} />
        </div>
      </StyledTitleBanner>
  );
};
