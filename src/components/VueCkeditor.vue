<template>
  <div>
    <pre>
      安装依赖
      npm install @ckeditor/ckeditor5-build-classic --save

      // CKEditor.vue
      &lt;template&gt;
        &lt;ckeditor :value="editorData" :editor="editor" :config="editorConfig" @input="handleEditorChange"&gt;&lt;/ckeditor&gt;
      &lt;/template&gt;

      &lt;script&gt;
        import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
        import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';
        import userConfig from '@/config';
        const hasProp = (instance, prop) =&gt; {
          const $options = instance.$options || {};
          const propsData = $options.propsData || {};
          return prop in propsData;
        };
        export default {
          name: 'ckEditor',
          props: ['value'],
          data() {
            const value = this.value || '';
            return {
              editor: ClassicEditor,
              editorConfig: {
                toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'imageUpload',
                  'insertTable', '|', 'undo', 'redo'
                ],
                language: 'zh-cn',
                ckfinder: {
                  uploadUrl: `${userConfig.baseURL}/editorUpload`
                }
              },
              editorData: value,
            }
          },
          watch: {
            value(val = '') {
              this.editorData = val;
            },
          },
          methods: {
            triggerChange(changedValue) {
              this.$emit('change', changedValue);
            },
            handleEditorChange(editorData) {
              if (!hasProp(this, 'value')) {
                this.editorData = editorData;
              }
              this.triggerChange(editorData);
            }
          },
        }
      &lt;/script&gt;


      &lt;style lang="less"&gt;
        .ck-editor__main {
          &>.ck-editor__editable {
            min-height: 300px;
          }
        }
      &lt;/style&gt;

      // 使用
      &lt;ck-editor v-decorator="contentDecorator" /&gt;
      import ckEditor from '@/components/CKEditor'
      </pre>
  </div>
</template>
