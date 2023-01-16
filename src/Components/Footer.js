import React from "react";

export default function Footer(props) {
  return (
      <>
        {/*<!-- Footer --> */}
        <hr />
      <footer className={`bg-${props.mode} text-center text-${props.mode==='light'?'dark':'light'}`}>
          {/* <!-- Grid container --> */}
          <div className="container p-3">
            {/* <!-- Section: Form --> */}
            <section className="">
              <form action="">
                {/* <!--Grid row--> */}
                <div className="row d-flex justify-content-center">
                  {/* <!--Grid column--> */}
                  <div className="col-auto">
                    <p className="pt-2">
                      Sign up for our newsletter
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
                        className="form-control mb-3"
                      />
                    </div>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-auto">
                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className={`btn btn-outline-${props.mode==='light'?'success':'info'} mb-0 text-${props.mode==='light'?'dark':'light'}`}
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

            {/* LInks  */}
            <div className="d-flex flex-row justify-content-around">
              <span><a href={props.facebook} className="text-decoration-none">Facebook</a></span>
              <a href={props.github} className="text-decoration-none">Github</a>
              <a href={props.whatsapp} className="text-decoration-none">Whatsapp</a>
            </div>
          </div>
          {/* <!-- Grid container --> */}

          <div
            className="text-center"
            style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}
          >
            ©2023 Copyright: <br />
            <a
              className="text-white text-decoration-none"
              href={props.linkedin}
            >
              {props.linkedin}
            </a>
          </div>
          
        </footer>
      </>
  );
}
