import React from 'react'
import AppAndSystem from './AppAndSystem'
import BankDetails from './BankDetails'
import Documents from './Documents'
import GeneralDetails from './GeneralDetails'
import Loans from './Loans'
import Savings from './Savings'

const TabsContent = () => {
  return (
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
  )
}

export default TabsContent