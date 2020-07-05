import React from "react";
import { ErrorContainer, Details } from "./ErrorBoundary.styled";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    const { errorInfo, error } = this.state;
    if (errorInfo) {
      return (
        <ErrorContainer>
          <h2>Something went wrong.</h2>
          <Details>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </Details>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
