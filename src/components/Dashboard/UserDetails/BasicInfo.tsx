import React from "react";
import AppAndSystem from "./InfoTabs/AppAndSystem";
import BankDetails from "./InfoTabs/BankDetails";
import Documents from "./InfoTabs/Documents";
import GeneralDetails from "./InfoTabs/GeneralDetails";
import Loans from "./InfoTabs/Loans";
import Savings from "./InfoTabs/Savings";
import TabHeader from "./InfoTabs/TabsHeader";

const BasicInfo = () => {
  return (
    <>
      <section className="basic-info">
        <div className="info-container">
          <div className="info-wrapper">
            <div className="avatar">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.04053 31.1796C2.47961 28.2202 3.79365 25.6264 5.97961 23.4C8.74053 20.6 12.0732 19.2 15.9796 19.2C19.886 19.2 23.2204 20.6 25.9796 23.4C28.1796 25.6266 29.5062 28.2204 29.9593 31.1796M24.1405 10.0204C24.1405 12.247 23.3468 14.1532 21.7593 15.7408C20.1734 17.3408 18.253 18.1408 16.0001 18.1408C13.7594 18.1408 11.8409 17.3408 10.2409 15.7408C8.65337 14.1533 7.85965 12.247 7.85965 10.0204C7.85965 7.76727 8.65341 5.84679 10.2409 4.25959C11.8409 2.67367 13.7596 1.87991 16.0001 1.87991C18.2532 1.87991 20.1737 2.67367 21.7593 4.25959C23.3468 5.84711 24.1405 7.76739 24.1405 10.0204Z"
                  stroke="#213F7D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="name-wrapper">
              <h2 className="name">Grace Effiom</h2>
              <p className="account-number">LSQFf587g90</p>
            </div>
          </div>
          <div className="tier">
            <p className="">User’s Tier</p>
            <i className="">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.98572 0.287513C7.85197 0.293138 7.73572 0.381263 7.69447 0.508761L6.18759 5.17996L1.28071 5.16996C1.14196 5.16996 1.01821 5.25934 0.975716 5.39121C0.932591 5.52371 0.980091 5.66809 1.09259 5.74996L5.06891 8.62676L3.54203 13.293C3.49891 13.4249 3.54578 13.5699 3.65828 13.6511C3.77016 13.733 3.92265 13.733 4.03454 13.6511L7.9995 10.758L11.9657 13.6511C12.0776 13.733 12.2301 13.733 12.342 13.6511C12.4545 13.5699 12.5014 13.4249 12.4582 13.293L10.9314 8.62676L14.9077 5.74996C15.0202 5.66809 15.0677 5.52371 15.0246 5.39121C14.9814 5.25933 14.8583 5.16996 14.7196 5.17059L9.81269 5.18059L8.30393 0.509385V0.50876C8.25956 0.371885 8.12957 0.28188 7.98581 0.287512L7.98572 0.287513Z"
                  fill="#E9B200"
                />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63378L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z"
                  fill="#E9B200"
                />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63378L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z"
                  fill="#E9B200"
                />
              </svg>
            </i>
          </div>
          <div className="bank">
            <h2 className="amount">₦200,000.00</h2>
            <p className="bank-info">9912345678/Providus Bank</p>
          </div>
        </div>
        <TabHeader />
      </section>

      <section className="tabs-section">
        <div
          className="tab-pane"
          id="tabs-general"
          role="tabpanel"
          aria-labelledby="tabs-general-tab"
          data-te-tab-active
        >
          <GeneralDetails />
        </div>
        <div
          className="tab-pane"
          id="tabs-docs"
          role="tabpanel"
          aria-labelledby="tabs-docs-tab"
        >
          <Documents />
        </div>
        <div
          className="tab-pane"
          id="tabs-bank"
          role="tabpanel"
          aria-labelledby="tabs-bank-tab"
        >
          <BankDetails />
        </div>
        <div
          className="tab-pane"
          id="tabs-loans"
          role="tabpanel"
          aria-labelledby="tabs-loans-tab"
        >
          <Loans />
        </div>
        <div
          className="tab-pane"
          id="tabs-savings"
          role="tabpanel"
          aria-labelledby="tabs-savings-tab"
        >
          <Savings />
        </div>
        <div
          className="tab-pane"
          id="tabs-app"
          role="tabpanel"
          aria-labelledby="tabs-app-tab"
        >
          <AppAndSystem />
        </div>
      </section>
    </>
  );
};

export default BasicInfo;
