const Content = () => {
 return(
    <>
      <div className="height-100 bg-light">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="btnBox"><a href="" className="odrBtn">Order New Assignment</a></div>
      </div>
      <div className="col-md-8">
        <h3>Dashboard</h3>
        <small>Welcome Back!</small></div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-xl-6">
            <div className="offerBox2 shadow">
              <div className="clientBox">
                <h5>Hello</h5>
                <h3>Jonathan</h3>
                <small>Copy your bio link and paste it in your profile to let people find you.</small> </div>
              <div className="clientBox2"> <img src="images/client.png"/> </div>
            </div>
           
              
                <div className="offerBox shadow">
                  <h5>Order Status</h5>
                  <div className="progressBox">
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "15%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>Recent orders
                    </p> 
                  </div>
                  <div className="progressBox">
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "32%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>Unpaid
                    </p> 
                  </div>
                  <div className="progressBox">
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "53%"}} aria-valuenow="63" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>Delivered Order
                    </p> 
                  </div>
                  <div className="progressBox">
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "91%"}} aria-valuenow="91" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>Reopen Order
                    </p> 
                  </div>

                  <div className="progressBox">
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "32%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>Ticket
                    </p> 
                  </div>
               
             
            </div>
          </div>
          <div className="col-xl-6">
            <div className="offerBox shadow ">
              <h5>Recent Order Status</h5>
              <div className="tab-content p-3 border bg-light" id="nav-tabContent">
                <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Order ID &amp; Status</th>
                          <th>Subject</th>
                          <th>Deadline</th>
                          <th>Time Zone</th>
                          <th>Price</th>
                          <th>Payment</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="">John</a></td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td>John</td>
                          <td>Doe</td>
                          <td><a href="">View</a></td>
                        </tr>
                        <tr>
                          <td><a href="">John</a></td>
                          <td>Moe</td>
                          <td>mary@example.com</td>
                          <td>John</td>
                          <td>John</td>
                          <td>Doe</td>
                          <td><a href="">View</a></td>
                        </tr>
                        <tr>
                          <td><a href="">John</a></td>
                          <td>Dooley</td>
                          <td>july@example.com</td>
                          <td>John</td>
                          <td>John</td>
                          <td>Doe</td>
                          <td><a href="">View</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="offerBox shadow mt-3">
                  <h5>Offer</h5>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="offerBox shadow mt-3">
                  <h5>Wallet</h5>
                  <div className="wlt">
                  <i className='bx bx-wallet'></i>
                  <span>550</span>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="offerBox shadow">
          <h5>Recent Chats</h5>
          <div className="tab-content  border bg-light" id="nav-tabContent">
            <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Subject</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="order-detail.php">527527</a></td>
                      <td>Lorem Ipsum is simply dummy text of the prindustry. </td>
                      <td><a href="order-detail.php">View</a></td>
                    </tr>
                    <tr>
                      <td><a href="order-detail.php">285852</a></td>
                      <td>Lorem Ipsum is simply dummy text of the prindustry. </td>
                      <td><a href="order-detail.php">View</a></td>
                    </tr>
                    <tr>
                      <td><a href="order-detail.php">285852</a></td>
                      <td>Lorem Ipsum is simply dummy text of the prindustry. </td>
                      <td><a href="order-detail.php">View</a></td>
                    </tr>
                    <tr>
                      <td><a href="order-detail.php">285852</a></td>
                      <td>Lorem Ipsum is simply dummy text of the prindustry. </td>
                      <td><a href="order-detail.php">View</a></td>
                    </tr>
                    <tr>
                      <td><a href="order-detail.php">285852</a></td>
                      <td>Lorem Ipsum is simply dummy text of the prindustry. </td>
                      <td><a href="order-detail.php">View</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
 )
}

export default Content