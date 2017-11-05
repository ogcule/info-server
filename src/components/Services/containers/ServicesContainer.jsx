import React from 'react';
import ServicesPage from './../ServicesPage';
import apiServices from './../../../api/apiServices';

class ServicesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allServices: {},
      loaded: false,
    };
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
  render() {
    console.log(this.state.loaded);
    console.log(this.state.allServices);
    return (
      <ServicesPage
        allServices={this.state.allServices}
        loaded={this.state.loaded}
      />
    );
  }
}

export default ServicesContainer;
