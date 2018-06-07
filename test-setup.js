/* configures jest to work with enzyme and render components like react 16
 this file is requested in jest.config.js */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
