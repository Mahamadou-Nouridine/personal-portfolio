"use client"
import React from "react";
import staticData from "@/data/staticData.json";
import { useSelector } from "react-redux";

const DownloadCvButton = () => {
    const lang = useSelector((state) => state.language);
  return (
    <div className="w-100 mt-5">
      <a
        target="_blank"
        href="https://docs.google.com/document/d/19pH6CyMqmcBV4hDpf_U8NPw2-vR_ZkFSXwu3dD6pcSA/edit?usp=sharing"
      >
        <button className="form-btn m-auto" type="submit" data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>{staticData[lang].resume.cvDownload}</span>
        </button>
      </a>
    </div>
  );
};

export default DownloadCvButton;
