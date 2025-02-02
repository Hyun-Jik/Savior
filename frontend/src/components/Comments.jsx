import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

import { getAxios } from "@/api";

export default function Comments(props) {
  const axios = getAxios();
  const qnaId = useParams().qnaId;
  const [comment, setComment] = useState("");
  const { id, content, getComment, name, getDate, checkDate } = props;
  const [editable, setEditable] = useState(false);
  const [username, setUsername] = useState("");

  const [writedate, setWritedate] = useState([]);

  const [show, setShow] = useState(false);
  const [showDone, setShowDone] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteComment = async (Id) => {
    await axios.delete(`/api/comment/${Id}`, {});
    getComment();
  };

  const updateComment = async (Id) => {
    await axios.patch(`/api/comment/${Id}?content=${comment}`);
    getComment();
  };
  useEffect(() => {
    setComment(content);
    setUsername(name);
    // setUpdatedate(getDate);
    setWritedate(getDate);
  }, []);

  return editable === false ? (
    <div>
      <p className="text-md">{comment}</p>
      {checkDate ? (
        <div className="grid justify-between float-right">
          작성자 : {username} / 등록일 : {getDate[0]}년 {getDate[1]}월{" "}
          {getDate[2]}일 {getDate[3]}시 {getDate[4]}분
        </div>
      ) : (
        <div className="grid justify-between float-right">
          작성자 : {username} / 수정일 : {getDate[0]}년 {getDate[1]}월{" "}
          {getDate[2]}일 {getDate[3]}시 {getDate[4]}분
        </div>
      )}
      <Button
        className="bg-blue-700 border-none"
        onClick={() => {
          setEditable(!editable);
        }}
      >
        수정
      </Button>{" "}
      <Button
        className="bg-blue-700 border-none"
        onClick={() => {
          handleShow();
          // deleteComment(props.id);
        }}
      >
        삭제
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>댓글 삭제</Modal.Title>
        </Modal.Header>
        <Modal.Body>댓글 삭제 하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button
            className="bg-blue-700 border-none"
            onClick={() => {
              handleClose();
              deleteComment(props.id);
              setShowDone(true);
            }}
          >
            삭제
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
      <hr />
    </div>
  ) : (
    <div className="flex mb-[5%]">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></input>
      <Button
        className="bg-blue-700 border-none"
        onClick={(e) => {
          updateComment(props.id);
          setEditable(!editable);
        }}
      >
        저장
      </Button>{" "}
      <Button
        variant="secondary"
        onClick={(e) => {
          setEditable(!editable);
        }}
      >
        취소
      </Button>
    </div>
  );
}
