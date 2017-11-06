import React from 'react';
import ServicesPage from './../ServicesPage';
import apiServices from './../../../api/apiServices';

class ServicesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allServices: {},
      loaded: false,
      expanded: false,
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  componentDidMount() {
    this.getAllServices();
  }
  // function that call that gets all service information
  getAllServices() {
    apiServices.requestGetAll()
      .then((data) => {
        if (data) {
          console.log(data);
          this.setState({
            allServices: data,
            loaded: true,
          });
        } else {
          this.setState({
            loaded: false,
          });
        }
      });
  }
  // handler to change state for expanding the questions form
  handleFormChange() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }
  render() {
    console.log(this.state.loaded);
    console.log(this.state.allServices);
    return (
      <ServicesPage
        allServices={this.state.allServices}
        loaded={this.state.loaded}
        expanded={this.state.expanded}
        handleFormChange={this.handleFormChange}
      />
    );
  }
}

export default ServicesContainer;
