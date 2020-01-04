<template>
  <div>
    <pre>
      // connect会把dispatch自动挂载到组件的this.props上，state通过connect函数挂载
      // 注意dispatch一个action是异步操作，会返回一个promise对象，可以用then回调，dispatch一个reducer是同步操作，不会返回promise对象，也就是不可以使用then
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
