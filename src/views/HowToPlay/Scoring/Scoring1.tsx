import { TitleBanner } from '@ui/components/TitleBanner';
import { StyledInstructionsBody } from '../Layout';
import { PageArrows } from '@ui/components/PageArrows/PageArrows';
// todo: reuse the styled coponents to prevent all the wrapping

export const Scoring1 = () => {
  return (
    <>
      <TitleBanner title="How To Play"></TitleBanner>
      <StyledInstructionsBody>
        <div id="welcome" className="container">
          Scoring1
        </div>
        <PageArrows currentPage={1} totalPages={5}></PageArrows>
      </StyledInstructionsBody>
    </>
  );
};
