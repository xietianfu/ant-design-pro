import 'rc-drawer-menu/assets/index.css';
import React from 'react';
/** 处理移动端访问时的菜单样式 */
import DrawerMenu from 'rc-drawer-menu';
import SiderMenu from './SiderMenu';

export default props => (
  props.isMobile ? (
    <DrawerMenu
      parent={null}
      level={null}
      iconChild={null}
      open={!props.collapsed}
      onMaskClick={() => { props.onCollapse(true); }}
      width="256px"
    >
      <SiderMenu {...props} collapsed={props.isMobile ? false : props.collapsed} />
    </DrawerMenu>
  ) : <SiderMenu {...props} />
);
