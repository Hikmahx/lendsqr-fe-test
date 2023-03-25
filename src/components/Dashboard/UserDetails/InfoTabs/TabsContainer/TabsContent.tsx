import React from 'react'
import AppAndSystem from '../Tabs/AppAndSystem'
import BankDetails from '../Tabs/BankDetails'
import Documents from '../Tabs/Documents'
import GeneralDetails from '../Tabs/GeneralDetails'
import Loans from '../Tabs/Loans'
import Savings from '../Tabs/Savings'

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