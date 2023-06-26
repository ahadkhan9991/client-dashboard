import React, { useState } from 'react';

const MyOrder = () => {
  const [activeTab, setActiveTab] = useState('nav-home');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="height-100 bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="btnBox">
                <a href="" className="odrBtn">
                  Order New Assignment
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <h3>My orders</h3>
            </div>

            <div className="col-md-12">
              <div className="card p-3 shadow mt-3 mb-4">
                <nav>
                  <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                    <button
                      className={`nav-link ${activeTab === 'nav-home' ? 'active' : ''}`}
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected={activeTab === 'nav-home'}
                      onClick={() => handleTabClick('nav-home')}
                    >
                      Recent orders
                    </button>
                    <button
                      className={`nav-link ${activeTab === 'nav-profile' ? 'active' : ''}`}
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected={activeTab === 'nav-profile'}
                      onClick={() => handleTabClick('nav-profile')}
                    >
                      Unpaid
                    </button>
                    <button
                      className={`nav-link ${activeTab === 'nav-contact' ? 'active' : ''}`}
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected={activeTab === 'nav-contact'}
                      onClick={() => handleTabClick('nav-contact')}
                    >
                      Delivered Order
                    </button>
                    <button
                      className={`nav-link ${activeTab === 'nav-contact2' ? 'active' : ''}`}
                      id="nav-contact-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact2"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact2"
                      aria-selected={activeTab === 'nav-contact2'}
                      onClick={() => handleTabClick('nav-contact2')}
                    >
                      Reopen Order
                    </button>
                  </div>
                </nav>
                <div className="tab-content p-3 border bg-light" id="nav-tabContent">
                  <div
                    className={`tab-pane fade ${activeTab === 'nav-home' ? 'active show' : ''}`}
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    {/* Recent orders table */}
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 'nav-profile' ? 'active show' : ''}`}
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    {/* Unpaid orders table */}
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 'nav-contact' ? 'active show' : ''}`}
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    {/* Delivered orders table */}
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 'nav-contact2' ? 'active show' : ''}`}
                    id="nav-contact2"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab2"
                  >
                    {/* Reopen orders table */}
                  </div>
                </div>
              </div>
            </div>

            <section className="trigger section gutter-horizontal bg-gray gutter-vertical--m gutter-horizontal">
              <div className="customer-logos slider btnHolder p-3 shadow mt-3 mb-4">
                {/* Slider content */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
