import React from 'react';
import {Router, LocationProvider} from "@reach/router";

//PAGES
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import InvoicesPage from './pages/InvoicesPage';
import InvoiceList from './components/InvoiceList';
import InvoiceForm from './components/InvoiceForm';
import InvoiceDetailPage from './pages/InvoiceDetailPage';

function AppRouter() {
  return (
    <Router>
      <NotFoundPage default/>
      <HomePage path="/"/>
      <LoginPage path="login/"/>
      <InvoicesPage path="invoices">
        <InvoiceList path="/"/>
        <InvoiceList path="inbox"/>
        <InvoiceList path="draft"/>
        <InvoiceList path="sent"/>
        <InvoiceForm path="new"/>
        <InvoiceDetailPage path=":id"/>
      </InvoicesPage>
    </Router>
  );
}

export default AppRouter;
