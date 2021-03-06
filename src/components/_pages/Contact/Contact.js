import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      sender: "",
      email: "",
      subject: "",
      message: ""
    }
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const sender = encodeURIComponent(this.state.sender);
    const email = encodeURIComponent(this.state.email);
    const subject = encodeURIComponent(this.state.subject);
    const message = encodeURIComponent(this.state.message);

    const emailmessage = `mailto:jon.white2@gmail.com?subject=${subject}&body=${`Hi Jonathan, my name is ${sender}, you can contact me at ${email}. ${message}`}`;
    window.open(emailmessage);

  };

  render() {
    return (
      <section className="container contact-page">
        <h3>Connect</h3>
        <div className="container text-left">
          <form className="email-form">
            <div className="form-group">
              <label htmlFor="sender">Your Name</label>
              <input
                className="form-control"
                placeholder="Enter your name"
                type="text"
                value={this.state.sender}
                id="sender"
                name="sender"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                placeholder="Enter your email address"
                type="text"
                value={this.state.email}
                id="email"
                name="email"
                pattern=".+@.+\..+"
                title="Please enter a valid email."
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                className="form-control"
                placeholder="What do you want to discuss?"
                type="text"
                value={this.state.subject}
                id="subject"
                name="subject"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control email-message"
                placeholder={`I'd love to hear from you.

Regards, Jonathan`}
                type="text"
                value={this.state.message}
                id="message"
                name="message"
                onChange={this.handleInputChange}
              />
            </div>
            <button
              className="btn btn-primary search"
              type="submit"
              onClick={this.handleFormSubmit}
            >Send Message</button>
          </form>
        </div>
      </section>
    );
  };
};

export default Contact;
