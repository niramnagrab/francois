import React, { useState, useEffect, Link } from 'react'
import './Payments.css'
import HeroImage from '../../images/hero-teacher-computer.png'
import WhiteBackground from '../../images/white-vector-hero.png'
import { StickyContainer, Sticky } from 'react-sticky'
import QRCode from '../../images/qr-code.jpg'
import { useTranslation } from 'react-i18next'
import paymentData from './PaymentData.js'
import voucherCode from './voucherCode.js'
import img3 from '../../images/Preliminary.png'

const Payments = () => {
  const { t } = useTranslation()
  const [hover, setHover] = useState(false)
  const [click, setClick] = useState({})
  const [products, setProducts] = useState([])
  const [coupon, setCoupon] = useState()
  const [discount, setDiscount] = useState(0)
  const [couponApplied, setCouponApplied] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  const buyProduct = (id) => {
    if (products.includes(id)) {
      products.splice(products.indexOf(id), 1)
      setProducts([...products])
    } else {
      setProducts([...products, id])
    }
  }

  const onChangeValueHandler = (event) => {
    setCoupon(event.target.value)
  }

  const showMessage = (e) => {
    e.preventDefault()
    document.getElementById('Bene').value = ''
    document.getElementById('Email').value = ''
    document.getElementById('WeChatId').value = ''
    document.getElementById('showMessage').innerHTML = t(
      'free_trail_request_success',
    )
  }

  let quantity = 0
  let price = 0
  let total = 0
  let discountValue = 0
  products.forEach((product) => {
    paymentData.forEach((item) => {
      if (item.id == product) {
        price += Number(item.price)
        quantity += 1
        total += Number(item.price)
      }
    })
    if (couponApplied) {
      discountValue = total * (discount / 100)
    }
  })

  const applyCoupon = (e) => {
    voucherCode.forEach((voucher) => {
      if (voucher.code == coupon.toLowerCase()) {
        setDiscount(voucher.value)
        setCouponApplied(true)
      }
    })
  }

  const removeCoupon = (e) => {
    setDiscount(0)
    setCouponApplied(false)
  }

  let disabled = true
  if (total > 0) {
    disabled = false
  }

  return (
    <>
      <div className="choose_course">
        <h1>Choose one of the below course as per your needs</h1>
      </div>

      <div className="table-area">
        <div className="table-sec">
          <table className="customers">
            <tr>
              <th>Course Details</th>
              <th className="tableHead">quantity</th>
              <th className="tableHead">price</th>
              <th className="tableHead">total</th>
              <th></th>
            </tr>
            {paymentData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="img-sec" width="80%">
                    <img
                      className="course-img"
                      src={item.img}
                      alt="Course Detail"
                    />
                    {t(item.desc)}
                  </td>
                  <td>{item.quantity}</td>
                  <td>RMB{item.price}</td>
                  <td>RMB{item.total} </td>
                  <td>
                    <button
                      onClick={() => buyProduct(item.id)}
                      className="buy-btn"
                      aria-label="Buy Button"
                    >
                      {products.includes(item.id) ? 'Remove' : 'Buy'}
                    </button>
                  </td>
                </tr>
              )
            })}
          </table>
          <div className="voucher">
            <div className="voucher-text">
              <p>Got a voucher ? Add it here</p>
            </div>
            <div className="voucher-input">
              <input
                type="text"
                name="coupon"
                id="coupon"
                onChange={onChangeValueHandler}
                value={coupon}
              />
              <input
                type="button"
                className="buy-btn"
                value="Apply"
                onClick={(e) => applyCoupon(e)}
              />
              {discountValue > 0 && (
                <p>
                  {discount}% applied{' '}
                  <span
                    className="text-danger"
                    onClick={(e) => removeCoupon(e)}
                  >
                    {' '}
                    Clear{' '}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="course-des">
          <div className="course-head">
            <h4>Course Purchase Summary</h4>
          </div>
          <div className="couse-thumb">
            <img src={img3} className="thumb-img" alt="Course Summary" />
          </div>
          <div className="course-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur.
            </p>
          </div>
          <div className="course-cost">
            <p>Quantity : {quantity}</p>
            <p>Price : RMB {price}</p>
            <p>{discountValue > 0 && `Discount : RMB ${discountValue}`}</p>

            <p>Total : RMB {total - discountValue}</p>
          </div>
          <div className="course-btn">
            <form
              action="https://pma.giopio.com/checkout/index.php"
              method="POST"
            >
              <input type="hidden" name="price" value={price} />
              <input type="hidden" name="quantity" value={quantity} />
              <input type="hidden" name="price" value={total - discountValue} />
              <button
                type="submit"
                disabled={disabled}
                className="button buy-btn"
                aria-label="Submit Form"
              >
                {t('pay_now')} (RMB {total - discountValue})
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payments
