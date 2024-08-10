import { Outlet } from 'react-router';
import HostIcon from '../assets/Rules_Host.svg';
import { StyledHostLayout } from './StyledHostLayout';
import { StyledInstructionsLayout } from '../Layout';

export const HostLayout = () => {
  return (
    <>
      <StyledInstructionsLayout>
        <StyledHostLayout>
          <div className="layout-container">
            <div className="side-panel">
              <img className="side-panel" id="host-icon" src={HostIcon}></img>
            </div>
            <div className="center-container">
              <div className="container">
                <h3 className="title">Hosts</h3>
              </div>
              {/* <img src={HostIcon}></img> */}

              <Outlet></Outlet>
            </div>
            <div className="side-panel"></div>
          </div>
        </StyledHostLayout>
      </StyledInstructionsLayout>
    </>
  );
};
