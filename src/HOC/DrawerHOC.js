import React,{useState} from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space } from 'antd';  
import { useSelector, useDispatch } from 'react-redux';

const { Option } = Select;

export default function DrawerHOC() {
  
  const { visible, ComponentContentDrawer, callBackSubmit } = useSelector(
    (state) => state.drawerReducer
  );

  const dispatch = useDispatch();

  console.log("visible", visible);


   const showDrawer = () => {
        dispatch({ type: 'OPEN_DRAWER'});
    };

    const onClose = () => {
        dispatch({ type: 'CLOSE_DRAWER'});
      };

    return (
      <>
        {/* <button onClick={showDrawer}>show</button> */}
        <Drawer
          title="Create a new account"
          width={720}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div style={{ textAlign: "right" }}>
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={callBackSubmit} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          {ComponentContentDrawer}
        </Drawer>
      </>
    );
}
