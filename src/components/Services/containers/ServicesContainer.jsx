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
      rcgpCategory: 'Healthy People',
      category: 'Community',
      name: '',
      description: '',
      address: '',
      telephone: '',
      email: '',
      weblink: '',
      postcode: '',
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
    const formValuesMap = [
      { name: this.state.name },
      { category: this.state.category },
      { description: this.state.description },
      { image: this.state.image },
      { weblink: this.state.weblink },
      { email: this.state.email },
      { telephone: this.state.telephone },
      { address: this.state.address },
      { rcgpCategory: this.state.rcgpCategory },
      { postcode: this.state.postcode },
    ];
    console.log('before function', formValuesMap);
    const formValues = formValuesMap.map((key) => {
      if (!Object.values(key)[0]) {
        switch (Object.keys(key)[0]) {
          case 'name':
            break;
            return '';
          case 'description':
            return '';
            break;
          case 'image':
            return 'https://dummyimage.com/100x100/000/fff.png&text=service+image';
            break;
          case 'postcode':
            return 'none';
            break;
          case 'telephone':
            return '';
            break;
          case 'email':
            return 'noemail@nomail.invalid';
            break;
           default :
             return 'not available';
      }
    }
    return Object.values(key)[0];
      // if ((Object.keys(key)[0] === 'email') && (!Object.values(key)[0])) {
      //   return 'noservices@nomail.invalid';
      // }
      // return Object.values(key)[0] || 'not available';
    });
    console.log('My function results',formValues);
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
        valueImage={this.state.image}
        valueName={this.state.name}
        valueCategory={this.state.category}
        valueRcgpCategory={this.state.rcgpCategory}
        valueDescription={this.state.description}
        valueAddress={this.state.address}
        valueTelephone={this.state.telephone}
        valueEmail={this.state.email}
        valueWeblink={this.state.weblink}
        valuePostcode={this.state.postcode}
      />
    );
  }
}

export default ServicesContainer;
