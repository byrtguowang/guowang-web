import Vue from 'vue';
import uploadFiles from './uploadFiles'

const components = [uploadFiles];
components.map(function(component) {
    Vue.component(component.name, component);
});