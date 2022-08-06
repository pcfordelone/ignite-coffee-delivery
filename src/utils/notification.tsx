import { toast } from 'react-toastify'

export const notify = (message: string, type?: string) => {
  if (type === 'success') {
    toast.success(message)
    return
  }

  if (type === 'error') {
    toast.error(message)
    return
  }

  if (type === 'warn') {
    toast.warn(message)
    return
  }

  if (type === 'info') {
    toast.warn(message)
    return
  }

  toast(message)
}
