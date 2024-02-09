import React, { useRef } from "react";
import ReactDom from "react-dom";
export const Modal = ({ setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <button onClick={() => setShowModal(false)}>X</button>
        <div className="modal-content">
          <h3>Impact Ecosystem Privacy Policy</h3>

          <div>
            <ol>
              <div>
                <li className="privacy-title">Introduction</li>
                <div className="privacy-content">
                  Impact Ecosystem ("we," "us," or "our") is committed to
                  protecting the privacy of individuals who visit our website
                  https://ie.money/ and use our services. This Privacy Policy
                  explains how we collect, use, and safeguard personal
                  information obtained through the Website. By accessing or
                  using our Website, you consent to the practices described in
                  this Privacy Policy.
                </div>
              </div>

              <div>
                <li className="privacy-title">Information We Collect</li>
                <div className="privacy-content">
                  We may collect personal information, such as:
                </div>
                <ul>
                  <li>
                    Name, email address, and contact details when you
                    voluntarily provide them to us.
                  </li>
                  <li>
                    Information automatically collected through cookies and
                    similar technologies.
                  </li>
                  <li>
                    Other information necessary to provide our services or as
                    required by law.
                  </li>
                </ul>
              </div>

              <div>
                <li className="privacy-title">Use of Information</li>
                <div className="privacy-content">
                  We may use the collected information for various purposes,
                  including:
                </div>
                <ul>
                  <li>Providing and improving our services.</li>
                </ul>
              </div>
            </ol>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
