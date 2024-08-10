import { StyledInstructionsBody } from '../Layout';
import { PageArrows } from '@ui/components/PageArrows/PageArrows';
// todo: reuse the styled coponents to prevent all the wrapping

export const Hosts3 = () => {
  return (
    <>
      <StyledInstructionsBody>
        <div id="welcome" className="container">
          Hosts3
        </div>
        <PageArrows currentPage={3} totalPages={3}></PageArrows>
      </StyledInstructionsBody>
    </>
  );
};