import React from 'react'
import './LegalTerms.css'
const LegalTerms = () => {
  return (
    <div className = "legalTerms">
        <div className="privacy">
            <h1 className = "privacyH1">Privacy Policy</h1>
            <p className = "privacyDesc">
                <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Build Nepal. This policy is not applicable to any information collected offline or via channels other than this website.</p>
            </p>
        </div>
        <div className="terms">
            <h1 className=' = "termsH1'>Terms of Use</h1>
            <p className = "termsDesc" style = {{marginBottom : "15px"}}>
            <p>The Build Nepal website is a copyrighted work belonging to Build Nepal. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.</p>
              <p><strong>Copyright/Trademark Information.</strong> Copyright ©. All rights reserved.  All trademarks, logos and service marks displayed on the Site are our property or the property of other third-parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.</p>
            </p>

            {/* <p className = "termsAgreement">
              <input type="checkbox" style = {{marginRight : "10px"}}/>
              I agree to the terms of agreement.
            </p> */}

        </div>
        
    </div>
  )
}

export default LegalTerms