import Skills1 from './Skills1';
import Skills2 from './Skills2';
import React, { useState } from 'react';
import '../css/skills.css';

const Skills = () => {
    const [isListView, setIsListView] = useState(true);
    const toggleView = () => {
        setIsListView(!isListView);
      };
      
      const ListIcon = () => {
        return (
          <>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </>
        )
      }
      const CardIcon = () => {
        return (
          <>
            <table className='table'>
                <thead></thead>
                <tbody>
                <tr>
                    <th className='box'></th>
                    <th className='box'></th>
                </tr>
                <tr>
                    <td className='box'></td>
                    <td className='box'></td>
                </tr>
                </tbody>
            </table>
          </>
        )
      }
  return (
    <div className='skill-page'>
    <div className='skills-container'>
        <div onClick={toggleView} className='toggle-view'>
            {isListView?  <CardIcon/>: <ListIcon/>}
        </div>
    </div>
    {isListView?  <Skills2/> : <Skills1/>}
    </div>
  )
}

export default Skills