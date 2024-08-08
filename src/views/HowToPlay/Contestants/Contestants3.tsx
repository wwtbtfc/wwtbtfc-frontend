import { TitleBanner } from '@ui/components/TitleBanner';
import { StyledInstructionsBody } from '../Layout';
import { PageArrows } from '@ui/components/PageArrows/PageArrows';
// todo: reuse the styled coponents to prevent all the wrapping

export const Contestants3 = () => {
  return (
    <>
      <TitleBanner title="How To Play"></TitleBanner>
      <StyledInstructionsBody>
        <div id="welcome" className="container">
          Contestants3
        </div>
        <PageArrows currentPage={3} totalPages={3}></PageArrows>
      </StyledInstructionsBody>
    </>
  );
};
