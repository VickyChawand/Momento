import React, { useState } from "react";
import AddMemoriesCard from "../AddImage/addImage";
import { Link } from "react-router-dom";
import "./home.css";
import empty from "../assests/empty.png";
import Logo from "../../Logo/logo";
import MovingDiv from "../MovingDiv/movingdiv";

function HomeScreen() {
  const [showAddMemoriesCard, setShowAddMemoriesCard] = useState(false);

  const handleAddMemoriesClick = () => {
    setShowAddMemoriesCard(true);
  };

  return (
    <div className="home">
      <div className="main">
        <div className="header">
          <Logo />
          <Link to="/gallery">
            <button>View Memories</button>
          </Link>
        </div>
        <div className="form">
          <img src={empty} alt="some error" />
          <p>
            "Time to fill our gallery with unforgettable moments! <br />
            Ready to add some magic?
          </p>
          <button onClick={handleAddMemoriesClick}>Add Memories</button>
          {showAddMemoriesCard && (
            <AddMemoriesCard onClose={() => setShowAddMemoriesCard(false)} />
          )}
        </div>
      </div>
      <div className="moving-cards">
        <MovingDiv direction="topToBottom" />
      </div>
      <div className="moving-card">
        <MovingDiv direction="bottomToTop" />
      </div>
    </div>
  );
}

export default HomeScreen;
