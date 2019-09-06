export const HelloWorld = {
  render: function (createElement) {
    return createElement('h1', {
      class: 'heading1'
    }, this.$slots.default);
  }
}
export default HelloWorld;