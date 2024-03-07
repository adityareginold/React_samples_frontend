import React from 'react'
import Nav from './Nav'

const Viewtable = () => {
  return (
    <div>
        <Nav/>

<table class="table">
  <thead>
    <tr>
      <th scope="col">si</th>
      <th scope="col">brand</th>
      <th scope="col">size</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>h&m</td>
      <td>7</td>
      <td>7890</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>h&m</td>
      <td>7</td>
      <td>7890</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>h&m</td>
      <td>7</td>
      <td>7890</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}

export default Viewtable