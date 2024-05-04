import React from "react";
import "./LoadingSpinner.css"; // Importa tus estilos CSS aquí

export const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;