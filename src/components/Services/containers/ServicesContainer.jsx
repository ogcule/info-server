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
      image: '',
      rcgpCategory: '',
      category: '',
      name: '',
      description: '',
      address: '',
      telephone: '',
      email: '',
      weblink: '',
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  // handler for changing state from input values on the form
  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      // computed property name
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const formValues = [
      this.state.name,
      this.state.category,
      this.state.description,
      this.state.image,
      this.state.weblink,
      this.state.email,
      this.state.telephone,
      this.state.address,
      this.state.rcgpCategory,
    ];
    apiServices.requestPost(...formValues)
    .then(data => console.log(data))
    .catch(error => console.log(error));
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
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        valueImage={this.state.Image}
        valueName={this.state.name}
        valueCategory={this.state.category}
        valueRcgpCategory={this.state.rcgpCategory}
        valueDescription={this.state.description}
        valueAddress={this.state.address}
        valueTelephone={this.state.telephone}
        valueEmail={this.state.email}
        valueWeblink={this.state.weblink}
      />
    );
  }
}

export default ServicesContainer;
