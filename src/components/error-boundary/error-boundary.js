import React from "react";

import "./error-boundary.scss";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="image-overlay">
          <div className="image-container" />
          <h2 className="image-text">Sorry this page is broken</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
