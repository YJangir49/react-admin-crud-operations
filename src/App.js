import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './Users';
import PostList, { PostEdit, PostCreate } from './components/Posts';
import { PostAddSharp, GroupSharp } from '@material-ui/icons';
import Dashboard from './components/Dashboard';
import authProvider from "./authProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (<Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider} >
    <Resource icon={GroupSharp} name="users" list={UserList}/>
    <Resource icon={PostAddSharp} name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
</Admin>);

export default App;