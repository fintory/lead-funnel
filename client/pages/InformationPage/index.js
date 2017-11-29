
import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-flexbox-grid';
import { Field } from 'redux-form';

import Input from '@components/Input';
import PageWrapper from '@components/PageWrapper';
import Spacer from '@components/Spacer';
import Person from '@components/Person';

export default function InformationPage({ state, ...props }) {
  return (
    <PageWrapper
      element="form"
      index={3}
      barDisabled={props.invalid}
      onSubmit={props.handleSubmit}
      state={state}
    >
      <Helmet title="Ihre persönlichen Daten" />

      <Row>
        <Col md={8} xs={12}>
          <h1>Ihre persönlichen Daten</h1>
          <p>
            Wir würden Sie und Ihr Produkt gerne näher kennenlernen. Hierzu füllen Sie bitte das
            Formular aus.
          </p>
        </Col>
      </Row>

      <Spacer size="xl" />

      <Row>
        <Col lg={8} xs={12}>
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
          <Field component={Input} name="company" placeholder="Firma" />
          <Spacer />
          <Row>
            <Col xs={2}>
              <Input disabled input={{ value: '+49' }} meta={{ touched: false }} />
            </Col>

            <Col xs={10}>
              <Field component={Input} name="phone" placeholder="Telefonnummer" />
            </Col>
          </Row>
          <Spacer />
          <Field component={Input} element="textarea" name="description" placeholder="Projekt-Beschreibung" />
        </Col>
        <Col lg={4} xs={12}>
          <Person />
        </Col>
      </Row>
    </PageWrapper>
  );
}
