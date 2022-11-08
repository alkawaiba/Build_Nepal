import React, { useEffect } from "react";
import './SuccessMember.css';

const SuccessMember = ({ setMember }) => {
  useEffect(() => {
    setMember(true);
  }, []);
  return <div className="successMember\"><div className="successMember h1"><h1>Success Memberbership</h1></div>
  </div>;
};

export default SuccessMember;