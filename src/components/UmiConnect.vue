<template>
  <div>
    <pre>
      // connect会把dispatch自动挂载到组件的this.props上，state通过connect函数挂载
      import { connect } from 'dva';
      @connect(({ user }) => ({ user }))
      class BlankLayout extends Component {

        componentDidMount() {
          const { dispatch } = this.props;
          dispatch({
            type: 'user/fetchCurrent',
          });
        }
        
        render() {
          const { children, user } = this.props;
          return (
            &lt;div&gt;
              {children}
            &lt;/div&gt;
          )
        }
      }</pre>
  </div>
</template>

<script>
export default {
  name: "umiConnect"
};
</script>