import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
class ContactUs extends Form {
  state = {
    data: { name: "", phoneNumber: "", email: "", message: "" },
    errors: {},
  };
  schema = {
    name: Joi.string().required().label("Name"),
    phoneNumber: Joi.number().required().label("PhoneNumber"),
    email: Joi.string().required().email().label("Email"),
    message: Joi.string().required().label("message"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div className="row">
        <body className="contactusbody">
          <h1>Contact Us</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Name")}
            {this.renderInput("phoneNumber", "PhoneNumber")}
            {this.renderInput("email", "Email")}
            <InputTextarea
              rows={5}
              cols={130}
              id="fields"
              placeholder="Please enter your message"
              autoResize={true}
              name="message"
            />
            <Button
              label={"Send Message"}
              type={"submit"}
              style={{ display: "block" }}
            />
          </form>
        </body>
      </div>
    );
  }
}

export default ContactUs;
