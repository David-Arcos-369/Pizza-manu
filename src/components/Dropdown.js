import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Anchor } from 'antd';

const { Link } = Anchor;
const handleClick = (e, link) => {
            e.preventDefault();
            // console.log(link);
};

const dropdownMenu = () => {

            return (

            <Menu icon={<DownOutlined />}>

                        <Dropdown overlay={dropdownMenu}>
                                    <Anchor affix={false} onClick={handleClick}>
                                    <Link className="ant-dropdown-link" onClick={e => e.preventDefault()} />
                                    <Menu.Item>
                                                <Link href="#drinks" title="Drinks" />
                                    </Menu.Item>
                                    <Menu.Item >
                                                <Link href="#side-dishes" title="Side Dishes" />
                                    </Menu.Item>
                                    </Anchor>
                        </Dropdown>

            </Menu>
      );
};
export default 'dropdownMenu';
