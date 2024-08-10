import { StyledInstructionsBody } from '../Layout';
import { PageArrows } from '@ui/components/PageArrows/PageArrows';
// todo: reuse the styled coponents to prevent all the wrapping

export const Hosts2 = () => {
  return (
    <>
      <StyledInstructionsBody>
        <div id="welcome" className="container">
          Hosts2
        </div>
        <PageArrows currentPage={2} totalPages={3}></PageArrows>
      </StyledInstructionsBody>
    </>
  );
};
