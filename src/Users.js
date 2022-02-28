import React from 'react';
import { List,  Datagrid, TextField, EmailField } from 'react-admin';
import CustomURLField  from './components/CustomUrlField';

const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <CustomURLField  source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);
export default UserList;