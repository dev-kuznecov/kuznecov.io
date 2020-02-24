<script lang="ts">
    import { createComponent, reactive, ref } from '@vue/composition-api'
    import { useMutation } from '@vue/apollo-composable'

    import SendMessageMutation from '~/apollo/mutations/send-message.graphql'

    interface FormState {
	    message: string,
	    from: string
    }

    export default createComponent({
        setup(props, {
	        emit
        }) {
        	const state = reactive<FormState>({
		        message: '444',
		        from: 'Аноним',
	        })

	        const input = ref<HTMLTextAreaElement>({})

            const { mutate: sendMessage } = useMutation(SendMessageMutation, () => ({
                variables: {
                    from: state.from,
                    message: state.message,
                }
            }))

            async function send() {
                if(!state.message) return

	            emit('send-load', true)

                const response = await sendMessage(),
	                newMessage = response.data.sendMessage

	            emit('send-message', newMessage)
	            emit('send-load', false)

	            state.message = ''
                change(true)
            }

            function change(reset: boolean) {
                if(reset) {
	                input.value.style.height = '5px'
                    return
                }

                input.value.style.height = '5px'
                input.value.style.height = (input.value.scrollHeight) + 'px'
                input.value.scrollTop = input.value.scrollHeight
            }

            return {
	            ...state,
        		state,
	            input,
                send,
                change,
            }
        }
    })
</script>

<template>
    <div class="chat-form">
        <div class="chat-form__content">
            <div class="chat-form__row">
                <div class="chat-form__field">
                    <textarea
                            ref="input"
                            v-model="state.message"
                            @input="change()"
                            @keydown.enter.exact.prevent
                            @keyup.enter.exact="send"
                            class="chat-form__input"
                            placeholder="Сообщение..."
                    ></textarea>
                </div>
                <div class="chat-form__controls">
                    <div @click="send" class="chat-form__submit">
                        <v-icon name="telegram" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .chat-form {
        $b: '.chat-form';

        background-color: $c-bg-block;
        padding: $g / 2;
        border-radius: $b-radius;

        &__row {
            display: flex;
        }

        &__field {
            flex-grow: 1;
            display: flex;
        }

        &__input {
            padding: $g / 2;
            width: 100%;
            line-height: 1.4;
            color: $c-text;
            height: 5px;
            min-height: 46px;
            max-height: 135px;
            resize: none;
            border: none;
            background-color: $c-bg;
            border-radius: $b-radius;
        }

        &__controls {
            flex-basis: 60px;
            max-width: 60px;
            min-width: 60px;
            padding-left: $g / 2;
            display: flex;
            align-items: flex-end;
        }

        &__submit {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $c-hover;
            border-radius: $b-radius;
            width: 100%;
            height: 46px;
            transition: background-color $t;

            .v-icon {
                width: 24px;
                height: 24px;
                fill: #fff;
            }

            &:hover {
                background-color: $c-active;
            }

            &:active {
                background-color: $c-active-2;
            }
        }
    }
</style>