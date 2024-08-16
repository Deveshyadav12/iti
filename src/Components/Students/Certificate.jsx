import React from 'react'
import Top  from "../Header/top";
import Navbar from '../Header/Navbar'
import Footer1 from '../About/footer'
import {style} from '../../css/style.css'

const Certificate = () => {
  return (
    <>
    <Top />
    <Navbar />
    <div className="container">
    <h1 style={{marginTop:12}}>Certificates Issued to Trainees</h1>
    <table className="table bordered">
    <tr>
      <th>Year-Month</th>
      <th>No. of Trainees Appeared</th>
      <th>No. of Training Passed</th>
      <th>No. of NTCs Issued</th>
      <th>No. of NTCs Pending</th>
    </tr>
    <tr>
      <td>
        2016-August
      </td>
      <td>145</td>
      <td>96</td>
      <td>59</td>
      <td>37</td>
    </tr>
    <tr>
      <td>
        2015-August
      </td>
      <td>129</td>
      <td>119</td>
      <td>65</td>
      <td>54</td>
    </tr>
    <tr>
      <td>
        2014-August
      </td>
      <td>161</td>
      <td>154</td>
      <td>126</td>
      <td>28</td>
    </tr>
    <tr>
      <td>
        2013-August
      </td>
      <td>41</td>
      <td>41</td>
      <td>7</td>
      <td>34</td>
    </tr>
    <tr>
      <td>
        2012-August
      </td>
      <td>121</td>
      <td>73</td>
      <td>25</td>
      <td>48</td>
    </tr>
    <tr>
      <td>
        2011-August
      </td>
      <td>72</td>
      <td>72</td>
      <td>28</td>
      <td>44</td>
    </tr>
    <tr>
      <td>
        2011-August
      </td>
      <td>57</td>
      <td>36</td>
      <td>9</td>
      <td>27</td>
    </tr>

    </table>

    </div>
    <Footer1 />
      
    </>
  )
}

export default Certificate
