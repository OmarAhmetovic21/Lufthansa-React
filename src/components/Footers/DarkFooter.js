import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" style={{backgroundColor:"#010165"}}>
      <Container>
        <div className="copyright" id="copyright" style={{color:"#fdb104"}}>
          © {new Date().getFullYear()}, Omar Ahmetović.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
