import { TitleBanner } from '@ui/components/TitleBanner';
import { StyledInstructionsBody } from '../Layout';
import { PageArrows } from '@ui/components/PageArrows/PageArrows';
// todo: reuse the styled coponents to prevent all the wrapping

export const Contestants1 = () => {
  return (
    <>
      <TitleBanner title="How To Play"></TitleBanner>
      <StyledInstructionsBody>
        <div id="welcome" className="container">
          Contestants1
        </div>
        <PageArrows currentPage={1} totalPages={3}></PageArrows>
      </StyledInstructionsBody>
    </>
  );
};