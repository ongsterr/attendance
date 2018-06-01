import React from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'
import NotFound from '/imports/ui/not-found'
import MemberAddContainer from '/imports/ui/member/member-add-container'
import MemberAddSuccess from '/imports/ui/member/member-add-success'
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import { alertsConfig } from '/imports/ui/config/alerts'

const MemberAddIframe = () => {
  return (
    <div style={{ height: '100%' }}>
      <Alert {...alertsConfig} />
      <Switch>
      <Route path="/success" component={MemberAddSuccess} />
      <Route path="/" component={MemberAddContainer} />
      </Switch>
    </div>
  )
}

export default MemberAddIframe
