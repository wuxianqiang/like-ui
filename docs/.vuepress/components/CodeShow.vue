<template>
    <div class="code-box">
        <div :style="{height: isExpand ? 'auto' : '0'}"
             class="code-container">
            <slot></slot>
        </div>
        <span class="code-taggle"
              @click="toggle">{{isExpand ? '隐藏代码' : '显示代码'}}
        </span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isExpand: false
        }
    },
    methods: {
        toggle () {
            this.isExpand = !this.isExpand
        }
    }
}
</script>

<style lang="less">
    .code-container {
        width: 100%;
        height: auto;
        overflow: hidden;
        box-sizing: border-box;
        background: #eee;
        font-family: Source Code Pro, Monaco, Inconsolata, monospace;
        pre {
            padding: 10px 0;
        }
        code {
            line-height: 22px;
            border: none;
            .hljs-tag {
                color: red;
            }
            .hljs-attr {
                color: red;
            }
            .hljs-string {
                color: red;
            }
        }
    }

    .code-taggle {
        width: 100%;
        text-align: center;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
        padding: 10px 0;
        background: #eee;
        &:hover {
            color: red;
        }
    }
</style>
