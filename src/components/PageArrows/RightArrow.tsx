import { PageArrowsProps } from './PageArrows';
import caratRight from './assets/caret-right.svg';
import { useNavigate } from 'react-router';

export const RightArrow = (props: PageArrowsProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const nextPage: string = (props.currentPage + 1).toString();
    // The first page is an index route, so it won't have a path extension (e.g. '/hosts/' instead of '/hosts/1')
    if (props.currentPage === 1) {
      navigate(nextPage);
    }
    // All other pages must traverse up the route tree and then to a sibling route
    else {
      navigate(`../${nextPage}`);
    }
  };
  if (props.currentPage !== props.totalPages) {
    return <img src={caratRight} onClick={handleClick}></img>;
  }
};
