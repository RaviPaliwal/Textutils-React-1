import React from "react";

export default function Footer() {
  return (
    <div>
      <>
        {/*<!-- Footer --> */}
        <footer className="bg-dark text-center text-white">
          {/* <!-- Grid container --> */}
          <div className="container p-3">
            {/* <!-- Section: Form --> */}
            <section className="">
              <form action="">
                {/* <!--Grid row--> */}
                <div className="row d-flex justify-content-center">
                  {/* <!--Grid column--> */}
                  <div className="col-auto">
                    <p className="pt-0">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-md-5 col-12">
                    {/* <!-- Email input --> */}
                    <div className="form-outline form-white mb-0">
                      <input
                        type="email"
                        id="form5Example21"
                        className="form-control"
                      />
                      <label className="form-label" for="form5Example21">
                        Email address
                      </label>
                    </div>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-auto">
                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-outline-light mb-0"
                    >
                      Subscribe
                    </button>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
              </form>
            </section>
            {/* <!-- Section: Form --> */}

            {/* <!-- Section: Text --> */}
            <section className="mb-1">
              <h7>
                Website Created as My first React Project I have learnt about
                Props,PropTypes,React project folder Structure,React States{" "}
              </h7>
            </section>
            {/* <!-- Section: Text --> */}

            {/* LInks  */}
            <div className="d-flex flex-row justify-content-around">
              <span><a href="/" className="text-decoration-none">Facebook</a></span>
              <a href="/" className="text-decoration-none">Github</a>
              <a href="/" className="text-decoration-none">Whatsapp</a>
            </div>
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-2"
            style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
            <br></br>
            <a
              className="text-white text-decoration-none"
              href="https://www.linkedin.com/in/ravi-paliwal-233312201"
            >
              https://www.linkedin.com/in/ravi-paliwal-233312201
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </>
    </div>
  );
}
