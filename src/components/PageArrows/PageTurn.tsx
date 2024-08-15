import { CaretLeft } from './assets/CaretLeft.tsx';
import { CaretRight } from './assets/CaretRight.tsx';

interface PageTurnProps {
  direction: 'left' | 'right';
  handleClick: () => void;
}
export const PageTurn = ({ direction, handleClick }: PageTurnProps) => {
  return (
    <button className="page-turn" onClick={() => handleClick()}>
      {direction === 'left' ? <CaretLeft /> : <CaretRight />}
    </button>
  );
};
