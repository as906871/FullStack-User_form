import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import image from '../Asset/dr_image.jpg'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const Doctor = [
  {
    doctor: "Choose the Doctor",
  },
  {
    doctor: "Akshay",
  },
  {
    doctor: "Adarsh",
  },
  {
    doctor: "Alikesh",
  },
  {
    doctor: "Aman",
  },
  {
    doctor: "Ajay",
  },
];

const Department = [
  {
    department: "Choose the Department"
  },
  {
    department: "department1"
  },
  {
    department: "department2"
  },
  {
    department: "department3"
  },
  {
    department: "department4"
  },
];

const Location = [
  {
    location: "Choose the Location"
  },
  {
    location: "Uttar Pradesh"
  },
  {
    location: "New Delhi"
  },
  {
    location: "Kerala"
  },
  {
    location: "Haryana"
  },
]
const Times = [
  {
    times: "Choose the time"
  },
  {
    times: "1:00"
  },
  {
    times: "1:30"
  },
  {
    times: "2:00"
  },
  {
    times: "2:30"
  },
]
const initialState = {
  first: "",
  last: "",
  phone: "",
  email: "",
  notes: "",
  timing: "",
  dep: "",
  drs: "",
  loc: ""
};
const Home = () => {
  const [state, setState] = useState(initialState);
  const { first, last, phone, email, notes, timing, dep, drs, loc } = state;
  const handlSubmit = (e) => {
    e.preventDefault();
    if (!first || !last || !phone || !email || !notes || !timing || !dep || !drs || !loc) {
      toast.error("Please provide value into each input field");
    } else {
      axios
        .post("http://localhost:5000/api/post", { first, last, phone, email, notes, timing, dep, drs, loc })
        .then(() => {
          setState({ first: "", last: "", phone: "", email: "", notes: "", timing: "", dep: "", drs: "", loc: "" });
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("thanks for appointment");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div >
      <div className="container">
        <div className="banner_img">
          <img src={image} alt="tlt" />
          <div className="form_appoi">
            <form onSubmit={handlSubmit}>
              <div className="form_content">
                <h1>Appointment With Doctor</h1>
                <div className="appoint_cont">
                  <div className="row">
                    <div className="col_6">

                      <select name="dep"
                        id="dep" value={dep}
                        onChange={handleInputChange}>
                        {
                          Department.map((item, index) => {
                            return (
                              <option key={index}>{item.department}</option>
                            )
                          })
                        }
                      </select>
                      <select name="drs"
                        id="drs" value={drs}
                        onChange={handleInputChange}>
                        {
                          Doctor.map((item, index) => {
                            return (
                              <option key={index} >{item.doctor}</option>
                            )
                          })
                        }
                      </select>

                      <select name="loc"
                        id="loc" value={loc}
                        onChange={handleInputChange}>
                        {
                          Location.map((item, index) => {
                            return (
                              <option key={index} >{item.location}</option>
                            )
                          })
                        }
                      </select>
                      <input
                        type="text"
                        name="first"
                        id="first"
                        placeholder="Enter your Firstname"
                        value={first}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="last"
                        id="last"
                        placeholder="Enter your Lastname"
                        value={last}
                        onChange={handleInputChange}
                      />
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Enter your  phone "
                        value={phone}
                        onChange={handleInputChange}
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={handleInputChange}
                      />

                    </div>
                    <div className="col_6">
                      {/* <div class="cal_date_cont">
                        <Calendar/> */}
                      {/* </div> */}
                      <div class="cal_date_cont">
                        <div class="month">
                          <ul>
                            <li class="prev">&#10094;</li>
                            <li class="next">&#10095;</li>
                            <li>
                              January
                              <span style={{ fontSize: "18px" }}>2023</span>
                            </li>
                          </ul>
                        </div>

                        <ul class="weekdays">
                          <li>Mo</li>
                          <li>Tu</li>
                          <li>We</li>
                          <li>Th</li>
                          <li>Fr</li>
                          <li>Sa</li>
                          <li>Su</li>
                        </ul>

                        <ul class="days">
                          <li>1</li>
                          <li>2</li>
                          <li>3</li>
                          <li>4</li>
                          <li>5</li>
                          <li>6</li>
                          <li>7</li>
                          <li>8</li>
                          <li>9</li>
                          <li><span class="active">10</span></li>
                          <li>11</li>
                          <li>12</li>
                          <li>13</li>
                          <li>14</li>
                          <li>15</li>
                          <li>16</li>
                          <li>17</li>
                          <li>18</li>
                          <li>19</li>
                          <li>20</li>
                          <li>21</li>
                          <li>22</li>
                          <li>23</li>
                          <li>24</li>
                          <li>25</li>
                          <li>26</li>
                          <li>27</li>
                          <li>28</li>
                          <li>29</li>
                          <li>30</li>
                          <li>31</li>
                        </ul>
                      </div>

                      <div className="timing">
                        <div className="childd" style={{backgroundColor:"#2785bb",color:"white", paddingTop:"4px", width:"100px", height:"45px", padding:"10px", }}>Set a time</div>
                        <div className="childd">
                        <select name="timing"
                          id="timing" value={timing}
                          onChange={handleInputChange}>
                          {
                            Times.map((item, index) => {
                              return (
                                <option key={index} >{item.times}</option>
                              )
                            })
                          }
                        </select>
                        </div>
                      </div>
                      <textarea
                        type="text"
                        name="notes"
                        placeholder="Notes (Optional)"
                        value={notes}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Confirm Your Booking"
                    className="buttonsubmit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
