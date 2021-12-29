import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue'
import InputForm from '@/components/InputForm.vue'

describe('GuestLadgerList', () => {
  test('is taken data from local storage correctly', async() => {
    const wrapper = mount(index)
    expect(wrapper).toBeTruthy();
    wrapper.setData({
      guestLadgers: [
        {"email":"g@gmai.com",message:"asfaf"}
      ]
    })
    const inputForm = await wrapper.findComponent('.input')
    expect(inputForm.exists()).toBe(true)
  })
  
})
