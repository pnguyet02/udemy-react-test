import { Modal, Button } from "react-bootstrap";
import { deleteUser } from "../services/UserServices";
import { toast } from "react-toastify";
//
const ModalComfirm = (props) => {
  const { show, handleClose, dataUserDelelte, handleDeleteUserFromModal } =
    props;
  const comfirmDelete = async () => {
    let res = await deleteUser(dataUserDelelte.id);
    if (res && +res.statusCode === 204) {
      toast.success("Delete user succeed");
      handleClose();
      handleDeleteUserFromModal(dataUserDelelte);
    } else {
      toast.error("error delete user!");
    }

    // console.log(">>check res: ", res);
  };
  //
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        //backdrop, keyboard: modal không đóng khi kích ra ngoài
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            This action can't be undone! Do you want delete this user?
            <br />
            <b>email = {dataUserDelelte.email}?</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => comfirmDelete()}>
            Comfirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalComfirm;
