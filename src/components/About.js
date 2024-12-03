import React from 'react'

export default function About(props) {
  // const [myStyle, setmyStyle] = useState(
  //   {
  //     color: 'black',
  //     backgroundColor: 'white'
  //   })
  //   const [btnText, setbtnText] = useState("Enable Dark Mode")

  //   const ToggleStyle=()=>{
  //     if(myStyle.color === 'black'){
  //       setmyStyle({
  //         color: 'white',
  //         backgroundColor: 'black'
  //       })
  //       setbtnText("Enable Light Mode")
  //     }
  //     else{
  //       setmyStyle({
  //         color: 'black',
  //         backgroundColor: 'white'
  //       })
  //       setbtnText("Enable Dark Mode")
  //     }
  //   }


  return (
  
    <>
     <div className="container" style={{
         backgroundColor: props.mode === 'dark' ? '#333' : 'white',
         color: props.mode === 'dark' ? 'white' : 'black',
       }}>
       <h2 className='my-3'>About Us</h2>
       <div className="accordion" id="accordionExample">
         <div className="accordion-item">
           <h2 className="accordion-header">
             <button className="accordion-button" type="button" style={{
                 backgroundColor: props.mode === 'dark' ? '#333' : 'white',
                 color: props.mode === 'dark' ? 'white' : 'black',
                }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h5>Features Highlight</h5>
              </button>
           </h2>
           <div id="collapseOne" className="accordion-collapse collapse show" style={{
               backgroundColor: props.mode === 'dark' ? '#333' : 'white',
               color: props.mode === 'dark' ? 'white' : 'black',
              }} data-bs-parent="#accordionExample">
             <div className="accordion-body">
             <strong>TextUtils is an advanced text processing tool that offers the following features:</strong>
             <br />
              Convert text to Uppercase and Lowercase.
              <br />
              Apply Sentence Case and Capitalized Case.
              <br />
              Clear, copy, and download text with ease.
              <br />
              Utilize Speech to Text and Text to Speech functionalities.
              <br />
              Calculate word frequency and remove special characters.
              <br />
              Encrypt and decrypt text effortlessly.
              <br />
              This app is designed to enhance user productivity and simplify text management tasks.!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" style={{
                 backgroundColor: props.mode === 'dark' ? '#333' : 'white',
                 color: props.mode === 'dark' ? 'white' : 'black',
                }} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h5>General Information About the App</h5> 
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={{
               backgroundColor: props.mode === 'dark' ? '#333' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black',
              }} data-bs-parent="#accordionExample">
              <div className="accordion-body">
              TextUtils is a user-friendly web app that simplifies text editing. It offers powerful features such as text transformation, speech conversion, and word frequency analysis to meet diverse user needs.
             </div>
            </div>
         </div>
         <div className="accordion-item">
           <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" style={{
                 backgroundColor: props.mode === 'dark' ? '#333' : 'white',
                 color: props.mode === 'dark' ? 'white' : 'black',
               }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <h5>Focus on User Benefits</h5>
             </button>
           </h2>
           <div id="collapseThree" className="accordion-collapse collapse" style={{
                backgroundColor: props.mode === 'dark' ? '#333' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black',
              }} data-bs-parent="#accordionExample">
              <div className="accordion-body">
              The goal of this app is to save your time and simplify text editing. Whether you are a professional or a student, TextUtils is tailored to cater to your needs effectively and efficiently.
              </div>
            </div>
          </div>





          <div className="accordion-item">
           <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" style={{
                 backgroundColor: props.mode === 'dark' ? '#333' : 'white',
                 color: props.mode === 'dark' ? 'white' : 'black',
               }} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
               <h5>Vision and Mission</h5>
             </button>
           </h2>
           <div id="collapseFour" className="accordion-collapse collapse" style={{
                backgroundColor: props.mode === 'dark' ? '#333' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black',
              }} data-bs-parent="#accordionExample">
              <div className="accordion-body">
              The vision of TextUtils is to deliver a seamless and efficient text editing experience. Its mission is to be an accessible tool for everyone, helping users fulfill their daily text editing requirements effortlessly.
              </div>
            </div>
          </div>




          <div className="accordion-item">
           <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" style={{
                 backgroundColor: props.mode === 'dark' ? '#333' : 'white',
                 color: props.mode === 'dark' ? 'white' : 'black',
               }} data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
               <h5>About the Developer</h5>
             </button>
           </h2>
           <div id="collapseFive" className="accordion-collapse collapse" style={{
                backgroundColor: props.mode === 'dark' ? '#333' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black',
              }} data-bs-parent="#accordionExample">
              <div className="accordion-body">
              TextUtils app is developed by <strong>Ashok Kumar</strong>, a frontend developer who is passionate about enhancing coding skills and creating user-friendly applications. The app is designed to simplify text editing tasks and make them more efficient for users.
              <br />

            This app is built using <strong>React</strong>, <strong>JavaScript</strong>, and <strong>Bootstrap</strong>. Through this project, I aimed to explore modern web development practices and learn new skills.
           <br />
            I am always inspired to learn new things and build meaningful projects. If you have any suggestions or questions regarding this app, feel free to reach out to me!
            For more information, visit our{' '}
            <a href="https://linkedin.com/in/ashok-kumar-003857292" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>.

              </div>
            </div>
          </div>





        </div>
           {/* <div className="countainer my-3">
           <button type="button" onClick={ToggleStyle} className="btn btn-primary">{btnText}</button>
         </div> */}

      </div>
    
    </>
  )
}
