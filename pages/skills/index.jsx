import React from "react";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import "../../app/bootstrap.scss";

const index = () => {
  return (
    <>
      <div className="container">
        <h1>Formulaire de contact</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nom
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Votre nom"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Votre email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder="Votre message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </div>
      <Navigation />
      <Footer />
    </>
  );
};

export default index;
