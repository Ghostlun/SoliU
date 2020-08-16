import React from 'react';
import { Link } from 'react-router-dom';
import '../../asset/css/style.css';
import Mental_info from './Mental_issue_info'

const Mental_App_Info = () => {
  return (
    // <div className='background_For_phone'>
    //   <div
    //     style={{
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       display: 'flex'
    //     }}
    //   >
    //     <table>
    //       <thead>
    //         <th>Learn about Mental Illness</th>
    //       </thead>
    //       <tbody className='table_style'>
    //         <tr>
    //           <button
    //             className='Mental_App_button'
    //             style={{
    //               width: 500
    //             }}
    //           >
    //             <Link to='/learn/mental_app/information/adhd'>
    //               <text style={{ color: 'white' }}>ADHD</text>
    //             </Link>
    //           </button>
    //         </tr>
    //         <tr>
    //           <button
    //             className='Mental_App_button'
    //             style={{
    //               width: 500
    //             }}
    //           >
    //             <Link to='/learn/mental_app/information/dementia'>
    //               <text style={{ color: 'white' }}>DEMENTIA</text>
    //             </Link>
    //           </button>
    //         </tr>
    //         <tr>
    //           <button
    //             className='Mental_App_button'
    //             style={{
    //               width: 500
    //             }}
    //           >
    //             <Link to='/learn/mental_app/information/dependence'>
    //               <text style={{ color: 'white' }}>DEPENDENCE</text>
    //             </Link>
    //           </button>
    //         </tr>
    //         <tr>
    //           <button
    //             className='Mental_App_button'
    //             style={{
    //               width: 500
    //             }}
    //           >
    //             <Link to='/learn/mental_app/information/depression'>
    //               <text style={{ color: 'white' }}>DEPRESSION</text>
    //             </Link>
    //           </button>
    //         </tr>
    //         <tr>
    //           <button
    //             className='Mental_App_button'
    //             style={{
    //               width: 500
    //             }}
    //           >
    //             <Link to='/learn/mental_app/information/dysthymia'>
    //               <text style={{ color: 'white' }}>DYSTHYMIA</text>
    //             </Link>
    //           </button>
    //         </tr>
    //         <tr>
    //           <button
    //             className='Mental_App_button'
    //             style={{
    //               width: 500
    //             }}
    //           >
    //             <Link to='/learn/mental_app/information/panic'>
    //               <text style={{ color: 'white' }}>PANIC</text>
    //             </Link>
    //           </button>
    //         </tr>
    //         <tr>
    //           <button
    //             className='Mental_App_button'
    //             style={{
    //               width: 500
    //             }}
    //           >
    //             <Link to='/learn/mental_app/information/phobia'>
    //               <text style={{ color: 'white' }}>PHOBIA</text>
    //             </Link>
    //           </button>
    //         </tr>
    //         <tr>
    //           <button
    //             className='Mental_App_button'
    //             style={{
    //               width: 500
    //             }}
    //           >
    //             <Link to='/learn/mental_app/information/stress'>
    //               <text style={{ color: 'white' }}>STRESS</text>
    //             </Link>
    //           </button>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>


    <Mental_info/>
  );
};

export default Mental_App_Info;
