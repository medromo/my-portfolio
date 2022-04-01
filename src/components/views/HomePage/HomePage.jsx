import React from "react";
import { Button } from "@atoms/Button/Button";

import "./HomePage.scss";
import PdfIcon from "@mui/icons-material/PictureAsPdf";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="Hero">
        <span className="Hero__greeting">Hello! I'm</span>
        <h1>Rolando Medina</h1>
        <span className="Hero__position">Frontend Developer</span>
        <div className="Hero__btns">
          <Button className="Hero__btn resume-btn" icon={<PdfIcon />}>
            Resume
          </Button>
          <Button className="Hero__btn hireMe-btn">Hire Me!</Button>
        </div>
      </div>
    </div>
  );
}

export { HomePage };
