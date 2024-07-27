import React from "react";
import style from "../landingpage/landingPage.module.css";
import topimg from "../../assets/images/topimg.png";
import logo from "../../assets/images/logo.png";
import cli from "../../assets/images/cli.png";
import micro from "../../assets/images/micro.png";
import lab from "../../assets/images/lab.png";
import gov from "../../assets/images/gov.png";
import scho from "../../assets/images/sclor.png";

import { FaCalendarAlt } from "react-icons/fa";
import { LuClock5 } from "react-icons/lu";
import { TiLocationOutline } from "react-icons/ti";
import Countdown from "../../component/Countdown";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const gotoAbstract = () => {
    navigate("/abstractsubmission");
  };
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.page1}>
          <div className={style.navbar}>
            <div>
              <img src={topimg} alt="" />
            </div>
            <div>
              <div>
                <img src={logo} alt="" />
              </div>
              <div>Home</div>
              <div>speakers</div>
              <div>sponsors</div>
              <div>contact</div>
              <div>registration</div>
            </div>
          </div>
          <div className={style.dnadiv}>
            <div>
              <div>
                TB BHARAT SUMMIT: <br />
                ADVANCING CARE NATIONALLY
              </div>
              <div>
                <small>THEME:</small>
                FROM DIAGNOSIS TO DEFIANCE: <br />
                CONQUERING TB IN INDIA
              </div>
              <div>
                <div>
                  <div>
                    <div>
                      <FaCalendarAlt /> MARCH 19, 2024
                    </div>
                    <div>
                      <LuClock5 /> 10 AM- 5 PM
                    </div>
                  </div>
                </div>
                <div>
                  <TiLocationOutline /> VMCC - IIT Mumbai Campus
                </div>
              </div>
            </div>
          </div>

          <div className={style.registerbtndiv}>
            <div>
              <button>REGISTER NOW</button>
              <button onClick={gotoAbstract} style={{ cursor: "pointer" }}>
                ABSTRACT SUBMISSION
              </button>
            </div>
          </div>
          <div className={style.countdownDiv}>
            <Countdown />
          </div>

          <div className={style.bhartaSubmitDiv}>
            <p>
              <span>TB BHARAT SUMMIT: ADVANCING CARE NATIONALLY</span> <br />
              The TB Bharat Summit 2024 tackles the global TB challenge, with a
              particular focus on India, home to the highest number of TB cases.
              It addresses core challenges in TB diagnosis and treatment,
              stressing the government's commitment to conducting drug
              susceptibility tests upfront for precise antibiotic treatment.
              <br /> <br />
              The summit serves as a catalyst for collaborative endeavors, with
              a central focus on accurate diagnosis and scalable treatment
              options. Your valuable involvement is integral to shaping
              discussions on these critical aspects, contributing to the
              collective effort to combat TB effectively.
            </p>
          </div>

          {/* <div className={style.bgdiv}></div> */}
          <div className={style.whoCanAttendDiv}>
            <div>WHO CAN ATTEND</div>
            <div>
              <div>
                <img src={cli} alt="" />
                <div>Clinicians (Pulmonologists)</div>
              </div>
              <div>
                <img src={micro} alt="" />
                <div>Microbiologists</div>
              </div>
              <div>
                <img src={lab} alt="" />
                <div>Laboratories</div>
              </div>
            </div>
            <div>
              <div>
                <img src={gov} alt="" />
                <div>Government Officials and Policymakers</div>
              </div>
              <div>
                <img src={scho} alt="" />
                <div>Scholars and PHD Students</div>
              </div>
            </div>
            <div>
              <button>REGISTER NOW</button>
            </div>
          </div>
          <div className={style.itnerarydiv}>
            <div>
              <div>ITINERARY/SPEAKER SESSION OVERVIEW</div>
              <div className={style.itineraryCard}>
                <span>SPEAKER SESSION</span>

                <div>
                  <div>
                    <h3>Timing</h3>
                    <div>
                      <div>11:00 AM - 11:20 AM</div>
                      <div>11:30 AM - 11:50 AM</div>
                      <div>12:00 PM - 12:20 PM</div>
                      <div>12:30 PM - 1250 PM</div>
                    </div>
                  </div>
                  <div>
                    <h3>Speaker Name</h3>
                    <div>
                      <div>Dr. Rajesh Gokhale</div>
                      <div>Dr. Camila Rodrigues</div>
                      <div>Dr. Zarir Udwadia</div>
                      <div>Dr. Ameeta Joshi</div>
                    </div>
                  </div>
                  <div>
                    <h3>Topic</h3>
                    <div>
                      <div>Drug Resistance TB : Global & National Scenario</div>
                      <div>New Horizon in TB Diagnostics</div>
                      <div>Case Based Scenarios in DRTB</div>
                      <div>
                        Competency Based Medical Education A Catalyst to End TB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.itineraryCard}>
                <span>LUNCH BREAK</span>

                <div>
                  <div>
                    <h3>Timing</h3>
                    <div>
                      <div>2:00 PM - 2:20 PM</div>
                      <div>2:30 PM - 250 PM</div>
                      <div>3:00 PM - 3:20 PM</div>
                      <div>3:30 PM - 3:50 PM</div>
                      <div>4:00 PM - 4:20 PM</div>
                    </div>
                  </div>
                  <div>
                    <h3>Speaker Name</h3>
                    <div>
                      <div>Dr. Agam Vora</div>
                      <div>Dr. Chandrasekhar Nair</div>
                      <div>Dr. Asheesh Jain</div>
                      <div>Dr. Nagasuma Chandra</div>
                      <div>Dr. Shibu Vijayan</div>
                    </div>
                  </div>
                  <div>
                    <h3>Topic</h3>
                    <div>
                      <div>Extra Shots in Extra Pulmonary TB</div>
                      <div>
                        Lab on Chip : <br />
                        Master in Chip Based Assays
                      </div>
                      <div>
                        Potential of Blood Based Biomarkers for Detection of
                        Tuberculosis
                      </div>
                      <div>
                        Role of Modernized Tech Enabled Diagnostic Help in TB
                        Eradication
                      </div>
                      <div>Al Game Changer in TB Diagnostics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.speakerDiv}>
            <div>
              <h2>Speakers</h2>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid sint recusandae eligendi nihil amet pariatur quibusdam
                reiciendis expedita voluptatum explicabo nemo qui eum in
                perferendis, maxime atque! Perspiciatis, iure rerum! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Reiciendis culpa
                veniam voluptatum pariatur dicta? Reiciendis, tempore quae
                necessitatibus aspernatur et ipsam corrupti a ab fuga. Labore
                nisi laudantium consequuntur rem?
              </div>
              <div>
                <button>REGISTER NOW</button>
              </div>
            </div>
          </div>
          <div className={style.sponsorsDiv}>
            <div>
              <h2>Sponsors</h2>
              <div>
                <div>Gold Sponsors</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore saepe veritatis corrupti tenetur quasi beatae nemo eum
                  pariatur itaque facere, aliquid odio reiciendis neque nisi?
                  Cum sint vitae nisi quas! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Suscipit praesentium repellendus
                  doloremque quibusdam dignissimos libero illum! Fugiat dolorum
                  nemo officia, reprehenderit recusandae quam provident
                  cupiditate tempore voluptatum velit deserunt cum.
                </p>
              </div>
              <div>
                <div>Gold Sponsors</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore saepe veritatis corrupti tenetur quasi beatae nemo eum
                  pariatur itaque facere, aliquid odio reiciendis neque nisi?
                  Cum sint vitae nisi quas! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Suscipit praesentium repellendus
                  doloremque quibusdam dignissimos libero illum! Fugiat dolorum
                  nemo officia, reprehenderit recusandae quam provident
                  cupiditate tempore voluptatum velit deserunt cum.
                </p>
              </div>
              <div>
                <div>Gold Sponsors</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore saepe veritatis corrupti tenetur quasi beatae nemo eum
                  pariatur itaque facere, aliquid odio reiciendis neque nisi?
                  Cum sint vitae nisi quas! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Suscipit praesentium repellendus
                  doloremque quibusdam dignissimos libero illum! Fugiat dolorum
                  nemo officia, reprehenderit recusandae quam provident
                  cupiditate tempore voluptatum velit deserunt cum.
                </p>
              </div>
              <div>
                <button>SPONSOR NOW</button>
              </div>
            </div>
          </div>
          <div className={style.footerBar}></div>
          <div className={style.contactusdiv}>
            <div>
              <div>
                <h2>CONTACT US</h2>
                <br />
                xxxxxxxxx
                <br /> xxxxxxxxxxxxxxxxxxxx
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
