export interface PageArrowsProps {
  currentPage: number;
  totalPages: number;
}
import { RightArrow } from './RightArrow';
import { LeftArrow } from './LeftArrow';

export const PageArrows = (props: PageArrowsProps) => {
  if (props.currentPage === 1) {
    return (
      <div
        style={{ alignItems: 'center', justifyContent: 'center' }}
        className="container highlight-text"
      >
        Page {props.currentPage} of {props.totalPages}
        <RightArrow
          currentPage={props.currentPage}
          totalPages={props.totalPages}
        />
      </div>
    );
  } else if (props.currentPage === props.totalPages) {
    return (
      <div
        style={{ alignItems: 'center', justifyContent: 'center' }}
        className="container highlight-text"
      >
        <LeftArrow
          currentPage={props.currentPage}
          totalPages={props.totalPages}
        />
        Page {props.currentPage} of {props.totalPages}
      </div>
    );
  } else {
    console.log('middlepage');
    return (
      <div
        className="container highlight-text"
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <LeftArrow
          currentPage={props.currentPage}
          totalPages={props.totalPages}
        />
        Page {props.currentPage} of {props.totalPages}
        <RightArrow
          currentPage={props.currentPage}
          totalPages={props.totalPages}
        />
      </div>
    );
  }
};
