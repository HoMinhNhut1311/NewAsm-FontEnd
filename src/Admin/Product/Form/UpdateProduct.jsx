function UpdateProduct({categories, refresh,  }) {
    return (
        <>
            <div className="row">
                <div className="col7">
                    <img src="" alt="" />
                </div>
                <div className="col-5">
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                            <input type="text" className="form-control" id="name"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price" className="form-label">Giá</label>
                            <input type="number" className="form-control" id="price"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="des" className="form-label">Mô tả</label>
                            <input type="text" className="form-control" id="des"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="" className="form-label">Thể loại</label>
                            <select value={product.categoryId} onChange={handleChange} className="form-control my-2">
                                {categories.map((category) => {
                                    return (
                                        <option value={category.categoryId}>{category.categoryName}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateProduct;