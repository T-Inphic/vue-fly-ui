<template>
  <button
    class="fy-button"
    @click="handleClick"
    :class="[]"
    >
    <slot></slot>
  </button>
</template>

<script>

/**
 * fy-button
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <fy-button size="large" icon="back" type="primary">按钮</fy-button>
 */

export default {
  name: 'FyButton',
  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss">
  @import '../../../style/theme.scss';
  .fy-button{
    appearance: none;
    border-radius: 4px;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: $color-bg-noraml;
    outline: 0;
    border: 0;
    cursor: pointer;
    color: inherit;
    &:hover{
      background-color: $color-bg-hover;
    }
    &:active{
      background-color: $color-bg-focus;
    }
  }
</style>
