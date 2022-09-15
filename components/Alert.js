import Swal from 'sweetalert2'

export default function alert() {
    Swal.fire({
      title: 'This is just a demo!',
      icon: 'info',
      confirmButtonText: 'I understand',
    })
  }