import { mount } from '@vue/test-utils'
import AnonymousForm from '@/components/Pages/Home/AnonymousForm.vue'
import InputLogin from '@/components/Pages/Login/InputLogin.vue'
import Dash from '@/pages/dashboard/index.vue'


describe('Testes de componentes', () => {
  test('Formulário está sendo montado', () => {
    const wrapper = mount(AnonymousForm)
    wrapper.setData({ link: 'http://www.google.com.br' })
    expect(wrapper.vm).toBeTruthy()
  })

  const authMock = {
    loggedIn: true,
    setToken: true
  }
  
  test('Dashboad sendo renderizada', () => {
    const wrapper = mount(Dash, {
      $axios.setToken('Bearer 32Sds2aS6da2Afa6.Asd53sadga62sDDs6aDaV5gf'),
      mocks: {
        $auth: authMock,
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

})
