import React from 'react'

function Contact () {
    return (
    <div>
        <div class="container main-container col-12 col-md-10 offset-md-1 clear-fix mt-3">
        {/*<!-- row 1 -->*/}  
        <div class="row">
                <div class="col-md-12 col-12  m-2">
                    <h1 class="border-bottom border-secondary mr-2" >Contact</h1>
                </div>
        </div>
        {/*<!-- row 2 -->*/}
        <div class="row px-4 pb-4">
            <form>
                <div class="form-group">
                    <label for="exampleInputName">Name</label>
                    <input type="text" class="form-control form-input" id="exampleInputName" placeholder="John Smith"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control form-input" id="exampleInputEmail1" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="submit-btn btn btn-primary">Submit</button>
            </form>
        </div> 
    </div> {/*<!-- main-container --> */}
  </div>
    )
}

export default Contact