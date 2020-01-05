<template>
	<div class="home-wrapper">
		<a-alert type="info" class="banner-tip">
			<a slot="message" href="https://github.com/iloveoldking/iUtils" target="_blank">
				<a-icon type="github" />iUtils
			</a>
			<p slot="description">
				初衷是为了收集使用较多或者封装较实用的代码块，包括前端流行框架以及node（主要是egg框架），已收录
				<em>34</em>项
			</p>
		</a-alert>
		<a-collapse>
			<!-- css -->
			<a-collapse-panel header="css相关">
				<a-collapse>
					<a-collapse-panel header="清除浮动clearfix">
						<clear-fix />
					</a-collapse-panel>
					<a-collapse-panel header="使用less继承">
						<less-extends />
					</a-collapse-panel>
					<a-collapse-panel header="在css modules中覆盖组件样式">
						<css-modules />
					</a-collapse-panel>
					<a-collapse-panel header="移动端适配px转换rem">
						<rem-transition />
					</a-collapse-panel>
					<a-collapse-panel header="根据宽高比，高度随宽度自适应变化">
						<auto-height />
					</a-collapse-panel>
				</a-collapse>
			</a-collapse-panel>
			<!-- jquery -->
			<a-collapse-panel header="jquery相关">
				<a-collapse>
					<a-collapse-panel header="封装jquery中的ajax请求和ajax上传文件">
						<jquery-ajax />
					</a-collapse-panel>
					<a-collapse-panel header="form表单信息提取功能">
						<serialize-form />
					</a-collapse-panel>
					<a-collapse-panel header="基于jquery封装的简版alert提示组件">
						<jquery-alert />
					</a-collapse-panel>
					<a-collapse-panel header="初始化zTree插件">
						<init-ztree />
					</a-collapse-panel>
					<a-collapse-panel header="bootstrapTable构建方式">
						<bootstrap-table />
					</a-collapse-panel>
				</a-collapse>
			</a-collapse-panel>
			<!-- vue -->
			<a-collapse-panel header="vue相关">
				<a-collapse>
					<a-collapse-panel header="vue项目打包注意事项">
						<vue-build />
					</a-collapse-panel>
					<a-collapse-panel header="less报错解决方案">
						<less-error />
					</a-collapse-panel>
					<a-collapse-panel header="封装vue版ckeditor富文本编辑器">
						<vue-ckeditor />
					</a-collapse-panel>
					<a-collapse-panel header="理解$nextTick的作用">
						<next-tick />
					</a-collapse-panel>
				</a-collapse>
			</a-collapse-panel>
			<!-- react -->
			<a-collapse-panel header="react相关">
				<a-collapse>
					<a-collapse-panel header="react高阶组件HOC">
						<react-hoc />
					</a-collapse-panel>
					<a-collapse-panel header="umi框架中connect model">
						<umi-connect />
					</a-collapse-panel>
					<a-collapse-panel header="umi框架中路由拦截器">
						<umi-router-interceptor />
					</a-collapse-panel>
					<a-collapse-panel header="umi框架中models">
						<umi-models />
					</a-collapse-panel>
					<a-collapse-panel header="react native项目打包">
						<react-native-build />
					</a-collapse-panel>
				</a-collapse>
			</a-collapse-panel>
			<!-- node -->
			<a-collapse-panel header="node相关">
				<a-collapse>
					<a-collapse-panel header="在egg框架中使用MongoDB作为数据库">
						<egg-mongo />
					</a-collapse-panel>
					<a-collapse-panel header="mongoose部分常见api介绍">
						<egg-mongoose />
					</a-collapse-panel>
					<a-collapse-panel header="mongoose关联查询操作">
						<mongoose-populate />
					</a-collapse-panel>
					<a-collapse-panel header="在egg框架中支持跨域请求">
						<egg-cors />
					</a-collapse-panel>
					<a-collapse-panel header="node上传文件">
						<node-upload />
					</a-collapse-panel>
				</a-collapse>
			</a-collapse-panel>
			<!-- other -->
			<a-collapse-panel header="其他">
				<a-collapse>
					<a-collapse-panel header="封装axios请求数据">
						<request-doc />
					</a-collapse-panel>
					<a-collapse-panel header="解析url字符串中参数的方法">
						<search-params />
					</a-collapse-panel>
					<a-collapse-panel header="配置服务器代理解决跨域请求问题">
						<server-proxy />
					</a-collapse-panel>
					<a-collapse-panel header="将扁平数据格式转换为树状数据结构">
						<tree-data />
					</a-collapse-panel>
					<a-collapse-panel header="正则语法以及常见表达式">
						<regular-expression />
					</a-collapse-panel>
					<a-collapse-panel header="videoJs插件使用方法">
						<video-js />
					</a-collapse-panel>
					<a-collapse-panel header="js.cookie插件用法">
						<js-cookie />
					</a-collapse-panel>
					<a-collapse-panel header="file标签获取文件以及base64格式数据">
						<file-read />
					</a-collapse-panel>
					<a-collapse-panel header="生成随机UID">
						<u-id />
					</a-collapse-panel>
					<a-collapse-panel header="rgb和16进制色值互转">
						<color-transform />
					</a-collapse-panel>
					<a-collapse-panel header="常见的code设置">
						<code-setting />
					</a-collapse-panel>
				</a-collapse>
			</a-collapse-panel>
		</a-collapse>
	</div>
</template>

<script>
import RequestDoc from '@/components/Request';
import TreeData from '@/components/TreeData';
import LessError from '@/components/LessError';
import VueBuild from '@/components/VueBuild';
import ClearFix from '@/components/ClearFix';
import BootstrapTable from '@/components/BootstrapTable';
import SerializeForm from '@/components/SerializeForm';
import JqueryAjax from '@/components/JqueryAjax';
import JqueryAlert from '@/components/JqueryAlert';
import SearchParams from '@/components/SearchParams';
import RegularExpression from '@/components/RegularExpression';
import InitZtree from '@/components/InitZtree';
import FileRead from '@/components/FileRead';
import UmiConnect from '@/components/UmiConnect';
import LessExtends from '@/components/LessExtends';
import CssModules from '@/components/CssModules';
import UmiRouterInterceptor from '@/components/UmiRouterInterceptor';
import EggMongo from '@/components/EggMongo';
import EggMongoose from '@/components/EggMongoose';
import MongoosePopulate from '@/components/MongoosePopulate';
import NodeUpload from '@/components/NodeUpload';
import EggCors from '@/components/EggCors';
import VueCkeditor from '@/components/VueCkeditor';
import RemTransition from '@/components/RemTransition';
import NextTick from '@/components/NextTick';
import ServerProxy from '@/components/ServerProxy';
import VideoJs from '@/components/VideoJs';
import AutoHeight from '@/components/AutoHeight';
import JsCookie from '@/components/JsCookie';
import ReactNativeBuild from '@/components/ReactNativeBuild';
import UId from '@/components/UId';
import ColorTransform from '@/components/ColorTransform';
import UmiModels from '@/components/UmiModels';
import ReactHoc from '@/components/ReactHoc';
import CodeSetting from '@/components/CodeSetting';

export default {
	name: 'home',
	components: {
		RequestDoc,
		TreeData,
		LessError,
		VueBuild,
		ClearFix,
		BootstrapTable,
		SerializeForm,
		JqueryAjax,
		JqueryAlert,
		SearchParams,
		RegularExpression,
		InitZtree,
		FileRead,
		UmiConnect,
		LessExtends,
		CssModules,
		UmiRouterInterceptor,
		EggMongo,
		EggMongoose,
		MongoosePopulate,
		NodeUpload,
		EggCors,
		VueCkeditor,
		RemTransition,
		NextTick,
		ServerProxy,
		VideoJs,
		AutoHeight,
		JsCookie,
		ReactNativeBuild,
		UId,
		ColorTransform,
		UmiModels,
		ReactHoc,
		CodeSetting
	}
};
</script>

<style lang="less">
@import './style.less';
</style>
