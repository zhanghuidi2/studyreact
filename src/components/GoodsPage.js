import React, { useEffect } from 'react';
export default function GoodsPage(props) {
  useEffect(() => {
    console.log('didmount');
    return () => {
      console.log('didwillUnmount');
    }
  }, [])
  return (
    <div>GoodsPage</div>
  )
}