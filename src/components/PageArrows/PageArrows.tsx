export interface PageArrowsProps {
  currentPage: number;
  totalPages: number;
}
import { useNavigate } from 'react-router';

import { PageTurn } from './PageTurn';
import { useCallback } from 'react';

export const PageArrows = (props: PageArrowsProps) => {
  const navigate = useNavigate();
  // Page Turning Functions
  // useCallback prevents function from being redefined on each render.
  const rightPageTurn = useCallback(() => {
    const nextPage: string = (props.currentPage + 1).toString();
    // The first page is an index route, so it won't have a path extension (e.g. '/hosts/' instead of '/hosts/1')
    if (props.currentPage === 1) {
      navigate(nextPage);
    }
    // All other pages must traverse up the route tree and then to a sibling route
    else {
      navigate(`../${nextPage}`);
    }
  }, [navigate, props.currentPage]);

  const leftPageTurn = useCallback(() => {
    const nextPage: string = (props.currentPage - 1).toString();
    if (props.currentPage === 2) {
      navigate('../');
    } else {
      navigate(`../${nextPage}`);
    }
  }, [props.currentPage, navigate]);

  if (props.currentPage === 1) {
    return (
      <div
        style={{ alignItems: 'center', justifyContent: 'center' }}
        className="container highlight-text"
      >
        Page {props.currentPage} of {props.totalPages}
        <PageTurn direction="right" handleClick={rightPageTurn} />
      </div>
    );
  } else if (props.currentPage === props.totalPages) {
    return (
      <div
        style={{ alignItems: 'center', justifyContent: 'center' }}
        className="container highlight-text"
      >
        <PageTurn direction="left" handleClick={leftPageTurn} />
        Page {props.currentPage} of {props.totalPages}
      </div>
    );
  } else {
    return (
      <div
        className="container highlight-text"
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <PageTurn direction="left" handleClick={leftPageTurn} />
        Page {props.currentPage} of {props.totalPages}
        <PageTurn direction="right" handleClick={rightPageTurn} />
      </div>
    );
  }
};
