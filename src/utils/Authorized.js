import RenderAuthorized from '../components/Authorized';
import { getAuthority } from './authority';

/** 取得授权后的组件 */
let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(getAuthority());
};

export { reloadAuthorized };
export default Authorized;
