import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
// copy to clipboard
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CopyPassword = (props) => {
  const [copied, setCopied] = useState(false);
  return (
      <Row>
        <Col sm={9}>
            <h3 className='password'>{props.password}</h3>
        </Col>
        <Col sm={3}>
            <CopyToClipboard text={props.password}
                onCopy={() => setCopied(true)}>
                <button>
                <i class="fa fa-clone"></i>
                </button>
            </CopyToClipboard>
        </Col>
    </Row>
  );
};

export default CopyPassword;
