
import React from 'react';
import shell from '../../images/shell.svg';
import clam from '../../images/clam.svg';
import Modal from '../../components/Modal';
import './index.scss';

class SVGAnimation extends React.Component {

  state = {
    open: false,
  }

  modalVisibility = (visibility) => {
    let { open } = this.state;
    if (typeof visibility === "boolean") {
      this.setState({ open: visibility });
    }
    this.setState({ open: !open });
  }

  render() {
    let { open } = this.state;
    return <React.Fragment>
      <div className="clam-animation" onClick={this.modalVisibility}>
        <img src={shell} alt="" className="clam-animation-shell" />
        <img src={clam} alt="" className="clam-animation-clam" />
      </div>
      <Modal title="confirm"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        open={open}
        closeModal={() => this.modalVisibility(false)} />
    </React.Fragment>;
  }
}

export default SVGAnimation;
