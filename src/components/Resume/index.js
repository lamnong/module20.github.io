import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/other/lamnong.pdf")} download>
					<h4>Download my Resume</h4>
				</a>
			</div>
			<div className="center">
        <img
          src={require("../../assets/pics/resume.png")}
          alt="about-me"
          className="photo"
        />
      </div>
		</section>
	);
}

export default Resume;
