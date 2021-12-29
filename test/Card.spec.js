import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

var guestLadger = 
    {
        email:"g@gmail.com",message:"mes"
    }


describe('GuestLadgerList', () => {
  test('is renders correctly', async() => {
    const wrapper = mount(Card,{ 
           propsData:{
              guestLadger: guestLadger,
              index : 0
            }
    })
    const container = await wrapper.find('#cardContainer0');
    expect(container.isVisible()).toBe(true)
  })
  
})
