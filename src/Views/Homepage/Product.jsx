import React from 'react'

function Product() {
  return (
    <div className='Product'>
    <div className='image'>
        <img id='img' src="https://mrmnutrition.com/cdn/shop/files/13010_Calcium_D3_Gummy__2302V1_FRONT_7514fc43-19ce-4012-8b13-5d74e05869d8.png?v=1683708878&width=533" alt="" />
    </div>
    <div className='info'>
        <span>Categorie</span>
        <div className='title'>Whole Wheat Pasta</div>
        <div className='reviews'>
            <div className='review'>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
        </div>
        <span>(20) reviews</span>
        </div>
        <div className='price'>1200.00 dh</div>
        <div className='placeorder mobilevisible'>
            <button id='btn'><i class='bx bx-shopping-bag'></i> Add to cart</button>
        </div>
    </div>
    <div className='Side'>
        <div className='cara'><i class='bx bx-shopping-bag'></i></div>
        <div className='cara'><i class='bx bx-chevron-right'></i></div>
    </div>
</div>
  )
}

export default Product