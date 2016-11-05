import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';
import ItemList from '../items/containers/ItemList.js';
import EditItem from '../items/containers/EditItem.js';
import CategoryList from '../items/containers/CategoryList.js';
import NewCategory from '../items/containers/NewCategory.js';
import NewUser from '../users/containers/NewUser.js';
import Login from '../users/containers/Login.js';
import MapView from '../items/components/MapView.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  //Router for homepage "/"
  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<MapView />)
      });
    }
  });

  FlowRouter.route('/myfavorites', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ItemList />)
      });
    }
  });

  FlowRouter.route('/edit/:itemId', {
    name: 'items.edit',
    action({itemId}){
      mount(MainLayoutCtx, {
        content: () => (<EditItem itemId={itemId} />)
      });
    }
  })

  //Router for editpage "/edit"
  FlowRouter.route('/edit', {
    name: 'items.edit',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EditItem />)
      });
    }
  });

  FlowRouter.route('/categories', {
    name: 'categories.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CategoryList />)
      });
    }
  });

  FlowRouter.route('/categories/new/', {
    name: 'categories.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewCategory />)
      });
    }
  });

  FlowRouter.route('/register', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'users.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });

  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      Meteor.logout();
      FlowRouter.go('/');
    }
  });
}
