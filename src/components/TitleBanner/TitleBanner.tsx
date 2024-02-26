import StyledTitleBanner from './StyledTitleBanner';
import { AppProps } from '@ui/Types/AppProps';
import userIcon from '../../assets/UserIcon.svg';
import { BannerBar } from './BannerBar';

/**
 * Title Banner component
 * @param {string} props.title - pass the desired title to the banner
 */
export const TitleBanner = (props: AppProps) => {
  return (
    <>
      <StyledTitleBanner>
        <h2 className="title">{props.title}</h2>
        <h5 className="user">username</h5>
        <img src={userIcon} />
      </StyledTitleBanner>
      <BannerBar></BannerBar>
    </>
  );
};
