import React from "react";

const TabsHeader = () => {
  return (
    <div className="tabs-header">
      <ul role="tablist" data-te-nav-ref>
        <li role="presentation">
          <a
            href="#tabs-general"
            className="data-[te-nav-active]"
            data-te-toggle="pill"
            data-te-target="#tabs-general"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-general"
            aria-selected="true"
          >
            General Details
          </a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-docs"
            className="data-[te-nav-active]"
            data-te-toggle="pill"
            data-te-target="#tabs-docs"
            role="tab"
            aria-controls="tabs-docs"
            aria-selected="false"
          >
            Documents
          </a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-bank"
            className="data-[te-nav-active]"
            data-te-toggle="pill"
            data-te-target="#tabs-bank"
            role="tab"
            aria-controls="tabs-bank"
            aria-selected="false"
          >
            Bank Details
          </a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-loans"
            className="data-[te-nav-active]"
            data-te-toggle="pill"
            data-te-target="#tabs-loans"
            role="tab"
            aria-controls="tabs-loans"
            aria-selected="false"
          >
            Loans
          </a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-savings"
            className="data-[te-nav-active]"
            data-te-toggle="pill"
            data-te-target="#tabs-savings"
            role="tab"
            aria-controls="tabs-savings"
            aria-selected="false"
          >
            savings
          </a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-app"
            className="data-[te-nav-active]"
            data-te-toggle="pill"
            data-te-target="#tabs-app"
            role="tab"
            aria-controls="tabs-app"
            aria-selected="false"
          >
            App and System
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TabsHeader;
