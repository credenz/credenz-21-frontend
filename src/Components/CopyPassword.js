import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
// copy to clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyPassword = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [copied, setCopied] = useState(false);
  return (
    <Row>
      <Col sm={9}>
        <h3 className="password">{props.password}</h3>
      </Col>
      <Col sm={3}>
        <CopyToClipboard text={props.password} onCopy={() => setCopied(true)}>
          <button>
            <i className="fa fa-clone"></i>
          </button>
        </CopyToClipboard>
      </Col>
    </Row>
  );
};

export default CopyPassword;
