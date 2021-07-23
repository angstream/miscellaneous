import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import StreamFormFinal from './StreamFormFinal'

class StreamEdit extends React.Component {
  componentDidMount() {
    //console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamFormFinal
          initialValues={_.pick(this.props.stream, "title", "description","age")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return { stream: state.streams[id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
