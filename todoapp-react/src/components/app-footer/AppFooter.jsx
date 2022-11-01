import React from "react";
import "./AppFooter.css";

export const AppFooter = () => {
  const date = new Date();

  return (
    <footer className="footer">
      <p>&copy; {date.getUTCFullYear()}. All rights reserved.</p>
    </footer>
  )
}
