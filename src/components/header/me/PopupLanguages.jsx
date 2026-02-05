import React from "react";
import { Modal, Button } from "react-bootstrap";
import ToggleSwitch from "./ToggleSwitch";
import { useLanguage } from "../../../context/LanguageContext";

function PopupLanguages({ show, handleClose }) {
    const { getTranslation } = useLanguage();

    return (
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
            <Modal.Title>{getTranslation("select_language")}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <ToggleSwitch />
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>{getTranslation("close")}</Button>
        </Modal.Footer>
    </Modal>
);
}

export default PopupLanguages;
