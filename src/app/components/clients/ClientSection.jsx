import React from "react";

const ClientSection = () => {
  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">
        <li className="clients-item">
          <a href="#">
            <img src="./assets/images/logo-1-color.png" alt="client logo" />
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="./assets/images/logo-2-color.png" alt="client logo" />
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="./assets/images/logo-3-color.png" alt="client logo" />
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="./assets/images/logo-4-color.png" alt="client logo" />
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="./assets/images/logo-5-color.png" alt="client logo" />
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="./assets/images/logo-6-color.png" alt="client logo" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ClientSection;
