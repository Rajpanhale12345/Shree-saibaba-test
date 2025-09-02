import React from 'react'
import Test from './Test'
import Upper from './Upper'
import './Testimonials.css'
import { Link } from 'react-router-dom'

const Testimonials = () => {
  return (
    <div>
      <Upper text="Testimonials"/>
      <Test/>
      <div className='read'>
        <Link to="https://www.google.com/search?sca_esv=5aa2383a930ae4e1&sxsrf=AE3TifOVgIAIvNodryDrLlSILbfKtxUgoA:1756805569402&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-ExUGjoFADeUu_2x0MRykjMeRw97h715nktsksunwxW3eqjNABg_C9Dl3M-jkc69i5VzXe2gxG1pmhM0K8ZvlU1CCec48n6o8fUGmkxzf4golVVagdg9gpBfe0ca_111kAgyBD2K1YGeOjY0hCXnzZr71EFTh&q=Shree+Saibaba+Heart+Institute+And+Research+Centre+Reviews&sa=X&ved=2ahUKEwiLtpzf4rmPAxVFxTgGHX-SDw0Q0bkNegQIJRAE&biw=1280&bih=585&dpr=1.5">Click here to read more inspiring stories...</Link>
      </div><br /><br />
    </div>
    
  )
}

export default Testimonials
