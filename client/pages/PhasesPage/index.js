/* eslint-disable react/no-danger */

import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-flexbox-grid';
import Media from 'react-media';
import { formValues } from 'redux-form';
import find from 'lodash/find';

import Steps from '@components/Steps';
import PageWrapper from '@components/PageWrapper';
import Card from '@components/Card';
import Spacer from '@components/Spacer';
import Logo from '@components/Logo';
import Person from '@components/Person';

import tabs from '@utils/tabs';
import { mobile } from '@utils/queries';
import * as stepsByService from '@utils/stepsByService';

function PhasesPage(props) {
  const currentTab = find(tabs, { key: props.serviceType });

  if (!currentTab) props.history.push('/');

  const { key, ...choice } = find(currentTab.choices, { title: props.serviceTitle });
  const steps = stepsByService[key];

  return (
    <PageWrapper
      state={props.state}
      index={2}
      element="form"
      onSubmit={props.handleSubmit}
    >
      <Helmet title="Unsere Projekt-Phasen" />

      <Row>
        <Col md={8} xs={12}>
          <h1>Unsere Projekt-Phasen</h1>
          <p>
            Im Folgenden sehen Sie unsere potentiellen Projekt-Phasen für Ihren ausgewählten
            Service. Wenn Sie detailierte Fragen haben, wenden Sie sich an Ihren persönlichen
            Ansprechpartner.
          </p>
        </Col>
      </Row>

      <Spacer size="xl" />

      <Row>
        <Col lg={8} xs={12}>
          <Card big>
            <Media
              query={mobile.raw}
            >
              {matches => (matches ? [
                <h4>{props.serviceTitle}</h4>,
                <p dangerouslySetInnerHTML={{ __html: choice.subtitle }} />,
              ] : (
                <Row middle="xs">
                  <Col xs={8}>
                    <h4>{props.serviceTitle}</h4>
                  </Col>
                  <Col xs={4}>
                    <Logo right />
                  </Col>
                  <Col xs={8}>
                    <p dangerouslySetInnerHTML={{ __html: choice.subtitle }} />
                  </Col>
                </Row>
              ))}
            </Media>


            <Steps steps={steps} />
          </Card>
        </Col>
        <Col lg={4} xs={12}>
          <Person />
        </Col>
      </Row>
    </PageWrapper>
  );
}

export default formValues('serviceType', 'serviceTitle')(PhasesPage);
