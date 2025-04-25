import React from 'react'
import {BrowserRouter as Router ,Routes ,Route,Link} from "react-router-dom"
import AddBook from './components/AddBook'
import Delete from './components/DeleteBook'
import UpdateBook from './components/UpdateBook'
import View from './components/ViewBook'
import Search from './components/SearchBook'
import "./App.css"
const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to ="/add">Add Book</Link>
          <Link to ="/update">Update Book</Link>
          <Link to ="/search">Search Book</Link>
          <Link to ="/view">View Book</Link>
          <Link to ="/delete">Delete Book</Link>
        </nav>
        <Routes>
          <Route path='/add' element={<AddBook/>}/>
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/update' element={<UpdateBook/>}/>
          <Route path='/view' element={<View/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App