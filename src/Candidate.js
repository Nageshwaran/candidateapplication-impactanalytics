import React from "react";
import "./App.css";

class Candidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      userListfilter: []
    };
  }

  async componentDidMount() {
    await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ userListfilter: res });
        this.setState({ userList: res });
      });
  }

  changehandler = event => {
    const filterdat = this.state.userList.filter(dat => {
      return dat.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    this.setState({ userListfilter: filterdat });
  };
  MoreInfo = event => {
    const candidateinfo = event.currentTarget.attributes["def"].value;

    const idd = JSON.parse(candidateinfo);
    var id = JSON.parse(idd.id);
    this.props.history.push({
      pathname: `${id}`,
      state: { detail: candidateinfo }
    });
  };

  shortlistedpage = () => {
    this.props.history.push("/shortlisted");
  };
  rejectedpage = () => {
    this.props.history.push("/rejected");
  };

  render() {
    const { userList, userListfilter } = this.state;

    return (
      <div className="container App">
        <h4 style={{ "text-align": "center","color":"red" }}>Candidates List</h4>
        <div className="row">
          <div className="col-lg-7">
            <input
              className="form-control ml-4"
              type="text"
              placeholder="Search with Name"
              onChange={e => this.changehandler(e)}
              aria-label="Search"
            />
          </div>
          <div  className="ml-4" style={{ "text-align": "right" }}>
            <button
              type="button"
              onClick={this.shortlistedpage}
              className="btn btn-success"
            >
              ShortListed List
            </button>{" "}
            &nbsp;&nbsp;
            <button
              type="button"
              onClick={this.rejectedpage}
              className="btn btn-danger"
            >
              Rejected List
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {userListfilter.map(x => (
              <div
                className="card  mt-3 ml-4"
                def={JSON.stringify(x)}
                style={{
                  align: "center",
                  borderColor: "black",
                  backgroundColor: "lightblue"
                }}
                onClick={e => this.MoreInfo(e)}
              >
                <img
                  src={x.Image}
                  alt="Avatar"
                  style={{ width: "auto", height: 150 }}
                />
                <div className="container">
                  <b style={{ color: "red" }}>Name:</b>
                  <span style={{ color: "saffron" }}> {x.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*{" "}
        <div class="text-center">
          <button
            type="button"
            onClick={this.shortlistedpage}
            className="btn btn-success"
          >
            ShortListed List
          </button>{" "}
          &nbsp;&nbsp;
          <button
            type="button"
            onClick={this.rejectedpage}
            className="btn btn-danger"
          >
            Rejected List
          </button>
        </div>
        */}
      </div>
    );
  }
}

export default Candidate;
