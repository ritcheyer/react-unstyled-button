import * as React from 'react';

import { UnstyledButton, IUnstyledButtonProps } from "./component";

import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount, configure } from "enzyme";

// Configure enzyme
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("UnstyledButton", () => {
    it("Render", () => {
        let wrapper = shallow(<UnstyledButton />);
        expect(wrapper).to.have.length(1);
    });

    describe("Classname", () => {
        it("Default has classname", () => {
            let wrapper = shallow(<UnstyledButton />);
            let htmlButton = wrapper.find('button');
            expect(htmlButton).to.have.length(1);
            expect(htmlButton.props().className).to.contain('sci-react-unstyled-button');
        });

        it("Disable style has no classname", () => {
            let wrapper = shallow(<UnstyledButton className="blue" isBaseStylesDisabled={true} />);
            let htmlButton = wrapper.find('button');
            expect(htmlButton).to.have.length(1);
            expect(htmlButton.props().className).to.not.contain('sci-react-unstyled-button');
        });

        it("Class name override", () => {
            let wrapper = shallow(<UnstyledButton className="blue" />);
            let htmlButton = wrapper.find('button');
            expect(htmlButton).to.have.length(1);
            expect(htmlButton.props().className).to.contain('sci-react-unstyled-button');
            expect(htmlButton.props().className).to.contain('blue');
        });
    });

    it("InnerRef", (done => {
        let innerRefHandler = (ref) => {
            expect(ref).to.exist;
            done();
        };
        let wrapper = mount(<UnstyledButton innerRefHandler={innerRefHandler} />);
        let htmlButton = wrapper.find('button');
        expect(htmlButton).to.have.length(1);
    }));

    describe("Setting type", () => {
        it("Default is button", () => {
            let wrapper = shallow(<UnstyledButton />);
            let htmlButton = wrapper.find('button');
            expect(htmlButton).to.have.length(1);
            expect(htmlButton.props().type).to.equal("button");
        });
        it("Set type to reset", () => {
            let wrapper = shallow(<UnstyledButton type="reset" />);
            let htmlButton = wrapper.find('button');
            expect(htmlButton).to.have.length(1);
            expect(htmlButton.props().type).to.equal("reset");
        });
    });

    it("Click event", (done) => {
        let props = {
            onClick: done
        };

        let wrapper = shallow(<UnstyledButton {...props} />);
        wrapper.simulate("click");
    });
});