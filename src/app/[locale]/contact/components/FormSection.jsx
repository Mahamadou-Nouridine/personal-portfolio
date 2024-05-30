"use client";

import axios from "axios";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const FormSection = () => {
  const t = useTranslations("contact-page")
  const initial = {
    fullName: "",
    email: "",
    message: "",
  };
  const [formData, changeData] = useState(initial);

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

      changeData(initial)
      return data
    } catch (error) {
      throw new Error("An error occured while sending the message, please review the information you are providing and try again.")
    }
  };
  return (
    <section className="contact-form">
      <h3 className="h3 form-title">{t("form")}</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.promise(submit(), {
            pending: {
              render() {
                return t('send-pending');
              },
            },
            success: t('send-success'),
            error: {
              render({ data }) {
                // When the promise reject, data will contains the error
                return t('send-error');
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
            name={t('full-name')}
            className="form-input"
            placeholder={t('full-name')}
            required
            data-form-input
          />

          <input
            value={formData.email}
            onChange={(e) => changeTrack("email", e.target.value)}
            type="email"
            name="email"
            className="form-input"
            placeholder={t("email")}
            required
            data-form-input
          />
        </div>

        <textarea
          value={formData.message}
          onChange={(e) => changeTrack("message", e.target.value)}
          name="message"
          className="form-input"
          placeholder={t('message')}
          required
          data-form-input
        ></textarea>
        <button className="form-btn" type="submit" data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>{t('send')}</span>
        </button>
      </form>
    </section>
  );
};

export default FormSection;
