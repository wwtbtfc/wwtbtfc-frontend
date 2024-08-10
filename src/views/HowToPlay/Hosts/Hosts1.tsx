import { StyledInstructionsBody } from '../Layout';
import { PageArrows } from '@ui/components/PageArrows/PageArrows';
// todo: reuse the styled coponents to prevent all the wrapping

export const Hosts1 = () => {
  return (
    <>
      <StyledInstructionsBody>
        <div id="welcome" className="container">
          Hosts1
        </div>
        <PageArrows currentPage={1} totalPages={3}></PageArrows>
      </StyledInstructionsBody>
    </>
  );
};
