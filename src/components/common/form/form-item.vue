<template>
    <div class="dm-list-item">
        <div class="dm-list-main">
            <div class="dm-list-label">{{label}}</div>
            <div class="dm-list-control">
                <input type="text"
                       class="dm-list-input"
                       :placeholder="placeholder"
                       ref="input" @input="handleInput"
                       @blur="handleBlur"
                       @focus="handleFocus"
                       :name="name"
                       v-model="value"
                       autocomplete="off">
            </div>
            <template v-if="clear">
                <div class="dm-list-clear" @click="reset" v-show="value && focused">
                    <i class="dm-icon dm-icon-clear"></i>
                </div>
            </template>
            <template v-if="type==='password'">
                <div class="dm-list-eye">
                    <i class="dm-icon dm-icon-eye" v-if="!pwdVisible" @click="setEye('on')"></i>
                    <i class="dm-icon dm-icon-eye-on" v-else @click="setEye('off')"></i>
                </div>
            </template>
            <div class="dm-list-action">
                <slot name="actions" :me="this"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormItem',
        props: {
            type: {
                type: String,
                default: 'text'
            },
            clear: {
                type: Boolean,
                default: true
            },
            label: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            externalValue: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                _pid: null,
                pwdVisible: false,
                errorMsg: '',
                value: '',
                focused: false,
            };
        },
        methods: {
            handleInput() {
                this.$emit('userchange', this.value, this);
            },
            handleBlur() {
                clearTimeout(this._pid);
                this._pid = setTimeout(() => {
                    this.focused = false;
                }, 200);
                this.$emit('blur', this.value, this);
            },
            handleFocus() {
                clearTimeout(this._pid);
                this.focused = true;
                this.$emit('focus', this.value, this);
            },
            reset(emit) {
                this.value = '';
                if (emit) this.$emit('userchange', this.value, this);
                return this;
            },
            setType(type) {
                let $input = this.$refs.input;

                $input.setAttribute('type', type);
            },
            setValue(v) {
                this.value = v;
            },
            setEye(action) {
                if (action === 'on') {
                    this.pwdVisible = true;
                    this.setType('text');
                } else {
                    this.pwdVisible = false;
                    this.setType('password');
                }
            },
        },
        mounted() {
            this.setType(this.type);
            this.externalValue && this.setValue(this.externalValue);
        }
    };
</script>
