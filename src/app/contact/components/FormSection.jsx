"use client";

import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import staticData from "@/data/staticData.json";
import { useSelector } from "react-redux";

const FormSection = () => {
  const initial = {
    fullName: "",
    email: "",
    message: "",
  };
  const [formData, changeData] = useState(initial);
  const lang = useSelector((state) => state.language);

  const changeTrack = (field, value) => {
    changeData({ ...formData, [field]: value });
  };

  const submit = async () => {
    if (!formData.email || !formData.fullName || !formData.message) {
      // toast.warn("Please all the fields are required to send a message!");
      throw new Error("Please all the fields are required to send a message!");
    }

    try {
      const { data } = await axios.post("/contact/api", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(data);
      changeData(initial)
      return data
    } catch (error) {
      console.log(error);
      throw new Error("An error occured while sending the message, please review the information you are providing and try again.")
    }
  };
  return (
    <section className="contact-form">
      <h3 className="h3 form-title">{staticData[lang].contact.contactFrom}</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.promise(submit(), {
            pending: {
              render() {
                return "The message is being sent, wait a moment!";
              },
            },
            success: "The message is sent successfully, please check your email address.",
            error: {
              render({ data }) {
                // When the promise reject, data will contains the error
                return data.message;
              },
            },
          });
        }}
        action="#"
        className="form"
        data-form
      >
        <div className="input-wrapper">
          <input
            value={formData.fullName}
            onChange={(e) => changeTrack("fullName", e.target.value)}
            type="text"
            name="fullname"
            className="form-input"
            placeholder={staticData[lang].contact.fullName}
            required
            data-form-input
          />

          <input
            value={formData.email}
            onChange={(e) => changeTrack("email", e.target.value)}
            type="email"
            name="email"
            className="form-input"
            placeholder={staticData[lang].contact.email}
            required
            data-form-input
          />
        </div>

        <textarea
          value={formData.message}
          onChange={(e) => changeTrack("message", e.target.value)}
          name="message"
          className="form-input"
          placeholder={staticData[lang].contact.message}
          required
          data-form-input
        ></textarea>
        <button className="form-btn" type="submit" data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>{staticData[lang].contact.send}</span>
        </button>
      </form>
    </section>
  );
};

export default FormSection;
