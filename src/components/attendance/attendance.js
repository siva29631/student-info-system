import React from "react";
import acss from "./style_atten.module.css"

function Attendance() {
    return (
        <div className="Attendance">
            <div className={acss.heading}>
                <center>Attendance Register</center>
            </div>
            <div className={acss.form_class}>
                <form name="atten-User">
                    <table /*className={acss.attentable}*/ center>
                        
                            <tr >
                                <th>Date</th>
                                <th>Subject</th>
                                <th>Period</th>
                                <th>Year</th>
                                <th>No. of absentees</th>
                            </tr>
                        
                        
                            <tr>
                                <td><input className={acss.inputBox} type="date" name="date" hint="dd-mm-yy" /></td>
                                <td><input className={acss.inputBox} type="text" name="subject" placeholder="Subject name"/></td>
                                <td><input className={acss.inputBox} type="number" name="period" placeholder="Class No." min="1" max="7"/></td>
                                <td><input className={acss.inputBox} type="number" name="year" placeholder="Study Year" min="1" max="4"/></td>
                                <td><input className={acss.inputBox} type="number" name="absentees" min="0" max="60"/> </td>
                            </tr>
                        
                    </table><br /><br />
                        <center><input className={acss.inputBox} type="submit"/></center>
                    </form>
                    </div>
                    <div className={acss.header}>
                        <div className={acss.innerheader}>             </div>
                        <div>
                            <svg className={acss.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" 
                    shapeRendering="auto" preserveAspectRatio="none"
                             >
                                <defs>
                                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                                </defs>
                                <g className={acss.parallax}>
                                    <use xlinHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                                </g>
                            </svg>
                        </div>
                    </div>
            </div>
            );
}

export default Attendance;