import React from "react";
const End = () => {
    localStorage.removeItem("email");
    return(

            <div className="container" >
                <div className="row">
                    <div className="col-md-4"/>
                    <div className="col-md-4">
                        <header className="site-header" id="header" style={{marginTop:"35%"}}><strong>
                            <h1 className="site-header__title" data-lead-id="site-header-title" align="center" >THANK YOU!</h1></strong>
                        </header>
                        <div className="main-content">
                            <i className="fa fa-check" style={{color:"green",fontSize:"50px",marginLeft:"40%"}}/>
                        </div>

                        <a href="/"
                           style={{marginLeft:"27%"}}
                           className="btn btn-primary"
                        >
                            Go to Home
                        </a>
                    </div>
                </div>


            </div>

    )
};

export default End;