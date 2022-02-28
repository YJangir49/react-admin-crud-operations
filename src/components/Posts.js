import React from 'react';
import { 
    List, Datagrid, ReferenceField, TextField, EditButton, 
    SimpleForm, Edit, ReferenceInput, TextInput, SelectInput,
    Create
} from 'react-admin';

export const PostList = props => (
    <List filters={postFilters} {...props}>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

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