import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/Lounge.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>

           <div style={{marginTop:"2%"}} className="content-center">
          <Container>
          <h2 style={{marginTop:"5%", textAlign:"center", color:"#fdb104"}}><b>Lounges</b></h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProfilePageHeader;
