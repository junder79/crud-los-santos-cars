import React, { useState } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const useMessageQuestion = () => {

    const MessageQuestion = (titulo, texto, icon) => {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: icon,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('eliminado');
            }
        })
    }

    return [MessageQuestion];
}

export default useMessageQuestion