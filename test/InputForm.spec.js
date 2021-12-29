import { mount } from '@vue/test-utils'
import InputForm from '@/components/InputForm.vue'

describe('InputForm', () => {
  test('is a Vue instance renders correctly', async() => {
    const wrapper = mount(InputForm)
    expect(wrapper.vm).toBeTruthy()
    const emailInput = await wrapper.find('#emailINP')
    expect(emailInput.isVisible()).toBe(true);
    const messageInput = await wrapper.find('#messageINP');
    expect(messageInput.isVisible()).toBe(true);
    const submitButton = await wrapper.find('#submitBTN');
    expect(submitButton.isVisible()).toBe(true);

  });
  test('is takes inputs to models correctly', async() => {
    const wrapper = mount(InputForm)
    //email v-model controlling
    const emailInput = await wrapper.find('#emailINP')
    await emailInput.setValue('guest@guest.com')
    expect(wrapper.vm.email).toBe('guest@guest.com')
    //message v-model controlling
    const messageInput = await wrapper.find('#messageINP');
    await messageInput.setValue('Hey Bro')
    expect(wrapper.vm.message).toBe('Hey Bro')

  });
  test('is adds new content to the list', async() => {
    const wrapper = mount(InputForm)
    const submitFunc = jest.fn();
    wrapper.setMethods({
      addGuestLadger : submitFunc
    })
    const submitButton = await wrapper.find('#submitBTN');
    await submitButton.trigger('click');
    expect(submitFunc).toHaveBeenCalled();
  });
  
})
