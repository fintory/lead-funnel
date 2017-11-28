
import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-flexbox-grid';
import { Field } from 'redux-form';

import Input, { Label } from '@components/Input';
import PageWrapper from '@components/PageWrapper';
import Spacer from '@components/Spacer';

export default function InformationPage({ state, ...props }) {
  return (
    <PageWrapper
      element="form"
      index={2}
      barDisabled={props.invalid}
      onSubmit={props.handleSubmit}
      state={state}
    >
      <Helmet title="Home" />

      <h1>Tragen Sie Ihre Informationen ein.</h1>
      <p>
        In folgenden Formular können Sie uns optional - aber idealerweiße - nähere Informationen
        über Ihr geplantes Projekt zukommen lassen.
      </p>

      <br />

      <Row>
        <Col xl={6} lg={8} xs={12}>
          <Row>
            <Col xl={6} xs={12}>
              <Field component={Input} autoFocus name="firstName" placeholder="Vorname" />
            </Col>
            <Spacer hidden="xl" />
            <Col xl={6} xs={12}>
              <Field component={Input} name="lastName" placeholder="Nachname" />
            </Col>
          </Row>
          <Spacer />
          <Field component={Input} name="email" placeholder="E-Mail Adresse" />
          <Spacer />
          <Field component={Input} name="phone" placeholder="Telefonnummer (mit Ländercode)" />
          <Spacer />
          <Label htmlFor="test">
            <Field component={Input} name="nda_needed" type="checkbox" id="test" />
            &nbsp;&nbsp;&nbsp;
            <span>Es wird ein NDA gebraucht? Schreiben Sie uns eine E-Mail an&nbsp;<a href="mailto:contract@fintory.co">contract@fintory.co</a></span>
          </Label>
          <Spacer />
          <Field component={Input} element="textarea" name="description" placeholder="Projekt-Beschreibung" />
        </Col>
      </Row>
    </PageWrapper>
  );
}
