import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ModalAddNews = (props) => {
  const { show, handleClose } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const handleSaveUser = () => {
    console.log(`>>> check state: name = ${name}, job = ${job}`);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Job</label>
              <input
                type="text"
                className="form-control"
                value={job}
                onChange={(event) => setJob(event.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveUser()}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalAddNews;
