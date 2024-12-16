import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { putUpdateUser } from "../services/UserServices";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

//
const ModalEditUser = (props) => {
  const { show, handleClose, dataUserEdit } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  //xử lý bất đồng bộ use async await
  const handleEditUser = async () => {
    let res = await putUpdateUser(name, job);
    if (res && res.updateAt) {
      //success
      handleEditUserFromModal({
        first_name: name,
        id: dataUserEdit.id,
      });
      handleClose();
      toast.success("update user success!");
    }
    // console.log(res);
  };
  //   console.log(">>> check props: ", dataUserEdit);
  useEffect(() => {
    if (show) {
      setName(dataUserEdit.first_name);
    }
  }, [dataUserEdit]);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit a user</Modal.Title>
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
          <Button variant="primary" onClick={() => handleEditUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalEditUser;
