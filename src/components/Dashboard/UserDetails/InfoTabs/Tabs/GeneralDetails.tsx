import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";

const GeneralDetails = () => {
  const { userDetails, loading, errMsg, error } = useSelector(
    (state: RootState) => state.details
  );

  return (
    <section className="grid-section">
      {!error ? (
        <>
          {loading ? (
            <>
              <p className="loading">Loading...</p>
            </>
          ) : (
            <>
              {userDetails.map((detail, index) => (
                <>
                  <div key={detail.id} className="grid-container">
                    <h2>Personal Information</h2>
                    <div className="grid-wrapper">
                      <div className="">
                        <h3>full Name</h3>
                        <p>
                          {detail.profile.firstName} {""}
                          {detail.profile.lastName}
                        </p>
                      </div>
                      <div className="">
                        <h3>Phone Number</h3>
                        <p>
                          {detail.phoneNumber.replace(
                            /[^0-9 | / | - | \s]/g,
                            ""
                          )}
                        </p>
                      </div>
                      <div className="">
                        <h3>Email Address</h3>
                        <p style={{ textTransform: "lowercase" }}>
                          {detail.email}
                        </p>
                      </div>
                      <div className="">
                        <h3>Bvn</h3>
                        <p>{detail.profile.bvn}</p>
                      </div>
                      <div className="">
                        <h3>Gender</h3>
                        <p>{detail.profile.gender}</p>
                      </div>
                      <div className="">
                        <h3>Marital status</h3>
                        <p>-</p>
                      </div>
                      <div className="">
                        <h3>Children</h3>
                        <p>-</p>
                      </div>
                      <div className="">
                        {/* <h3>Type of residence</h3> */}
                        <h3>Residential Address</h3>
                        <p>{detail.profile.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid-container">
                    <h2>Education and Employment</h2>
                    <div className="grid-wrapper">
                      <div className="">
                        <h3>level of education</h3>
                        <p>{detail.education.level}</p>
                      </div>
                      <div className="">
                        <h3>employment status</h3>
                        <p>{detail.education.employmentStatus}</p>
                      </div>
                      <div className="">
                        <h3>sector of employment</h3>
                        <p>{detail.education.sector}</p>
                      </div>
                      <div className="">
                        <h3>Duration of employment</h3>
                        <p>{detail.education.duration}</p>
                      </div>
                      <div className="">
                        <h3>office email</h3>
                        <p style={{ textTransform: "lowercase" }}>
                          {detail.education.officeEmail}
                        </p>
                      </div>
                      <div className="">
                        <h3>Monthly income</h3>
                        <p>
                          ₦{detail.education.monthlyIncome[1]}- ₦
                          {detail.education.monthlyIncome[0]}
                        </p>
                      </div>
                      <div className="">
                        <h3>loan repayment</h3>
                        <p>{detail.education.loanRepayment}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid-container">
                    <h2>Socials</h2>
                    <div className="grid-wrapper">
                      <div className="">
                        <h3>Twitter</h3>
                        <p>{detail.socials.twitter}</p>
                      </div>
                      <div className="">
                        <h3>Facebook</h3>
                        <p>{detail.socials.facebook}</p>
                      </div>
                      <div className="">
                        <h3>Instagram</h3>
                        <p>{detail.socials.instagram}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid-container">
                    <h2>Guarantor</h2>
                    <div className="grid-wrapper">
                      <div className="">
                        <h3>full Name</h3>
                        <p>
                          {detail.guarantor.firstName} {""}
                          {detail.guarantor.lastName}
                        </p>
                      </div>
                      <div className="">
                        <h3>Phone Number</h3>
                        <p>
                          {detail.guarantor.phoneNumber.replace(
                            /[^0-9 | / | - | \s]/g,
                            ""
                          )}
                        </p>
                      </div>
                      <div className="">
                        {/* <h3>Email Address</h3> */}
                        <h3>Gender</h3>
                        <p>{detail.guarantor.gender}</p>
                      </div>
                      <div className="">
                        <h3>Adress</h3>
                        <p>{detail.guarantor.address}</p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </>
          )}
        </>
      ) : (
        <>
          <p className="error-message">{errMsg}.</p>
        </>
      )}
    </section>
  );
};

export default GeneralDetails;
