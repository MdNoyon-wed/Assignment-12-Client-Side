import axios from 'axios'

export const imageUpload =  async image => {
      const formData = new FormData()
    formData.append('image', image)

        const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=c8ec8c34f9502e28927ee6c45a9fb81d`,

        FormData)

        return data.data.display_url

}