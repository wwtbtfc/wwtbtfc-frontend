import { PageArrowsProps } from './PageArrows';
import caratLeft from './assets/caret-left.svg';
import { useNavigate } from 'react-router';

export const LeftArrow = (props: PageArrowsProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const nextPage: string = (props.currentPage - 1).toString();
    if (props.currentPage === 2) {
      navigate('../');
    } else {
      navigate(`../${nextPage}`);
    }
  };
  if (props.currentPage !== 1) {
    return <img src={caratLeft} onClick={handleClick}></img>;
  }
};
