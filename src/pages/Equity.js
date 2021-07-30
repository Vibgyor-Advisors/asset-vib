// import { Dropdown } from "bootstrap";
import { useState } from "react";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Buttontick from "../components/Buttontick";
const Equity = () => {
  // const [disabled, setdisabled] = useState();
  return (
    <>
      <br />
      <h1>Equity</h1>
      <div className="cont">
        <label>Amount to be invested in Arts :</label>
        <input type="text" /> (in Rs)
      </div>

      <div className="cont">
        <label>Amount to be invested in Housing :</label>
        <input
          className="mylabel"
          type="text"
          // disabled
          //    ref={housing}
          //   placeholder={housingname}
          //  onBlur={housingfun}
        />
        <label>(in Rs)</label>
        <Buttontick />
      </div>

      <div className="cont">
        <label>Amount to be invested in Comm :</label>
        <input
          className="mylabel"
          type="text"
          //    ref={housing}
          //      placeholder={housingname}
          //     onBlur={housingfun}
        />
        <label>(in Rs)</label>
      </div>
      <div className="cont">
        <hr className="linecss" style={{ width: "100%" }} />
      </div>
      <div className="cont">
        <h2>
          <label>Sector</label>
        </h2>
      </div>
      <div className="cont">
        <Dropdown className="dropmargin">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Auto
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <NavLink to="/Lc">
              <Dropdown.Item href="/Lc">LC</Dropdown.Item>
            </NavLink>
            <NavLink to="/Mc">
              <Dropdown.Item href="/Mc">Mc</Dropdown.Item>
            </NavLink>
            <NavLink to="/Sc">
              <Dropdown.Item href="/Sc">Sc</Dropdown.Item>
            </NavLink>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropmargin">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Banking
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#banklc">LC</Dropdown.Item>
            <Dropdown.Item href="#bankmc">MC</Dropdown.Item>
            <Dropdown.Item href="#banksc">SC</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropmargin">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Pharma
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#pharmalc">LC</Dropdown.Item>
            <Dropdown.Item href="#pharmamc">MC</Dropdown.Item>
            <Dropdown.Item href="#parmasc">SC</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropmargin">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            IT
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#itlc">LC</Dropdown.Item>
            <Dropdown.Item href="#itmc">MC</Dropdown.Item>
            <Dropdown.Item href="#itsc">SC</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropmargin">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Cap Goods
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#caplc">LC</Dropdown.Item>
            <Dropdown.Item href="#capmc">MC</Dropdown.Item>
            <Dropdown.Item href="#capsc">SC</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropmargin">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Oil
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#oillc">LC</Dropdown.Item>
            <Dropdown.Item href="#oilmc">MC</Dropdown.Item>
            <Dropdown.Item href="#oilsc">SC</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropmargin">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Metals
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#metallc">LC</Dropdown.Item>
            <Dropdown.Item href="#metalmc">MC</Dropdown.Item>
            <Dropdown.Item href="#metalsc">SC</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropmargin">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Auto Anc
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#autoanclc">LC</Dropdown.Item>
            <Dropdown.Item href="#autoancmc">MC</Dropdown.Item>
            <Dropdown.Item href="#autoancsc">SC</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropmargin">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Finance
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#financelc">LC</Dropdown.Item>
            <Dropdown.Item href="#financemc">MC</Dropdown.Item>
            <Dropdown.Item href="#financesc">SC</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropmargin">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Const
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#constlc">LC</Dropdown.Item>
            <Dropdown.Item href="#constmc">MC</Dropdown.Item>
            <Dropdown.Item href="#constsc">SC</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/* /////////////// */}
      <div className="cont">
        <hr className="linecss" style={{ width: "100%" }} />
      </div>
      <h2 id="autolc">Auto (LC)</h2>

      <div className="cont">
        <label>Tata :</label>
        <input className="mylabel" type="text" />
        <label>(in Rs)</label>
      </div>
      <div className="cont">
        <label>Mahindra :</label>
        <input className="mylabel" type="text" />
        <label>(in Rs)</label>
      </div>
      <div className="cont">
        <label>Tata :</label>
        <input className="mylabel" type="text" />
        <label>(in Rs)</label>
      </div>
      {/* /////////////// */}
      {/* /////////////// */}
      <div className="cont">
        <hr className="linecss" style={{ width: "100%" }} />
      </div>
      <h2 id="automc">Auto (MC)</h2>

      <div className="cont">
        <label>Tata :</label>
        <input className="mylabel" type="text" />
        <label>(in Rs)</label>
      </div>
      <div className="cont">
        <label>Mahindra :</label>
        <input className="mylabel" type="text" />
        <label>(in Rs)</label>
      </div>
      <div className="cont">
        <label>Tata :</label>
        <input className="mylabel" type="text" />
        <label>(in Rs)</label>
      </div>
      {/* /////////////// */}
      {/* /////////////// */}
      <div className="cont">
        <hr className="linecss" style={{ width: "100%" }} />
      </div>
      <h2 id="autosc">Auto (SC)</h2>

      <div className="cont">
        <label>Tata :</label>
        <input className="mylabel" type="text" />
        <label>(in Rs)</label>
      </div>
      <div className="cont">
        <label>Mahindra :</label>
        <input className="mylabel" type="text" />
        <label>(in Rs)</label>
      </div>
      <div className="cont">
        <label>Tata :</label>
        <input className="mylabel" type="text" />
        <label>(in Rs)</label>
      </div>
      {/* /////////////// */}

      <div className="cont">
        <table className=" table table-striped table-hover ">
          <tr className="table-dark">
            <th className="table-dark userdark ">Name</th>
            <th className="table-dark userdark">Amount</th>
            <th className="table-dark userdark ">Risk %</th>
            <th className="table-dark userdark">P1</th>
            <th className="table-dark userdark">P2</th>
            <th className="table-dark userdark">P3</th>
          </tr>
          <tr>
            <td>
              {" "}
              <input
                type=" text "
                // style=" width: 70% ; "
                className=" form-control"
                style={{ background: "white" }}
                name=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" number "
                // style=" width: 70% ; "
                className=" form-control  "
                style={{ background: "white" }}
                name=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" text "
                ///style=" width: 70% ; "
                className=" form-control "
                style={{ background: "white" }}
                name=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" text "
                // style=" width: 70% ; "
                className=" form-control"
                name=" "
                style={{ background: "white" }}
              />
            </td>
            <td>
              {" "}
              <input
                type=" text "
                // style=" width: 70% ; "
                className=" form-control  "
                style={{ background: "white" }}
                name=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" text "
                // style=" width: 70% ; "
                className=" form-control"
                style={{ background: "white" }}
                name=" "
              />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default Equity;
