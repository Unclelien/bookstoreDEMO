import React, { useEffect, useState } from 'react'
import Coupon from './Coupon'
import d from './Coupon_display.module.css'

export default function Coupon_display() {
  const [info, setInfo] = useState({})
  const [datas, setDatas] = useState({})

  useEffect(() => {
    const data = localStorage.getItem('auth')
    setInfo(JSON.parse(data))
  }, [])

  console.log(info)
  const { member_id } = info
  console.log(member_id)

  useEffect(() => {
    const couponData = () => {
      const data = localStorage.getItem('auth')
      const member_id = JSON.parse(data).member_id
      console.log(member_id)
      fetch(`${process.env.API_SERVER}/market/coupon?member_id=${member_id}`)
        .then((res) => res.json())
        .then((datas) => {
          setDatas(datas)
          console.log('後端回傳結果:', datas)
        })
    }
    couponData()
  }, [])

  console.log(datas)
  const dataNot = datas[0]
  const dataAva = datas[1]
  console.log(dataNot)
  console.log(dataAva)

  return (
    <>
      <div className={d.coat}>
        <div className={`${d.box} container`}>
          <div className={`${d.r} row`}>
            <Coupon />
          </div>
        </div>
      </div>
    </>
  )
}
