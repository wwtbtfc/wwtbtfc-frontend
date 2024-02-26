import StyledTitleBanner from './StyledTitleBanner';
import { AppProps } from '@ui/Types/AppProps';
import userIcon from '../../assets/UserIcon.svg';

/**
 * Title Banner component
 * @param {string} props.title - pass the desired title to the banner
 */
export const TitleBanner = (props: AppProps) => {
  return (
    <>
      <StyledTitleBanner>
        <h2 className="title">{props.title}</h2>
        <img src={userIcon} />
        <h5 className="user">username</h5>
      </StyledTitleBanner>
    </>
  );
};
