import React from 'react'
import Nav from './Nav'

const Viewtable = () => {
  return (
    <div>
        <Nav/>

<table class="table">
  <thead>
    <tr>
      <th scope="col">sno</th>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">Film industry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>ssr</td>
      <td>34</td>
      <td>Hin</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>ssr</td>
      <td>34</td>
      <td>Hin</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>ssr</td>
      <td>34</td>
      <td>Hin</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Viewtable