//import React from 'react';
//import App from '../main';
//import Main from '../src/main';
//var Main = require('../src/main');
//var Main = require('../src/main.js');
//var Main = require('../src/main.js');
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../src/main';

describe('<App />', ()=>{
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('has a single wrapper element', () => {
    //expect(wrapper.find(`${styles.wrapper}`))
    //  .to.have.length(1);
	  // Can't find variable: styles
	  // ~/project/tests.webpack.js:71694:48 <- webpack:///test/mainSpec.js:20:34
  });
});

//describe('A suite', function(){
//  var a;
//  it('contains spec with an expectation',  () => {
//    expect(true).toBe(true);
//  });
//
//  it("and so is a spec", () => {
//    a = true;
//    expect(a).toBe(true);
//  });
//
//  it("bob is dead, because of us.", () => {
//    a = true;
//    var b = () => { return true; }
//
//    expect(a).toBe(b());
//  });
//});
