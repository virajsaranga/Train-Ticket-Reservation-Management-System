// import React, { useReducer, useState, useEffect } from "react";
// import "./Reset.css";
// import axios from "axios";

// const Reset = () => {
//   const id = "60f0c0b0c8b4c30015b9b0d0";
//   const [Registers, addPost] = useState({
//     Name: "",
//     Email: "",
//     Password: "",
//     Num: "",
//   });
//   const { Name, Email, Password, Num } = Registers;

//   return (
//     <div className="nice">
//       <link
//         rel="stylesheet"
//         href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
//       />
//       <link
//         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
//         rel="stylesheet"
//       />
//       <div class="form-gap"></div>
//       <div class="container">
//         <div class="row">
//           <div class="col-md-4 col-md-offset-4">
//             <div class="panel panel-default">
//               <div class="panel-body">
//                 <div class="text-center">
//                   <h3>
//                     <i class="fa fa-lock fa-4x"></i>
//                   </h3>
//                   <h2 class="text-center">Forgot Password?</h2>
//                   <p>Backoffice and Travel Agent Forget Password Pannel</p>
//                   <div class="panel-body">
//                     <form
//                       id="register-form"
//                       role="form"
//                       autocomplete="off"
//                       class="form"
//                       method="post"
//                     >
//                       <div class="form-group">
//                         <div class="input-group">
//                           <span class="input-group-addon">
//                             <i class="glyphicon glyphicon-envelope color-blue"></i>
//                           </span>
//                           <input
//                             id="email"
//                             name="email"
//                             placeholder="email address"
//                             class="form-control"
//                             type="email"
//                           />
//                         </div>
//                       </div>
//                       <div class="form-group">
//                         <input
//                           name="recover-submit"
//                           class="btn btn-lg btn-primary btn-block"
//                           value="Reset Password"
//                           type="submit"
//                         />
//                       </div>

//                       <input
//                         type="hidden"
//                         class="hide"
//                         name="token"
//                         id="token"
//                         value=""
//                       />
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reset;



import React from "react";
import "./Reset.css";
import axios from "axios";

const Reset = () => {
  // Sample ID (you may replace it with dynamic data)
  const id = "60f0c0b0c8b4c30015b9b0d0";

  return (
    <div className="nice">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div class="form-gap"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3>
                    <i class="fa fa-lock fa-4x"></i>
                  </h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>Backoffice and Travel Agent Forget Password Panel</p>
                  <div class="panel-body">
                    <form
                      id="register-form"
                      role="form"
                      autoComplete="off"
                      class="form"
                      method="post"
                    >
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="glyphicon glyphicon-envelope color-blue"></i>
                          </span>
                          <input
                            id="email"
                            name="email"
                            placeholder="email address"
                            class="form-control"
                            type="email"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <input
                          name="recover-submit"
                          class="btn btn-lg btn-primary btn-block"
                          value="Reset Password"
                          type="submit"
                        />
                      </div>

                      <input
                        type="hidden"
                        class="hide"
                        name="token"
                        id="token"
                        value=""
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
