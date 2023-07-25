import React from 'react'
import { useTranslation } from "react-i18next";
import Afi from './Afi';
import Afi_eng from './Afi_eng';
function Afi_index() {
    const {i18n} = useTranslation();
    const lang = i18n.language
  return (
    <div>
        {lang == 'vi' ? <Afi/> : <Afi_eng/>}
    </div>
  )
}

export default Afi_index