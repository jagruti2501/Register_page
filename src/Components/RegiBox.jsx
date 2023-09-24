import React from 'react';


function App() {
    
  return (
    <div className="container">
      <div className="column">
        {/* Content for the first half */}
        <img src ="https://img.freepik.com/free-vector/modern-online-registration-compositio_23-2147993862.jpg?size=626&ext=jpg&ga=GA1.2.1855786848.1675266267&semt=ais"></img>
      </div>
      <div className="column">
        <div className='lockimg'>
        
        <i className="fa fa-lock fa-3x blue-lock"></i>
        <h1>Create an account</h1>
        <p>Let's get started for 30 days free trial</p>
         
          {/* Registration Form */}
          <form className="vertical-form">
            <div className="form-group">
              <input type="text" placeholder="First Name" />
            </div> 
            <div className="form-group">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Business Name" />
            </div>
            <div className="form-group">
              <select>
                <option value="">Choose Business Type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
            <div className="form-group">
               
              <input type="file"  accept="image/*" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <button type="submit">Sign Up</button>
            </div>
            {/* Sign Up with Google */}
            <div className="google-signup">
              
            <a href="#" className="google-link">
           <i class="fa fa-google"></i>  Sign Up with Google</a>
        
         </div>
          <div className='loginpage'>
            <p>Already have an acoount?<a href='#'>LogIn</a></p>
            
          </div>
          </form>
       
        </div>
      </div>
    </div>
  );
}

export default App;
