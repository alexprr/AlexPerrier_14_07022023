import React from "react";

import { Modal } from "alex-custom-modal";

// import "./modal.css";

const ModalContainer = ({ onClose }) => {
	return <Modal onClose={onClose} link="employee-list" />;
};

export default ModalContainer;
