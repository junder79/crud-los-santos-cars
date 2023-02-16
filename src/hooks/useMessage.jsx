import React,{ useState } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const useMessage = () => {
 

    const MenssagePeticion = (mensaje, icon)=>{
        Swal.fire({
            title: mensaje,
            text: 'Presiona Ok para continuar',
            icon: icon,
            confirmButtonText: 'Ok'
          })
    }

    return [MenssagePeticion]
}

export default useMessage