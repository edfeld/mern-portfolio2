import React from 'react'

// function Contact (props) {
    
//     return (
//     <div>
//         <div className="container main-container col-12 col-md-10 offset-md-1 clear-fix mt-3">
//         {/*<!-- row 1 -->*/}  
//         <div className="row">
//             <div className="col-md-12 col-12  m-2">
//                 <h1 className="border-bottom border-secondary mr-2" >Contact</h1>
//             </div>
//         </div>
//         {/*<!-- row 2 -->*/}
//         <div className="row px-4 pb-4">
//          <div ClassName="email-div">Send me an email at <a className="mail" href={`mailto:${props.email}`}>{props.email}</a>
//          <form>
//           <textarea
//             // ref={(textarea) => this.textArea = textarea}
//             value={props.email}
//           />
//         </form>
//          </div>
//             {/* <form>
//                 <div className="form-group">
//                     <label for="exampleInputName">Name</label>
//                     <input type="text" className="form-control form-input" id="exampleInputName" placeholder="John Smith"/>
//                 </div>
//                 <div className="form-group">
//                     <label for="exampleInputEmail1">Email address</label>
//                     <input type="email" className="form-control form-input" id="exampleInputEmail1" placeholder="Enter email"/>
//                 </div>
//                 <div className="form-group">
//                     <label for="exampleFormControlTextarea1">Message</label>
//                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                 </div>
//                 <button type="submit" className="submit-btn btn btn-primary">Submit</button>
//             </form> */}
//         </div> 
//     </div> {/*<!-- main-container --> */}
//   </div>
//     )
// }

// New Object version
class Contact extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            copySuccess: ''
        }
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' });
      };

      
    render() {
        return (
        <div>
            <div className="container main-container col-12 col-md-10 offset-md-1 clear-fix">
            {/*<!-- row 1 -->*/}  
            <div className="row">
                <div className="col-md-12 col-12  m-2">
                    <h1 className="border-bottom border-secondary mr-2" >Contact</h1>
                </div>
            </div>
            {/*<!-- row 2 -->*/}
            <div className="row px-4 pb-4">
            <div className="email-div">Send me an Email at <a className="mail" href={`mailto:${this.props.email}`}>{this.props.email}</a>
            <form className="email-form">
            <textarea className="email-text-area" 
                ref={(textarea) => this.textArea = textarea}
                value={this.props.email}
                />
            </form>
            {
            /* Logical shortcut for only displaying the 
                button if the copy command exists */
            document.queryCommandSupported('copy') &&
            <div>
                <button className="email-button" onClick={this.copyToClipboard}>Copy my Email</button> 
                <span style={{marginLeft: "10px"}}>{this.state.copySuccess}</span>
            </div>
            }
            </div>
                {/* <form>
                    <div className="form-group">
                        <label for="exampleInputName">Name</label>
                        <input type="text" className="form-control form-input" id="exampleInputName" placeholder="John Smith"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control form-input" id="exampleInputEmail1" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="submit-btn btn btn-primary">Submit</button>
                </form> */}
            </div> 
            </div> {/*<!-- main-container --> */}
        </div>
        )
    }
}

export default Contact