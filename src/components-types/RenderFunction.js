import Vue from 'vue';

export default Vue.component('my-checkbox', {
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  },
  render(createElement) {
    return createElement(
      'div', {
        attrs: {
          'class': 'checkbox-wrapper'
        },
        on: {
          click: this.check
        }
      }, [
        createElement(
          'div', {
            'class': {
              checkbox: true,
              checked: this.checked
            }
          }
        ),
        createElement(
          'div', {
            attrs: {
              'class': 'title'
            }
          }, [this.title]
        )
      ]
    );
  }
});