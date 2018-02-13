import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import EventList from './components/eventlist';
import 'antd/dist/antd.css';
import DevTools from 'mobx-react-devtools';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import {Layout,Menu,Icon} from 'antd';
import {observableEventStore} from './store/eventstore';
import EventForm from './components/eventForm';
const {Header, Content, Footer} = Layout;
class App extends Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
      <div className="">
        <DevTools/>
        {/* <Header mode="light"> */}
          <Menu
            mode="horizontal"
          >
          <Menu.Item key="home">
          <Icon type="home" />Home
        </Menu.Item>
        <Menu.Item key="plans" >
          <Icon type="text" />Plans
        </Menu.Item>
          </Menu>
        {/* </Header> */}
        <Content style={{padding:20}}>
        <div className="hdiv">
        <h1 style={{color: "#22b3ec", fontSize: 64}}>Stup</h1>
        <h2 style={{fontSize:24, width:600,lineHeight: 1.1,color:"#484848"}}>Find new events and engage in great conversations</h2>
        </div>
        <EventForm className="addEvent" store={observableEventStore}/>
        <div className="divider">
        <h1>Events by your friends</h1>
      <EventList store={observableEventStore}/>
      <h1>Go Global!</h1>
      <EventList store={observableEventStore}/>
      </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
       ©2017 Created by Tushar Garg
    </Footer>
      </div>
      </LocaleProvider>
    );
  }
}

export default App;
