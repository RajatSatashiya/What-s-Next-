import React, { useRef } from "react";
import "../Styling/Profile.css";

function Profile() {
  const codechefHandle = useRef();
  const codeforcesHandle = useRef();
  const leetcodeHandle = useRef();
  const linkedinHandle = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      codechefHandle.current.value,
      codeforcesHandle.current.value,
      leetcodeHandle.current.value,
      linkedinHandle.current.value
    );
  };

  return (
    <>
      <div className="profilecontainer">
        <img
          src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535741f5fa1a13a1f8f233_peep-48.png"
          alt="coder illustration"
          className="profilepic"
        />

        <div>
          <div className="profileTitle">Username</div>
          <div className="profiletext">{"ceasarVilla"}</div>
          <div className="profileTitle">Email</div>
          <div className="profiletext">{"ceasar@gmail.com"}</div>
        </div>
      </div>
      <div className="updateProfile">
        <h3>Profile Page</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="label">CodeChef Handle:</div>
            <input type="text" ref={codechefHandle} />
          </div>
          <div>
            <div className="label">CodeForces Handle:</div>
            <input type="text" ref={codeforcesHandle} />
          </div>
          <div>
            <div className="label">LeetCode Handle:</div>
            <input type="text" ref={leetcodeHandle} />
          </div>
          <div>
            <div className="label">LinkedIn Handle:</div>
            <input type="text" ref={linkedinHandle} />
          </div>

          <input type="submit" value="Update"></input>
        </form>
      </div>

      <div className="goals">
        <div>
          <img src="./images/trophy.png" />
        </div>
        <div className="goalsDone">
          <div className="profileTitle">Goals Status</div>
          <div className="">{"6/10"}</div>
          <div className="profileTitle total">Total Completed</div>
          <div className="">{"45/57"}</div>
        </div>
      </div>
    </>
  );
}

export default Profile;
