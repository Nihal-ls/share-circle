import axios from 'axios'

export const imageUpload = async imageData => {
  const formData = new FormData()
  formData.append('image', imageData)

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${"88ddd5a61e1920adc86b62685b440e11"}`,
    formData
  )
  return data?.data?.display_url
}