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
      message: false,
      values: {
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
      },
      errorMsg: {
        name: '',
        description: '',
        telephone: '',
        postcode: '',
        email: '',
        weblink: '',
        image: '',
      },
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }
  componentDidMount() {
    this.getAllServices();
  }
  // function that call that gets all service information
  getAllServices() {
    console.log('getAllServices called');
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
  //handler to change success message
  handleMessageChange() {
    this.setState(prevState => ({ message: !prevState.message }));
  }
  // handler for changing state from input values on the form
  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;
    console.log('name: ', name, 'value: ', value);
    /* using previousState  */
    this.setState((previousState) => {
      return {values: Object.assign({},previousState.values, { [name]: value} )}
  });
}
handleClearForm(e) {
  event.preventDefault();
  console.log('clear called');
  this.setState({
    values: {
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
    },
  });
  }
  defaultFormValues(){
    let formValuesMap = [
      { name: this.state.values.name },
      { category: this.state.values.category },
      { description: this.state.values.description },
      { image: this.state.values.image },
      { weblink: this.state.values.weblink },
      { email: this.state.values.email },
      { telephone: this.state.values.telephone },
      { address: this.state.values.address },
      { rcgpCategory: this.state.values.rcgpCategory },
      { postcode: this.state.values.postcode },
    ];
    const formValues = formValuesMap.map((key) => {
      if (!Object.values(key)[0]) {
        switch (Object.keys(key)[0]) {
          case 'name':
          return '';
          case 'description':
          return '';
          case 'image':
          return 'https://dummyimage.com/100x100/000/fff.png&text=service+image';
          case 'telephone':
          return '';
          case 'email':
          return 'noemail@nomail.invalid';
          case 'weblink':
          return 'https://www.nhs.uk/';
          default :
          return 'not available';
        }
      }
      return Object.values(key)[0];
    });
    return formValues;
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('My function results', this.defaultFormValues());
    apiServices.requestPost(...this.defaultFormValues())
    .then((data) => {
      /* destructuring from data object and giving
      default value of '' when error message is not present*/
      const {
        name = '',
        description = '',
        telephone = '',
        postcode = '',
        email = '',
        weblink = '',
        image ='',
      } = data;
      this.setState({
        errorMsg: {
          //shorthand
          name,
          description,
          telephone,
          postcode,
          email,
          weblink,
          image,
        },
      });
      return this.state.errorMsg;
    })
    .then((errorMsg) => {
      //check to see if any actual error message other than empty strings
      let noErrorMsg = Object.keys(errorMsg).filter((key) => {
        return errorMsg[key]
      })
      //if no error messages then reload services, clear form and show message
      if(noErrorMsg.length === 0){
      this.getAllServices();
      this.handleClearForm();
      this.handleMessageChange();
      setTimeout(() => {
        this.handleMessageChange();
      }, 3000);
    }
    })
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
        message={this.state.message}
        handleSubmit={this.handleSubmit}
        values={this.state.values}
        errorMsg={this.state.errorMsg}
      />
    );
  }
}

export default ServicesContainer;
