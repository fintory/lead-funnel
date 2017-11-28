
import React, { Component } from 'react';
import { formValues } from 'redux-form';
import Helmet from 'react-helmet';

import PageWrapper from '@components/PageWrapper';
import Tabs from '@components/Tabs';

class ChoicePage extends Component {
  constructor(props) {
    super(props);

    this.state = { tabKey: 'service' };
  }

  render() {
    return (
      <PageWrapper
        element="form"
        onSubmit={this.props.handleSubmit}
        barDisabled={this.props.invalid}
        index={1}
        state={this.props.state}
      >
        <Helmet title="Bitte wählen Sie einen der folgenden Services" />


        <h1>Bitte wählen Sie einen der folgenden Services</h1>
        <p>
          In folgenden durchlaufen Sie, basierend auf dem ausgewählten Produkt, zwischen 2-5
          Schritten, um ein Angebot für Ihr Projekt zu erhalten.
        </p>

        <Tabs
          state={this.props.state}
          onChange={tabKey => this.setState({ tabKey })}
          currentTab={this.state.tabKey}

          serviceType={this.props.serviceType}
          serviceTitle={this.props.serviceTitle}
        />
      </PageWrapper>
    );
  }
}

export default formValues('serviceType', 'serviceTitle')(ChoicePage)
