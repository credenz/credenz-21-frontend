import React, { useState } from "react";
import "../CSS/eventcard2.css";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";

const EventCard2 = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        onClick={() => setShow(true)}
        className={
          props.active ? `wrapper-new focused` : `wrapper-new not-focused`
        }>
        <div className="container-new">
          <div className="top">
            <div className="row d-flex justify-content-center">
              {props.icon && (
                <img
                  src={props.icon}
                  alt="Icon"
                  className="event-icon"
                  style={{
                    color: "white",
                    width: "180px",
                  }}
                />
              )}
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="details">
                <h1 className="title">{props.title}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="inside">
          <div className="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABf0lEQVRIidWVTU4CQRCFqyGwEW9gPAC60gOIC13qYIxXIBDjzyXIxDPoHeQaRheiC0VdafQAbAQjnwuqpSPd8yMrKul0Zt7rejVvqrtF5j1MEgiURSTSsSYiSwq9iciNiHRE5NIYM8ytDOwBL6THM1DPk7gAnDkJboEjoAos6FgBjoGuw4uBQhYBm/wTaCQt0mKaygWIs9hik2/k+OqaIxKFSGXH80aAA0AAayn8BJR8hAPHc68tKQJF4E4p+/a9m8h2wrkxZuRLYjQC2LeIXOjjtE3Ao6pXfQmyhHYXwIMP7CtYSUgQtEjxRaX07bv0vs0X1r5fi12Bd52XZxCwaz98Atc6b80gsK3z1RTitGl3hja9/9umLqHM+OACaP5D4FDhnnejKanuHBU1L8m/bhMYACNgJ40cOyItoJjALWrlA13TzlJNwRFBt/+JbqKKjlXg1PF8BLRD/y4kFDE+uNKil2RL2pVZEpFdGZ8t6zK5Ml9lcmV2jDFfmSufu/gBIo4rqpw825AAAAAASUVORK5CYII="
              alt="IIcon"
            />
          </div>
          {props.text && <div className="contents">{props.text}</div>}
        </div>
      </div>
      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>
            {props.icon && (
              <img
                src={props.icon}
                alt="Event Icon"
                style={{
                  color: "white",
                  width: "100px",
                }}
              />
            )}
            {props.title}
          </Modal.Title>
          <Button
            onClick={() => setShow(false)}
            style={{
              backgroundColor: "transparent",
              color: "#000",
              border: 0,
              fontSize: 20,
            }}
            className="close">
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="info"
            id="uncontrolled-tab-example"
            className="mb-3">
            <Tab eventKey="info" title="Info">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo nostrum maxime neque animi provident molestiae fuga
                unde ut accusamus aspernatur quo, velit quae, soluta atque
                libero est. Facere, vitae dolor!
              </p>
            </Tab>
            <Tab eventKey="rules" title="Rules">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo nostrum maxime neque animi provident molestiae fuga
                unde ut accusamus aspernatur quo, velit quae, soluta atque
                libero est. Facere, vitae dolor!
              </p>
            </Tab>
            <Tab eventKey="structure" title="Structure">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo nostrum maxime neque animi provident molestiae fuga
                unde ut accusamus aspernatur quo, velit quae, soluta atque
                libero est. Facere, vitae dolor!
              </p>
            </Tab>
            <Tab eventKey="judge" title="Judging Criteria">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo nostrum maxime neque animi provident molestiae fuga
                unde ut accusamus aspernatur quo, velit quae, soluta atque
                libero est. Facere, vitae dolor!
              </p>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo nostrum maxime neque animi provident molestiae fuga
                unde ut accusamus aspernatur quo, velit quae, soluta atque
                libero est. Facere, vitae dolor!
              </p>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EventCard2;
