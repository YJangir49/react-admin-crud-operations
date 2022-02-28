import React from 'react';
import { 
    List, Datagrid, ReferenceField, TextField, EditButton, 
    SimpleForm, Edit, ReferenceInput, TextInput, SelectInput,
    Create,
    SimpleList
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';


export const PostList = props => {
    const isMobileView = useMediaQuery(theme => theme.breakpoints.down('sm'));
    
    return (<List filters={postFilters} {...props}>
       { !isMobileView ? 
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
        : 
        <SimpleList
            primaryText={record => record.title}
            secondaryText={record => `${record.views || 20} views`}
            tertiaryText={record => record.published_at ? new Date(record.published_at).toLocaleDateString() : new Date().toLocaleDateString()}
        />
       }
    </List>)
};

const PostTitle = ({record}) => {
    return <span>{record ? `${record.title}` : ""}</span>
}

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn/>,
    <ReferenceInput source="userId" label="User" reference="users"  allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
            <TextInput source="title" />
            <TextInput source="body" multiline/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
            <TextInput source="title" />
            <TextInput source="body" multiline/>
        </SimpleForm>
    </Create>
);

export default PostList;