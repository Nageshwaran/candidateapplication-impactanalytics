import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  console.log(state);
  return { shortList: state.shortList };
};

class Shortlisted extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.shortList);
    this.state = {};
  }

  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="container App">
        <h4 style={{ "text-align": "center" }}>
          ShortListed Candidate Details
        </h4>

        <div className="container">
          <div className="row">
            {this.props.shortList.map(x => {
              let j = JSON.parse(JSON.parse(x));
              return (
                <>
                  <div
                    className="card ml-2"
                    style={{
                      borderColor: "black",
                      backgroundColor: "lightblue"
                    }}
                  >
                    <img
                      src={j.Image}
                      alt="Avatar"
                      style={{
                        width: 150,
                        height: 150
                      }}
                    />

                    <div className="container" style={{ width: 150 }}>
                      <h4 className="text-center">
                        <b>{j.name}</b>
                      </h4>
                    </div>
                    <br />
                  </div>
                </>
              );
            })}
            {this.props.shortList.length == 0 && (
              <div style={{ "text-align": "center" }} className="container ">
                <h1>
                  {" "}
                  <b> No data found to display.</b>
                </h1>
              </div>
            )}
          </div>
        </div>
        <div className="text-center mt-2">
          <button
            type="button"
            onClick={this.back}
            className="text-center btn btn-danger"
          >
            Back
          </button>
        </div>
      </div>
    );
  }
}

const Form = connect(
  mapStateToProps,
  null
)(Shortlisted);
export default withRouter(Form);
