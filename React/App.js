import logo from './logo.svg';
import MyComponent from './MyComponent';
import './App.css';
import MyClassComponent from './MyClassComponent';
import ArrowComponent from './ArrowComponent';
import MyPropsExample from './MyPropsExample';
import ClassComponent from './ClassComponent';
import StateExample from './StateExample';
import ClassCounter from './useStateComponents/ClassCounter';
import HookCounter from './useStateComponents/HookCounter';
import NameList from './NameList';
import ColumnComponent from './ColumnComponent';
import TableComponent from './TableComponent';
import AnotherFile from './AnotherFile';
import ClickCounterButton from './ClickCounterButton';
import RegisterForm from './RegisterForm';
import GetReactData from './HttpExample/GetReactData';
import PostExample from './HttpExample/PostExample';
import ClassuseEffect from './ClassuseEffect';
import HookEffectCounter from './HookuseEffectCounter';
import AboutUs from './RouterComponent/AboutUs';
import Contact from './RouterComponent/Contact';
import { Provider } from 'react-redux';
import store from './Redux/store';
import CakeContainer from './Components/CakeContainer';
import React, { Component } from 'react';
import CounterOne from './CounterOne';
import CountHook from './CustomHookCreation/CountHook'
import FormCustomHookOne from './CustomHookCreation/FormCustomHookOne';
//import ComponentC from './useContextHook/ComponentC';
//export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<MyComponent></MyComponent>
        <MyClassComponent></MyClassComponent>
        <ArrowComponent></ArrowComponent>
        <StateExample></StateExample>
        <ClassCounter></ClassCounter>
        <HookCounter></HookCounter>
        <NameList></NameList>
        <MyPropsExample name ="sravya" age={15}>
          <p>This is simple properties</p>
        </MyPropsExample>
       <ClassComponent name="janga" age={10}></ClassComponent>
       <ColumnComponent></ColumnComponent>
        <TableComponent></TableComponent>
        <AnotherFile></AnotherFile>
        <ClickCounterButton></ClickCounterButton>
        <GetReactData></GetReactData>
        <RegisterForm></RegisterForm>
        <GetReactData></GetReactData>
        <PostExample></PostExample>
        <ClassuseEffect></ClassuseEffect>
        <HookEffectCounter></HookEffectCounter>
        <AboutUs></AboutUs>
        <Contact></Contact>
      
        <Provider store={store}>
          <div>
            <CakeContainer />
          </div>
        </Provider>
        <CounterOne></CounterOne>
        <div>
          <UserContext.Provider value={'Sravya'}>
            <ComponentC />
          </UserContext.Provider>
        </div>

        <div>
          <CountHook></CountHook>
          <FormCustomHookOne></FormCustomHookOne>
        </div>*/}

   
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
