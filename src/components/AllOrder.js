const AllOrder = () => {
    return(<>
       <div className="height-100 bg-light">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="btnBox"><a href="" className="odrBtn">Order New Assignment</a></div>
      </div>
      <div className="col-md-8"> <h3>All Order</h3></div>
     
      
      
      <div className="col-md-12">
        <div className="card p-3 shadow mt-3 mb-4" > 
       
          
          <div className="tab-content p-3 border bg-light" id="nav-tabContent">
            <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Order ID & Status</th>
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
      </div>
      
    
      
      <div className="col-md-6">
        <div className="offerBox shadow">
          <h5>Tools</h5>
        </div>
      </div>
      <div className="col-md-6">
        <div className="offerBox shadow">
          <h5>Referencing</h5>
        </div>
      </div>
    </div>
  </div>
</div>
    </>)
}
export default AllOrder