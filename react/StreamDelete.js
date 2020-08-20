import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream } from "../../actions";
import { deleteStream } from "../../actions";

class StreamDelete extends React.Component {

  // url ="aaaaaaaaa";

  componentDidMount() {
    // console.log(this.props);
    let id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "R u sure you want to delete stream";
    }

    return `Are you sure you want to delete the stream with titile:${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete This Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
