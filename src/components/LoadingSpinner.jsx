import React from "react";
import "../assets/styles/loadingSpinner.css"; // Importa tus estilos CSS aquí

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;