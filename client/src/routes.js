import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShelfList from './Components/ShelfList/ShelfList';
import BinList from './Components/BinList/BinList';
import ViewInventory from './Components/ViewInventory/ViewInventory';
import AddInventory from './Components/AddInventory/AddInventory';

export default (
    <Switch>
        <Route exact path='/' component={ShelfList} />
        <Route path='/binlist/:shelf' component={BinList} />
        <Route path='/bin/:id' component={ViewInventory} />
        <Route path='/create/:binId' />
    </Switch>
)