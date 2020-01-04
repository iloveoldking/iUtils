<template>
  <div>
    <pre>
      /**
       * react高阶组件(Higher-Order Components)
       * 目的：重用组件逻辑的高级技术
       * 解释：高阶组件是一个函数，能够接受一个组件并返回一个新的组件
      */
      代码演示：
      const HOCFactory = WrappedComponent => {
        return class extends Component {
          render() {
            return (
              &lt;div&gt;
                ...other components or dom
                &lt;WrappedComponent {...this.props} /&gt;
                ...other components or dom
              &lt;/div&gt;
            )
          }
        }
      }

      class A extends Component {
        render() {
          const { props } = this
          return {
            &lt;div&gt;
              &lt;h1&gt;name: {props.name}&lt;/h1&gt;
              &lt;h1&gt;age: {props.age}&lt;/h1&gt;
              &lt;button onClick={props.greet}&gt;click to greet&lt;/button&gt;
            &lt;/div&gt;
          }
        }
      }

      const B = HOCFactory(A)

      &lt;B name={'jack'} age={18} greet={greet} /&gt;

      总结：高阶组件通过将组件传入函数中进行了一次操作，可以修改结构，或者向原组件添加若干属性和方法</pre>
  </div>
</template>
