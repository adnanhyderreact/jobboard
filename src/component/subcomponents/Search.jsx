export default function Search() {
    return (
        <>
            <div className="find-section pb-100">
                <div className="container">
                    <form className="find-form">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           placeholder="Job Title or Keyword"/>
                                    <i className="bx bx-search-alt"></i>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputEmail2"
                                           placeholder="Location"/>
                                    <i className="bx bx-location-plus"></i>
                                </div>
                            </div>
                            {/*@todo match style of Category*/}
                            <div className="col-lg-3">
                                <select className="category nice-select ">
                                    <option data-display="Category">Category</option>
                                    <option value="1">Web Development</option>
                                    <option value="2">Graphics Design</option>
                                    <option value="4">Data Entry</option>
                                    <option value="5">Visual Editor</option>
                                    <option value="6">Office Assistant</option>
                                </select>
                            </div>

                            <div className="col-lg-3">
                                <button type="submit" className="find-btn">
                                    Find A Job
                                    <i className='bx bx-search'></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}