
import React, { Component } from 'react';
import { formValues } from 'redux-form';
import Helmet from 'react-helmet';

import PageWrapper from '@components/PageWrapper';
import Tabs from '@components/Tabs';
import Spacer from '@components/Spacer';

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
        <Helmet title="Wählen Sie einen der folgenden Services" />


        <h1>Wählen Sie einen Service oder Workshop</h1>
        <p>
          Im Folgenden sehen Sie eine Auflistung unserer verfügbaren Services und Workshops. Welcher passt am besten zu Ihnen?
        </p>

        <Spacer size="xl" />

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

export default formValues('serviceType', 'serviceTitle')(ChoicePage);
