<template>
    <div class="dm-navigation" v-show="!hidden">
        <page-title :title="title"></page-title>
        <div class="dm-flexbox dm-topbar">
            <div class="left">
                <slot name="left">
                    <a href="/" v-if="mode==='home'">
                        <svg class="dm-icon home" aria-hidden="true">
                            <use xlink:href="#icon-index">
                                <svg id="icon-index" viewBox="0 0 1024 1024" width="100%" height="100%">
                                    <path
                                        d="M234.666667 930.133333h554.666666v-362.666666h181.333334L512 132.266667 53.333333 567.466667H234.666667v362.666666z m-74.666667-405.333333L512 192l352 332.8H746.666667v362.666667h-149.333334v-128h-170.666666v128H277.333333v-362.666667H160z"
                                        fill="#4A4A4A"></path>
                                </svg>
                            </use>
                        </svg>
                    </a>
                    <a href="javascript:history.go(-1);" v-else-if="mode==='back'">
                        <svg class="dm-icon back" aria-hidden="true">
                            <use xlink:href="#icon-more-copy">
                                <svg id="icon-more-copy" viewBox="0 0 1024 1024" width="100%" height="100%">
                                    <path
                                        d="M779.51897965 62.34582378L714.54398973-2.62916615 265.22091597 446.69390762 265.20778819 446.68077983 200.23279968 511.6572279 200.24446789 511.67035571 200.23279968 511.68202389 265.20778819 576.65701382 265.22091597 576.64388604 714.54398973 1025.96695979 779.51897965 960.99196987 330.19590589 511.67035571Z"
                                        fill="#808080"></path>
                                </svg>
                            </use>
                        </svg>
                    </a>
                </slot>
            </div>
            <div class="main dm-flex-1">
                <slot>{{title}}</slot>
            </div>
            <div class="right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navigation',
        props: {
            hidden: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
            mode: {
                type: String,
                default: ''
            },
        }
    };
</script>
<style lang="scss" scoped>
    @import '../../assets/css/helpers/index.scss';

    .dm-navigation {
        .dm-topbar {
            position: relative;
            height: px2rem(45px);
            background-color: #fff;
            box-shadow: 1px 1px 1px rgba(7, 0, 2, .2);
        }
        .left {
            margin-left: px2rem(12px);
        }
        .right {
            margin-right: px2rem(12px);
        }
        .main {
            width: 60%;
            left: 20%;
            position: absolute;
            font-size: px2rem(17px);
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

        }
        .dm-icon {
            &.back {
                width: px2rem(16px);
                height: px2rem(16px);
            }
        }
    }
</style>
