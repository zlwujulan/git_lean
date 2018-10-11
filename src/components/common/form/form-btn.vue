<template>
    <button class="am-button" @click="submit" :type="type" :disabled="disabled" :class="[loading?'loading':'']"
            :action-bind-click="actionBindClick">
        <div class="ld ld-ring ld-spin"></div>
        <span class="ld-txt"><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: 'FormBtn',
        props: {
            loading: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'button'
            },
            actionBindClick: {
                type: String,
                default: ''
            }
        },
        methods: {
            submit() {
                !this.loading && this.$emit('click');
            }
        }
    };
</script>
<style lang="scss" scoped="">
    .loading {
        position: relative;
        opacity: 0.5;
    }

    .loading .ld {
        opacity: 1;
        z-index: auto;
    }

    .loading .ld-txt {
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
    }

    .ld-txt {
        display: inline-block;
        -webkit-transition: all .3s;
        transition: all .3s;
    }

    .ld {
        width: 1em;
        height: 1em;
        top: 50%;
        left: auto;
        right: 2em;
        position: absolute;
        margin: -.5em;
        opacity: 0;
        z-index: -100;
        -webkit-transition: all .3s;
        transition: all .3s;
        transition-timing-function: ease-in;
    }

    .ld-ring:after {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-width: 2px;
        border-style: solid;
        border-color: #FFF #FFF #FFF transparent;
        border-radius: 10000px;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: " ";
        display: inline-block;
        background: center center no-repeat;
        background-size: cover;
    }

    .ld.ld-spin {
        -webkit-animation: ld-spin 1s infinite;
        animation: ld-spin 1s infinite
    }

    @keyframes ld-spin {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
            animation-timing-function: cubic-bezier(.55, .055, .675, .19)
        }

        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
            animation-timing-function: cubic-bezier(.215, .61, .355, 1)
        }

        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }

    @-webkit-keyframes ld-spin {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
            animation-timing-function: cubic-bezier(.55, .055, .675, .19)
        }

        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
            animation-timing-function: cubic-bezier(.215, .61, .355, 1)
        }

        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }
</style>
