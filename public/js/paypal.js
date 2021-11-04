const currentValue = document.getElementById('text')
const textBtn = document.getElementById('textBtn')
let theValueIWant
textBtn.addEventListener('click', () => {
  theValueIWant = parseInt(currentValue.value)
  console.log(theValueIWant);  
})

function initPayPalButton() {
  paypal
    .Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'donate',
      },

      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              description: 'Sponsor a child',
              amount: {
                currency_code: 'USD',
                value: theValueIWant,
                breakdown: {
                  item_total: { currency_code: 'USD', value: theValueIWant },
                },
              },
              items: [
                {
                  name: 'item name',
                  unit_amount: { currency_code: 'USD', value: theValueIWant },
                  quantity: '1',
                  category: 'DONATION',
                },
              ],
            },
          ],
        })
      },

      onApprove: function (data, actions) {
        return actions.order.capture().then(function (orderData) {
          // Full available details
          console.log(
            'Capture result',
            orderData,
            JSON.stringify(orderData, null, 2)
          )

          // Show a success message within this page, e.g.
          const element = document.getElementById(
            'paypal-button-container'
          )
          element.innerHTML = ''
          element.innerHTML = '<h3>Thank you for your donation!</h3>'

          // Or go to another URL:  actions.redirect('thank_you.html');
        })
      },

      onError: function (err) {
        console.log(err)
      },
    })
    .render('#paypal-button-container')
}
initPayPalButton()